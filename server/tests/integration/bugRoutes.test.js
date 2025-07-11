// tests/bugRoutes.test.js
const request = require("supertest");
const app = require("../server");

describe("POST /bugs", () => {
  it("should create a new bug", async () => {
    const res = await request(app)
      .post("/api/bugs")
      .send({ title: "UI Bug", description: "Button not working" });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("UI Bug");
  });
});
