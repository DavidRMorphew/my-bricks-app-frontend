import "@testing-library/jest-dom";
import { afterAll, afterEach, expect, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterAll(() => {
  vi.resetModules();
});

afterEach(() => {
  vi.resetAllMocks();
  cleanup();
});
