import assert from "node:assert/strict";
import test from "node:test";
import { toSentenceCase } from "./textCase.js";

test("sentence case capitalizes sentence starts and preserves existing casing", () => {
  assert.equal(
    toSentenceCase("the NASA center in New York is great. it uses an iPhone."),
    "The NASA center in New York is great. It uses an iPhone."
  );
});

test("sentence case supports Unicode letters", () => {
  assert.equal(
    toSentenceCase("élan is a word. über is another."),
    "Élan is a word. Über is another."
  );
});

test("sentence case works without whitespace after punctuation", () => {
  assert.equal(toSentenceCase("hello.world!again?yes"), "Hello.World!Again?Yes");
});

test("sentence case retains leading whitespace and leaves non-letters alone", () => {
  assert.equal(toSentenceCase("  hello. world"), "  Hello. World");
  assert.equal(toSentenceCase("123 hello. 456 world"), "123 hello. 456 world");
  assert.equal(toSentenceCase("   "), "   ");
});
