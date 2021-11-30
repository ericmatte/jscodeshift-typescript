import { defineTest } from "jscodeshift/src/testUtils";

describe("convert-default-props", () => {
  const tests = ["external", "forwardRef", "imported", "inline", "missing"];

  tests.forEach((test) => {
    defineTest(__dirname, "./convert-default-props", {}, `convert-default-props/${test}`, { parser: "tsx" });
  });
});
