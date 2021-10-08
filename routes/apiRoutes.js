//Dependencies
const router = require("express").Router();
const workout = require("../models/workout.js");

//GET Requests
router.get("/api/workouts", (req, res) => {
    workout.find()
        .then(results => {
            res.json(results);
        })
        .catch(err => {
            res.json(err);
        });
});

//POST Requests
router.post("/api/workouts", (req, res) => {
    workout.create({ })
        .then(results => {
            res.json(results);
        })
        .catch(err => {
            res.json(err);
        })
});

//PUT Requests 
router.put("/api/workouts/:id", (req, res) => {

    workout.findByIdAndUpdate(
        req.params.id,
        {$push : {exercises: req.body}}
    )
    .then(results => {
        res.json(results);
    });
});

router.get("/api/workouts/range", (req, res) => {
    workout.find()
        .then(results => {
            res.json(results)
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;