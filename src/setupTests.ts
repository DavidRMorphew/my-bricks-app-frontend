import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterAll(() => {
  jest.resetModules();
});

afterEach(() => {
  jest.resetAllMocks();
  cleanup();
});
