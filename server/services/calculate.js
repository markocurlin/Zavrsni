function prijelaziTransformacija(prijelazi) {
  const proba = new Map();

  prijelazi.forEach(prijelaz => {
    proba.set(prijelaz.Kod_2, { Kod_2: prijelaz.Kod_2 })
  })
  
  proba.forEach(predmet => {
    const rezultat = prijelazi.filter( prijelaz => prijelaz.Kod_2 === predmet.Kod_2)
    if (rezultat.length != 0) {
      let priznatiPredmeti = [];
      rezultat.forEach(rez => {
        priznatiPredmeti.push({Kod_1: rez.Kod_1})
      })
      predmet["Polozeno"] = priznatiPredmeti;
    }
  })

  return Array.from(proba.values())
}

function calculateSubjects(fromStudy, toStudy, prijelazi) {
  const transformedFromStudy = [];

  fromStudy.forEach(listaPredmetaPoSemestrima => {
    transformedFromStudy.push(...listaPredmetaPoSemestrima);
  })

  prijelazi = prijelaziTransformacija(prijelazi);

  prijelazi.forEach(predmet => {
    predmet.Polozeno.forEach( polozeno => {
      const rezultat = transformedFromStudy.filter( p => p.Kod == polozeno.Kod_1);
      polozeno["Ime"] = rezultat[0].Ime;
      polozeno["Semestar"] = rezultat[0].Semestar;
      polozeno["ECTS"] = rezultat[0].Ects;
      polozeno["Ocjena"] = rezultat[0].Ocjena;
    })
  })

  toStudy.forEach(predmetiPoSemestru => {
    const rezultat = prijelazi.filter(p => p.Kod_2 == predmetiPoSemestru.Kod);
    if (rezultat.length != 0) {
      predmetiPoSemestru["Polozeno"] = rezultat[0].Polozeno;
    }
  });

  const predmetiPoSemestru = [[], [], [], [], [], [], []];
     
  toStudy.map((subject) => {
    predmetiPoSemestru[subject.Semestar-1].push(subject)
  })
           
  return predmetiPoSemestru;
}

module.exports = {
    calculateSubjects
}