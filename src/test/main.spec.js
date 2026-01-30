const { describe, it, expect } = require("@jest/globals");

describe("GET /", () => {
  it("should return 200", () => {
    const response = "Hello Woorld";
    expect(response).toBe("Hello World");
  });
});