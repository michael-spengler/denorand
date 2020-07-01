/* tslint:disable */
/* eslint-disable */
/**
* @param {number} n
* @returns {Uint8Array}
*/
export function u8(n: number): Uint8Array;
/**
* @param {number} n
* @returns {Int8Array}
*/
export function i8(n: number): Int8Array;
/**
* @param {number} n
* @returns {Uint16Array}
*/
export function u16(n: number): Uint16Array;
/**
* @param {number} n
* @returns {Int16Array}
*/
export function i16(n: number): Int16Array;
/**
* @param {number} n
* @returns {Uint32Array}
*/
export function u32(n: number): Uint32Array;
/**
* @param {number} n
* @returns {Int32Array}
*/
export function i32(n: number): Int32Array;
/**
* @param {number} n
* @returns {BigUint64Array}
*/
export function u64(n: number): BigUint64Array;
/**
* @param {number} n
* @returns {BigInt64Array}
*/
export function i64(n: number): BigInt64Array;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly u8: (a: number, b: number) => void;
  readonly i8: (a: number, b: number) => void;
  readonly u16: (a: number, b: number) => void;
  readonly i16: (a: number, b: number) => void;
  readonly u32: (a: number, b: number) => void;
  readonly i32: (a: number, b: number) => void;
  readonly u64: (a: number, b: number) => void;
  readonly i64: (a: number, b: number) => void;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
        