import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import fs from "fs";
import path from "path";

// Initialize the MCP Server
const server = new Server(
  {
    name: "textutility-insights",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Define available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "get_component_list",
        description: "Lists all React components found in the src/components directory",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "get_project_stats",
        description: "Returns basic statistics about the project structure",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
    ],
  };
});

// Implement tool logic
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name } = request.params;

  if (name === "get_component_list") {
    try {
      const componentsDir = path.join(process.cwd(), "src", "components");
      const files = fs.readdirSync(componentsDir).filter(file => file.endsWith(".jsx") || file.endsWith(".tsx"));
      return {
        content: [{ type: "text", text: `Components found: ${files.join(", ")}` }],
      };
    } catch (error) {
      return {
        content: [{ type: "text", text: `Error reading components: ${error.message}` }],
        isError: true,
      };
    }
  }

  if (name === "get_project_stats") {
    try {
      const srcDir = path.join(process.cwd(), "src");
      const allFiles = fs.readdirSync(srcDir, { recursive: true }).filter(file => !file.includes("node_modules"));

      return {
        content: [{
          type: "text",
          text: `Project Stats:\n- Total files in src: ${allFiles.length}\n- Components: ${allFiles.filter(f => f.includes("components")).length}\n- App root: ${fs.existsSync(path.join(srcDir, "App.jsx")) ? "✅ Found" : "❌ Missing"}`
        }],
      };
    } catch (error) {
      return {
        content: [{ type: "text", text: `Error calculating stats: ${error.message}` }],
        isError: true,
      };
    }
  }

  throw new Error(`Tool not found: ${name}`);
});

// Start the server using stdio transport
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("TextUtility Insights MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
