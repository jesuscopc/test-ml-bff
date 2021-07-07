const express = require("express");
const search = require("../../routes/search");
const request = require("supertest");
const app = express();
app.use("/", search); 

describe("Suit Test Search Route", () => {
  test("GET /q=iPOD - success and 4 length results", async () => {
    const { body } = await request(app).get("/?q=Ipod"); //uses the request function that calls on express app instance
    expect(body.length).toBe(4);
  });

  test("GET /?q=-.,?¡? - error bad params api", async () => {
    const res = await request(app).get("/?q=-.,?¡?"); //uses the request function that calls on express app instance
    expect(res.status).toBe(500);
  });

  test("GET /?q= - send empty queryParam", async () => {
    const res = await request(app).get("/?q="); //uses the request function that calls on express app instance
    expect(res.status).toBe(200);
  });

});