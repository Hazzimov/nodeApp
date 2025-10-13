import request from "supertest";
import app from "../app.js";

describe("GET /api/hello", () => {
  it("should return a greeting", async () => {
    const res = await request(app).get("/api/hello");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Hello, TypeScript world!" });
  });
});
