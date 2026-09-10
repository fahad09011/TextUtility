# CLAUDE.md

This file provides guidance to Claude Code  when working with code in this repository.

## Common Commands
- Development: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Preview: `npm run preview`
- Test: `npm run test`
- Deploy: `npm run deploy`

## Architecture & Structure
TextUtility is a React application built with Vite, designed for simple text manipulation.

### Key Architectural Patterns
- **Routing**: Uses `react-router-dom` for navigation.
    - `/home`: The main text utility interface (`TextArea.jsx`).
    - `/about`: Information about the tool (`About.jsx`).
- **Theming**: Implements a declarative theming system.
    - Global CSS variables are defined in `src/index.css`.
    - Theme switching is managed by toggling the `data-theme` attribute (`light` or `dark`) on the `<html>` element.
    - Component-specific dark mode styles are applied via CSS classes (e.g., `.aboutContainerDark`) and CSS variables.
- **UI Framework**: Uses Bootstrap for layout and components (e.g., Navbar, Accordions, Grid system).
- **State Management**: Currently uses state lifting in `App.jsx` to manage the theme (`mode`) and notifications (`alert`), passing them down via props.

### Component Structure
- `App.jsx`: Root component, handles global state (theme, alerts) and routing.
- `components/TextArea.jsx`: Primary functional component for text processing.
- `components/About.jsx`: Static information component.
- `components/Navbar.jsx`: Navigation and theme toggle.
- `components/Alert.jsx`: Notification display.

## Rules
- Do not modify package.json without asking.
- Keep components reusable.
- Test changes before completing work.
- Explain important changes.