export function confirmAction(title, message) {
  return window.confirm(`${title}\n\n${message}`);
}
