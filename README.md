# Backend for cars

## Available endpoints:

---

```
GET
http://localhost:8080/api/cars/
```

returns all cars objects in an array:

```
[
    {
        id: 1,
        make: "Toyota",
        model: "Camry",
        year: 2019,
        img_url: "www.toyota.com/images/camry"
    },
    {
        id: 2,
        make: "Toyota",
        model: "Prius",
        year: 2019,
        img_url: "www.toyota.com/images/camry"
    }
]
```

---

```
GET
http://localhost:8080/api/cars/:id
```

returns the car object with the corresponding id:

```
    {
        id: 1,
        make: "Toyota",
        model: "Camry",
        year: 2019,
        img_url: "www.toyota.com/images/camry"
    }
```

---

```
POST
http://localhost:8080/api/cars/
```

**request body format:**

```
{
    make: "make of car",
    model: "model of car",
    year: year,
    img_url: "url here"
}
```

returns car object with the properties provided and an generated id key value pair:

```
{
    id: x
    make: "make of car",
    model: "model of car",
    year: year,
    img_url: "url here"
}
```

---

```
DELETE
http://localhost:8080/api/cars/:id
```

it remove the car from the database with the corresponding id in the endpoint

---
