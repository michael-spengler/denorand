# Denorand

WebAssembly powered random TypedArray generation for Deno, written in Rust.

## Usage

    deno cache -r https://raw.githubusercontent.com/hazae41/denorand/master/mod.ts

```typescript
import * as rand from "https://raw.githubusercontent.com/hazae41/denorand/master/mod.ts"

// Generate a random Uint8Array[16]
const bytes = rand.u8(16);
// or u16, u32, u64, i8, i16, i32, i64 

console.log(bytes)
```

## Test 

    deno cache -r https://raw.githubusercontent.com/hazae41/denorand/master/test.ts
    deno run --allow-net https://raw.githubusercontent.com/hazae41/denorand/master/test.ts

## Building

- Install wasm-pack

      cargo install wasm-pack

- Build

      wasm-pack build --target web --release