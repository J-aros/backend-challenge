import app from "../app";
import request from "supertest";
import { cars } from "../models/cars";
import { Express } from "express";

let server: Express;

beforeAll(async () => {
  server = await app;
});

describe("GET /", () => {
  it("should return all cars", async () => {
    const res = await request(server).get("/");
    expect(res.status).toBe(200);
    expect(res.body).toEqual(cars);
  });
});

describe("GET /:id", () => {
  it("should return a car", async () => {
    const res = await request(server).get("/1");
    expect(res.status).toBe(200);
    expect(res.body).toEqual(cars[0]);
  });
});

describe("POST /", () => {
  it("should create a car", async () => {
    const res = await request(server).post("/").send({
      car: "car",
      car_model: "car_model",
      car_model_year: "car_model_year",
    });
    expect(res.status).toBe(201);
  });
});

describe("PUT /:id", () => {
  it("should update a car", async () => {
    const res = await request(server).put("/1").send({
      car: "car",
      car_model: "car_model",
      car_model_year: "car_model_year",
    });
    expect(res.status).toBe(200);
  });
});

describe("DELETE /:id", () => {
  it("should delete a car", async () => {
    const res = await request(server).delete("/1");
    expect(res.status).toBe(200);
  });
});
