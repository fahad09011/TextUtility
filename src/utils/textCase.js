/**
 * Capitalize the first letter of each sentence without changing the case of
 * any other characters. This preserves acronyms, names, and mixed-case words.
 */
export function toSentenceCase(text) {
  // Use a more broadly compatible regex for sentence starts
  return text.replace(/(^\s*[a-zA-Z]|[.!?]\s*[a-zA-Z])/g, (match) =>
    match.toUpperCase()
  );
}
