export {
  u8,
  i8,
  u16,
  i16,
  u32,
  i32,
  u64,
  i64,
} from "./pkg/denorand.js";

import init from "./pkg/denorand.js";

async function read(path: string) {
  const url = new URL(path, import.meta.url);

  if (url.protocol === "file:") {
    return await Deno.readFile(url);
  }

  const res = await fetch(url);
  return await res.arrayBuffer();
}

await init(read("./pkg/denorand_bg.wasm"));
