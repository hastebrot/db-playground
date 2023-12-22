import { openKv } from "@deno/kv";
import { join } from "node:path";
import { deserialize as decodeV8, serialize as encodeV8 } from "node:v8";

const kv = await openKv(join(import.meta.dir, "./kv.db"), {
  encodeV8,
  decodeV8,
});

const result = await kv.set(["foo", 1], "bar");
console.log(result);

kv.close();
