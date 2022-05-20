import { Request, Response } from "express";
import { cars } from "../models/cars";

export const getCar = (req: Request, res: Response) => {
  const car = cars.find((c) => c.id === parseInt(req.params.id));
  if (!car) {
    res.status(404).send("The car with the given ID was not found.");
    return;
  }
  res.send(car);
};

export const getCars = (req: Request, res: Response) => {
  res.json(cars);
};

export const createCar = (req: Request, res: Response) => {
  const { car, car_model, car_model_year } = req.body;
  if (!car || !car_model || !car_model_year) {
    return res.send({
      error: true,
      message: "car, model, and year are required",
      status: 400,
    });
  } else {
    const newCar = {
      id: cars.length + 1,
      ...req.body,
    };
    cars.push(newCar);
    res.json({
      newCar,
      error: false,
      message: "Car created successfully",
      status: 201,
    });
  }
};

export const updateCar = (req: Request, res: Response) => {
  const { car, car_model, car_model_year } = req.body;
  if (!car || !car_model || !car_model_year) {
    return res.send({
      error: true,
      message: "car, model, and year are required",
      status: 400,
    });
  } else {
    const carIndex = cars.findIndex((c) => c.id === parseInt(req.params.id));
    if (carIndex === -1) {
      return res.send({
        error: true,
        message: "The car with the given ID was not found.",
        status: 404,
      });
    }
    const updatedCar = {
      id: parseInt(req.params.id),
      ...req.body,
    };
    cars[carIndex] = updatedCar;
    res.json({
      updatedCar,
      error: false,
      message: "Car updated successfully",
      status: 200,
    });
  }
};

export const deleteCar = (req: Request, res: Response) => {
  const car = cars.find((c) => c.id === parseInt(req.params.id));
  if (!car) {
    res.status(404).send("The car with the given ID was not found.");
    return;
  } else {
    const index = cars.indexOf(car);
    cars.splice(index, 1);
    res.send({ car, message: "Car removed successfully", status: 200 });
  }
};
