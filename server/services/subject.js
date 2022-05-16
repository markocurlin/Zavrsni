const db = require("./db");

async function getSubjectsFromSelectedStudy(study) {
  const rows = await db.query(
    'SELECT Kod_' + study +' AS Kod, Ime_' + study +' AS Ime, Semestar, Ects FROM kolegij' + study + ' ORDER BY Ects DESC'
  );

  if (!rows) {
    return [];
  }

  return rows;
}

async function getSubjectsRelations(fromStudy, toStudy) {
  const studyID = parseInt(fromStudy) + parseInt(toStudy);
  //sredi restrikcije
  if (studyID === 680) {
    return [];
  }

  const rows = await db.query(
    `SELECT Ime_${fromStudy} AS Ime_1, Kod_${fromStudy} AS Kod_1, Ime_${toStudy} AS Ime_2, Kod_${toStudy} AS Kod_2 FROM kolegij${fromStudy}, kolegij${toStudy}, priznaje${studyID} WHERE kolegij${fromStudy}.Kod_${fromStudy} = priznaje${studyID}.Kod${fromStudy} AND kolegij${toStudy}.Kod_${toStudy} = priznaje${studyID}.Kod${toStudy}`
    )
  
  if (!rows) {
    return [];
  }

  return rows;
}

async function getSubjectsRelationsNew(fromStudy, toStudy) {
  const studyID = parseInt(fromStudy) + parseInt(toStudy);
  //sredi restrikcije
  if (studyID === 680) {
    return [];
  }

  const rows = await db.query(
    `SELECT Kod${fromStudy} AS Kod_1, Kod${toStudy} AS Kod_2, Ime_${toStudy} AS Ime_2, Semestar, ECTS FROM priznaje${studyID}, kolegij${toStudy} WHERE priznaje${studyID}.Kod${toStudy} = kolegij${toStudy}.Kod_${toStudy}`
    )
  
  if (!rows) {
    return [];
  }

  return rows;
}

/*
async function getSubjectsRelations(fromStudy, toStudy) {
  const studyID = parseInt(fromStudy) + parseInt(toStudy);
  const rows = await db.query(
    `SELECT Ime_${fromStudy} AS Ime_1, Kod_${fromStudy} AS Kod_1, Ime_${toStudy} AS Ime_2, Kod_${toStudy} AS Kod_2 FROM kolegij${fromStudy}, kolegij${toStudy}, priznaje${studyID} WHERE kolegij${fromStudy}.Kod_${fromStudy} = priznaje${studyID}.Kod${fromStudy} AND kolegij${toStudy}.Kod_${toStudy} = priznaje${studyID}.Kod${toStudy}`
    )
  
  if (!rows) {
    return [];
  }

  return rows;
}
*/

module.exports = {
  getSubjectsFromSelectedStudy,
  getSubjectsRelations,
  getSubjectsRelationsNew
}