const express = require("express");
const item = require("../../routes/item");
const request = require("supertest");
const app = express();
app.use("/", item); 

describe("Suit Test Search Route", () => {
  test("GET /MLM768649878 - data product extracted", async () => {
    const { body } = await request(app).get("/MLM768649878")
    expect(body).toHaveProperty('condition');
    expect(body).toHaveProperty('description');
    expect(body).toHaveProperty('title');
    expect(body).toHaveProperty('price');
  });

  it("GET /,,,, - error bad params api", async () => {
    const res = await request(app).get("/,,,,"); 
    expect(res.status).toBe(500);
  });

});