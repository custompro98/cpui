export default function assertNever(x: never): never {
  throw new Error(`Unexpected object - ${x}`);
}
