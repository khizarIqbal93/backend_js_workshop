const db = require("../db");

// GETS
exports.getAllCars = async (req, res, next) => {
	res.status(200).send(db);
};

exports.getCar = async (req, res, next) => {
	const car_id = req.params.id;
	const car = db.filter((x) => {
		return x.id == car_id;
	});

	res.status(200).send(car[0]);
};

// POSTS
exports.postCar = async (req, res, next) => {
	console.log(req);
	const request = req.body;
	function newId() {
		let len = db.length;

		if (!db.find((x) => x.id == len)) {
			return len;
		} else {
			do {
				len++;
			} while (db.find((x) => x.id == len));
			return len;
		}
	}
	const id = newId();
	const newCar = { id, ...request };

	db.push(newCar);
	// console.log(newCar);
	res.status(201).send(newCar);
};

//DELETE
exports.deleteCar = async (req, res, next) => {
	const car_id = req.params.id;
	// find requested cars position in db array
	car_index = db.findIndex((element) => element.id == car_id);
	db.splice(car_index, 1);
	console.log("car deleted");
	res.status(204).json({ message: "deleted succesfully" });
};
