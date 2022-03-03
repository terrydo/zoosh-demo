export function mergeStrings(...strings: (string | undefined)[]) {
  return strings.join(' ').trim();
}
