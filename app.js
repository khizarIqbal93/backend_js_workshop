const express = require("express");
const cors = require("cors");
const {
	getAllCars,
	postCar,
	getCar,
	deleteCar,
} = require("./controllers/app.controllers");
const app = express();
app.use(cors());
app.use(express.json());

// GET
app.get("/api/cars", getAllCars);
app.get("/api/cars/:id", getCar);

// POST
app.post("/api/cars", postCar);

// DELETE
app.delete("/api/cars/:id", deleteCar); // param

app.listen(8080, () => {
	console.log("Server listening on port 8080");
});
