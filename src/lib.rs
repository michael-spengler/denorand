use wasm_bindgen::prelude::*;

use rand::prelude::*;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn u8(n: usize) -> Vec<u8> {
    let mut gen = thread_rng();
    let mut output = Vec::with_capacity(n);
    for _ in 0..n {
        output.push(gen.gen());
    }
    return output;
}

#[wasm_bindgen]
pub fn i8(n: usize) -> Vec<i8> {
    let mut gen = thread_rng();
    let mut output = Vec::with_capacity(n);
    for _ in 0..n {
        output.push(gen.gen());
    }
    return output;
}

#[wasm_bindgen]
pub fn u16(n: usize) -> Vec<u16> {
    let mut gen = thread_rng();
    let mut output = Vec::with_capacity(n);
    for _ in 0..n {
        output.push(gen.gen());
    }
    return output;
}

#[wasm_bindgen]
pub fn i16(n: usize) -> Vec<i16> {
    let mut gen = thread_rng();
    let mut output = Vec::with_capacity(n);
    for _ in 0..n {
        output.push(gen.gen());
    }
    return output;
}

#[wasm_bindgen]
pub fn u32(n: usize) -> Vec<u32> {
    let mut gen = thread_rng();
    let mut output = Vec::with_capacity(n);
    for _ in 0..n {
        output.push(gen.gen());
    }
    return output;
}

#[wasm_bindgen]
pub fn i32(n: usize) -> Vec<i32> {
    let mut gen = thread_rng();
    let mut output = Vec::with_capacity(n);
    for _ in 0..n {
        output.push(gen.gen());
    }
    return output;
}

#[wasm_bindgen]
pub fn u64(n: usize) -> Vec<u64> {
    let mut gen = thread_rng();
    let mut output = Vec::with_capacity(n);
    for _ in 0..n {
        output.push(gen.gen());
    }
    return output;
}

#[wasm_bindgen]
pub fn i64(n: usize) -> Vec<i64> {
    let mut gen = thread_rng();
    let mut output = Vec::with_capacity(n);
    for _ in 0..n {
        output.push(gen.gen());
    }
    return output;
}
