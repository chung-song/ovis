import { expect, test } from "bun:test";
import { layoutScroll, LAYOUT_SCROLL_START, LAYOUT_SCROLL_END } from "./layoutScroll.ts";

test("layout notifications surround the actual write and finish after an exception", () => {
  const node = new EventTarget() as HTMLElement;
  let top = 10;
  const positions: number[] = [];
  node.addEventListener(LAYOUT_SCROLL_START, () => positions.push(top));
  node.addEventListener(LAYOUT_SCROLL_END, () => positions.push(top));
  expect(() => layoutScroll(node, () => { top = 20; throw new Error("write failed"); })).toThrow("write failed");
  expect(positions).toEqual([10, 20]);
});
