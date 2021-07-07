const express = require("express");
const health = require("../../routes/index");
const request = require("supertest");
const app = express();
app.use("/", health); 

describe("Suit Test Health Route", () => {
  test("GET /health - page", async () => {
    const result = await request(app).get("/")
    expect(result.status).toBe(200);
  });

  test("GET /health - not founded", async () => {
    const result = await request(app).get("/health")
    expect(result.status).toBe(404);
  });

});