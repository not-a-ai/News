export function truncateWithEllipses(text, max) {
  return text.substr(0, max-1)+(text.length>max?'&hellip;':'');
}

export default truncateWithEllipses;