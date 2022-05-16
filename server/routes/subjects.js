const express = require('express');
const router = express.Router();
const subjects = require('../services/subject');

router.post("/", async (req, res, next) => {
    try {
        const data = req.body.data;
        if (data) {
            const subjectList = await subjects.getSubjectsFromSelectedStudy(data);

            //ovo u neku funkciju
            const predmetiPoSemestru = [[], [], [], [], [], [], []];

            if (subjectList) {
                subjectList.map((subject) => {
                    predmetiPoSemestru[subject.Semestar-1].push(subject)
                })
            }

            res.json(predmetiPoSemestru);
        }
    } catch(err) {
        console.error(`Error while getting subjects`, err.message);
        next(err);
    }
})

/*

router.post("/", async (req, res, next) => {
    try {
        const data = req.body.data;
        if (data) {
            res.json(await subjects.getSubjectsFromSelectedStudy(data));
        }
    } catch(err) {
        console.error(`Error while getting subjects`, err.message);
        next(err);
    }
})

*/

module.exports = router;