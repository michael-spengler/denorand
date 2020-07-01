# Denorand

WebAssembly powered random TypedArray generation for Deno, written in Rust.

## Usage

    deno cache -r <url>/mod.ts

```typescript
import * as rand from "<url>/mod.ts"

// Generate a random Uint8Array[16]
const bytes = rand.u8(16);
// or u16, u32, u64, i8, i16, i32, i64 

console.log(bytes)
```

## Test 

    deno cache -r <url>/test.ts
    deno run --allow-net <url>/test.ts

## Building

- Install wasm-pack

    cargo install wasm-pack

- Build

    wasm-pack build --target web --release