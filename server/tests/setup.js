// server/tests/setup.js
jest.setTimeout(20000);
global.fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
