const express = require('express');
const router = express.Router();
const subjects = require('../services/subject');
const calculate = require('../services/calculate');

//sredi ovo malo....
//triba ukljucit ects bodove za kraj
router.post("/", async (req, res, next) => {
  try {
      const data = req.body;
      if (data) {
        const prijelazi = await subjects.getSubjectsRelationsNew(data.fromStudy, data.toStudy)
        const kolegijTo = await subjects.getSubjectsFromSelectedStudy(data.toStudy);

        if (prijelazi.length === 0) {
          res.json(prijelazi);
        }
        res.json(calculate.calculateSubjects(data.subjectList, kolegijTo, prijelazi))
      }
  } catch(err) {
      console.error(`Error while getting subjects`, err.message);
      next(err);
  }
})

module.exports = router;