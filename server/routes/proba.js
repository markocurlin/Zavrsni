const express = require('express');
const router = express.Router();
const subjects = require('../services/subject');
const calculate = require('../services/calculate');

const data = [
    [
        {Kod: 'FEMY03', Ime: 'Matematika', Semestar: 1, Ects: 7, Ocjena: '1'},
        {Kod: 'FETR01', Ime: 'Materijali', Semestar: 1, Ects: 6, Ocjena: '1'},
        {Kod: 'FESR02', Ime: 'Tehnička mehanika 1', Semestar: 1, Ects: 6, Ocjena: '1'},
        {Kod: 'FESY01', Ime: 'Informatika', Semestar: 1, Ects: 5, Ocjena: '1'},
        {Kod: 'FESR12', Ime: 'Tehničko crtanje i nacrtna geometrija 1', Semestar: 1, Ects: 4, Ocjena: '1'},
        {Kod: 'FEOR02', Ime: 'Engleski jezik 1', Semestar: 1, Ects: 2, Ocjena: '1'}
    ],
    [
        {Kod: 'FESR03', Ime: 'Tehnička mehanika 2', Semestar: 2, Ects: 7, Ocjena: '1'},
        {Kod: 'FESR04', Ime: 'Mehanika materijala ', Semestar: 2, Ects: 6, Ocjena: '1'},
        {Kod: 'FETR02', Ime: 'Zavarivanje i srodni postupci', Semestar: 2, Ects: 5, Ocjena: '1'},
        {Kod: 'FESR18', Ime: 'Tehničko crtanje i nacrtna geometrija 2', Semestar: 2, Ects: 5, Ocjena: '1'},
        {Kod: 'FEMY02', Ime: 'Primijenjena matematika', Semestar: 2, Ects: 5, Ocjena: '1'},
        {Kod: 'FEOR04', Ime: 'Engleski jezik 2', Semestar: 2, Ects: 2, Ocjena: '1'}
    ],
    [
        {Kod: 'FESR20', Ime: 'Termodinamika', Semestar: 3, Ects: 6, Ocjena: '1'},
        {Kod: 'FETR12', Ime: 'Obrada odvajanjem i alatni strojevi', Semestar: 3, Ects: 6, Ocjena: '1'},
        {Kod: 'FENR01', Ime: 'Elektrotehnika', Semestar: 3, Ects: 5, Ocjena: '1'},
        {Kod: 'FESR14', Ime: 'Elementi strojeva 1', Semestar: 3, Ects: 5, Ocjena: '1'},
        {Kod: 'FESR21', Ime: 'Mehanika fluida', Semestar: 3, Ects: 5, Ocjena: '1'},
        {Kod: 'FESY03', Ime: 'Uvod u poduzetništvo', Semestar: 3, Ects: 3, Ocjena: '1'}
    ],
    [
        {Kod: 'FESR15', Ime: 'Elementi strojeva 2', Semestar: 4, Ects: 7, Ocjena: '1'},
        {Kod: 'FESR22', Ime: 'Toplinski i hidraulički strojevi', Semestar: 4, Ects: 7, Ocjena: '1'},
        {Kod: 'FETR06', Ime: 'Planiranje i priprema proizvodnje', Semestar: 4, Ects: 6, Ocjena: '1'},
        {Kod: 'FETR04', Ime: 'Oblikovanje deformacijom', Semestar: 4, Ects: 5, Ocjena: '1'},
        {Kod: 'FETR05', Ime: 'Hidraulika i pneumatika', Semestar: 4, Ects: 5, Ocjena: '1'}
    ],
    [
        {Kod: 'FETR07', Ime: 'Mjerenja u tehnici', Semestar: 5, Ects: 5, Ocjena: '1'},
        {Kod: 'FETR08', Ime: 'Održavanje', Semestar: 5, Ects: 5, Ocjena: '1'},
        {Kod: 'FETR13', Ime: 'Automatizacija industrijskih procesa', Semestar: 5, Ects: 5, Ocjena: '1'},
        {Kod: 'FESR10', Ime: 'Grijanje i klimatizacija', Semestar: 5, Ects: 5, Ocjena: '1'},
        {Kod: 'FESR23', Ime: 'Metalne konstrukcije', Semestar: 5, Ects: 5, Ocjena: '1'},
        {Kod: 'FESR19', Ime: 'Konstruiranje pomoću računala', Semestar: 5, Ects: 5, Ocjena: '1'}
    ],
    [
        {Kod: 'FEYY03', Ime: 'Stručna praksa', Semestar: 6, Ects: 10, Ocjena: '1'},
        {Kod: 'FEYY02', Ime: 'Završni rad', Semestar: 6, Ects: 10, Ocjena: '1'}
    ],
    [
        {Kod: 'FETR10', Ime: 'Ekonomika i organizacija proizvodnje', Semestar: 7, Ects: 5, Ocjena: '1'},
        {Kod: 'FETR15', Ime: 'Osnove tribologije', Semestar: 7, Ects: 5, Ocjena: '1'},
        {Kod: 'FETR16', Ime: 'Programiranje CNC strojeva', Semestar: 7, Ects: 5, Ocjena: '1'},
        {Kod: 'FESS35', Ime: 'Brodski strojevi i uređaji', Semestar: 7, Ects: 5, Ocjena: '1'},
        {Kod: 'FESR25', Ime: 'Vjetroturbinski i hibridni energetski sustavi', Semestar: 7, Ects: 5, Ocjena: '1'},
        {Kod: 'FESL24', Ime: 'Energetska učinkovitost u zgradarstvu', Semestar: 7, Ects: 5, Ocjena: '1'},
        {Kod: 'FESR16', Ime: 'Zaštita od buke i vibracija', Semestar: 7, Ects: 5, Ocjena: '1'},
        {Kod: 'FESR17', Ime: 'Obnovljivi izvori energije i zaštita okoliša', Semestar: 7, Ects: 5, Ocjena: '1'},
        {Kod: 'FESR24', Ime: 'Transport u industriji', Semestar: 7, Ects: 5, Ocjena: '1'}
    ]
];

router.get("/", async (req, res) => {
    //const prijelazi = await subjects.getSubjectsRelations('530', '150')
    const prijelazi = await subjects.getSubjectsRelationsNew('130', '530');
    //res.json(calculate.outputPredmetiNew(data, prijelazi));
    res.json(prijelazi);
});

module.exports = router;

/*
router.post("/", async (req, res, next) => {
  try {
      const data = req.body;
      if (data) {
        const prijelazi = await subjects.getSubjectsRelations(data.fromStudy, data.toStudy)
        res.json(calculate.outputPredmeti(data.subjectList, prijelazi))
      }
  } catch(err) {
      console.error(`Error while getting subjects`, err.message);
      next(err);
  }
})

module.exports = router;

*/