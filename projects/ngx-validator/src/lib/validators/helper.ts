export function isObject(arg: any) {
  return arg !== null && typeof arg === 'object' && !Array.isArray(arg);
}
