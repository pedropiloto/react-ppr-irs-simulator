const maxPPRReinforcementByAge = (age) => {
  let maxByage;
  if (age <= 34) {
    maxByage = 400;
  } else if (age <= 50) {
    maxByage = 350;
  } else {
    maxByage = 300;
  }
  return Math.round((maxByage / 0.2) * 100) / 100;
};

const maxPPRReinforcementByAgeAndLimit = (age, limit) => {
  let maxByage;
  if (age <= 34) {
    maxByage = 400;
  } else if (age <= 50) {
    maxByage = 350;
  } else {
    maxByage = 300;
  }
  return Math.round((Math.min(limit, maxByage) / 0.2) * 100) / 100;
};

function toResult(majoration, limit, deductionAmountAvailable, pprReinforcement) {
  return {
    majoration, limit, deductionAmountAvailable, pprReinforcement,
  };
}

// eslint-disable-next-line consistent-return
function calc(age, dependents, collectableEarnings, totalLimitedDeductions) {
  if (
    typeof age !== 'undefined'
    && typeof dependents !== 'undefined'
    && typeof collectableEarnings !== 'undefined'
    && typeof totalLimitedDeductions !== 'undefined'
  ) {
    if (collectableEarnings < 7112) {
      return toResult(-1, -1, -1, maxPPRReinforcementByAge(age));
    }
    if (collectableEarnings < 80882) {
      const limit = (
        // eslint-disable-next-line no-mixed-operators
        (80882 - collectableEarnings) / 73549 * 1500 + 1000
      );
      const majoration = dependents < 3 ? 0 : limit * ((5 * (dependents - 2)) / 100);
      const totalLimit = limit + majoration;
      const deductionAmountAvailable = totalLimit - totalLimitedDeductions;
      if (deductionAmountAvailable <= 0) {
        return toResult(
          Math.round(majoration * 100) / 100,
          Math.round(totalLimit * 100) / 100,
          Math.round(deductionAmountAvailable * 100) / 100,
          0,
        );
      }
      const pprReifonrcement = maxPPRReinforcementByAgeAndLimit(
        age, deductionAmountAvailable
        ,
      );
      return toResult(
        Math.round(majoration * 100) / 100,
        Math.round(totalLimit * 100) / 100,
        Math.round(deductionAmountAvailable * 100) / 100,
        pprReifonrcement,
      );
    }
    const limit = 1000;
    const majoration = dependents < 3 ? 0 : limit * ((5 * (dependents - 2)) / 100);
    const totalLimit = limit + majoration;
    const deductionAmountAvailable = totalLimit - totalLimitedDeductions;

    if (deductionAmountAvailable <= 0) {
      return toResult(
        Math.round(majoration * 100) / 100,
        totalLimit,
        Math.round(deductionAmountAvailable * 100) / 100,
        0,
      );
    }
    const pprReifonrcement = maxPPRReinforcementByAgeAndLimit(
      age, deductionAmountAvailable
      ,
    );
    return toResult(
      Math.round(majoration * 100) / 100,
      Math.round(totalLimit * 100) / 100,
      Math.round(deductionAmountAvailable * 100) / 100,
      pprReifonrcement,
    );
  }
}

module.exports = {
  maxPPRReinforcementByAge, maxPPRReinforcementByAgeAndLimit, calc,
};
