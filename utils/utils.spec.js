import { calc } from './utils';

describe('Utils', () => {
  describe('Calc', () => {
    describe('When collectableEarnings less than 7112', () => {
      const collectableEarnings = 7001;
      describe('When age less than 35', () => {
        const age = 24;
        const dependents = 0;
        const totalLimitedDeductions = 396;

        it('should return pprReinforcement 2000', () => {
          const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
          expect(res)
            .toEqual({
              deductionAmountAvailable: -1, limit: -1, majoration: -1, pprReinforcement: 2000,
            });
        });
      });
      describe('When age between 35 and 50', () => {
        const age = 36;
        const dependents = 0;
        const totalLimitedDeductions = 396;

        it('should return pprReinforcement 1750', () => {
          const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
          expect(res)
            .toEqual({
              deductionAmountAvailable: -1, limit: -1, majoration: -1, pprReinforcement: 1750,
            });
        });
      });

      describe('When age higher than 50', () => {
        const age = 56;
        const dependents = 0;
        const totalLimitedDeductions = 396;

        it('should return pprReinforcement1500', () => {
          const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
          expect(res)
            .toEqual({
              deductionAmountAvailable: -1, limit: -1, majoration: -1, pprReinforcement: 1500,
            });
        });
      });
    });
    describe('When collectableEarnings between 7112 and 80882', () => {
      const collectableEarnings = 17701;
      describe('When 0 dependents', () => {
        const dependents = 0;
        describe('When age less than 35', () => {
          const age = 24;
          describe('When the difference between the limit allowed and the totalLimitedDeductions is higher than 400', () => {
            const totalLimitedDeductions = 396;
            it('should return pprReinforcement 2000', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: 1892.55,
                  limit: 2288.55,
                  majoration: 0,
                  pprReinforcement: 2000,
                });
            });
          });
          describe('When the difference between the limit allowed and the totalLimitedDeductions is between 0 and 400', () => {
            const totalLimitedDeductions = 1996;
            it('should return pprReinforcement 1462.75', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: 292.55,
                  limit: 2288.55,
                  majoration: 0,
                  pprReinforcement: 1462.75,
                });
            });
          });
          describe('When the difference between the limit allowed and the totalLimitedDeductions is equal to 0', () => {
            const totalLimitedDeductions = 2288.55;
            it('should return pprReinforcement 0', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res.pprReinforcement === 0)
                .toEqual(true);
            });
          });

          describe('When the difference between the limit allowed and the totalLimitedDeductions is less than 0', () => {
            const totalLimitedDeductions = 2600;
            it('should return pprReinforcement 0', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: -311.45,
                  limit: 2288.55,
                  majoration: 0,
                  pprReinforcement: 0,
                });
            });
          });
        });
        describe('When age between 35 and 50', () => {
          const age = 36;
          describe('When the difference between the limit allowed and the totalLimitedDeductions is higher than 350', () => {
            const totalLimitedDeductions = 396;
            it('should return pprReinforcement 1750', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: 1892.55,
                  limit: 2288.55,
                  majoration: 0,
                  pprReinforcement: 1750,
                });
            });
          });
          describe('When the difference between the limit allowed and the totalLimitedDeductions is between 0 and 350', () => {
            const totalLimitedDeductions = 1996;
            it('should return pprReinforcement 1462.75', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: 292.55,
                  limit: 2288.55,
                  majoration: 0,
                  pprReinforcement: 1462.75,
                });
            });
          });
          describe('When the difference between the limit allowed and the totalLimitedDeductions is equal to 0', () => {
            const totalLimitedDeductions = 2288.55;
            it('should return pprReinforcement0', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res.pprReinforcement === 0)
                .toEqual(true);
            });
          });

          describe('When the difference between the limit allowed and the totalLimitedDeductions is less than 0', () => {
            const totalLimitedDeductions = 2600;
            it('should return pprReinforcement 0', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: -311.45,
                  limit: 2288.55,
                  majoration: 0,
                  pprReinforcement: 0,
                });
            });
          });
        });
        describe('When age higher than 50', () => {
          const age = 56;
          describe('When the difference between the limit allowed and the totalLimitedDeductions is higher than 300', () => {
            const totalLimitedDeductions = 396;
            it('should return pprReinforcement 1500', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: 1892.55,
                  limit: 2288.55,
                  majoration: 0,
                  pprReinforcement: 1500,
                });
            });
          });
          describe('When the difference between the limit allowed and the totalLimitedDeductions is between 0 and 300', () => {
            const totalLimitedDeductions = 1996;
            it('should return pprReinforcement 1462.75', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: 292.55,
                  limit: 2288.55,
                  majoration: 0,
                  pprReinforcement: 1462.75,
                });
            });
          });
          describe('When the difference between the limit allowed and the totalLimitedDeductions is equal to 0', () => {
            const totalLimitedDeductions = 2288.55;
            it('should return pprReinforcement 0', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res.pprReinforcement === 0)
                .toEqual(true);
            });
          });

          describe('When the difference between the limit allowed and the totalLimitedDeductions is less than 0', () => {
            const totalLimitedDeductions = 2600;
            it('should return pprReinforcement 0', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: -311.45,
                  limit: 2288.55,
                  majoration: 0,
                  pprReinforcement: 0,
                });
            });
          });
        });
      });
      describe('When more than 2 dependents', () => {
        const dependents = 4;
        describe('When age less than 35', () => {
          const age = 24;
          describe('When the difference between the limit allowed and the totalLimitedDeductions is higher than 400', () => {
            const totalLimitedDeductions = 396;
            it('should return pprReinforcement2000', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: 2121.4,
                  limit: 2517.4,
                  majoration: 228.85,
                  pprReinforcement: 2000,
                });
            });
          });
          describe('When the difference between the limit allowed and the totalLimitedDeductions is between 0 and 400', () => {
            const totalLimitedDeductions = 2200;
            it('should return pprReinforcement 1587.02', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: 317.4,
                  limit: 2517.4,
                  majoration: 228.85,
                  pprReinforcement: 1587.02,
                });
            });
          });

          describe('When the difference between the limit allowed and the totalLimitedDeductions is less than 0', () => {
            const totalLimitedDeductions = 2600;
            it('should return pprReinforcement 0', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: -82.6,
                  limit: 2517.4,
                  majoration: 228.85,
                  pprReinforcement: 0,
                });
            });
          });
        });
        describe('When age between 35 and 50', () => {
          const age = 36;
          describe('When the difference between the limit allowed and the totalLimitedDeductions is higher than 350', () => {
            const totalLimitedDeductions = 396;
            it('should return pprReinforcement 1750', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: 2121.4,
                  limit: 2517.4,
                  majoration: 228.85,
                  pprReinforcement: 1750,
                });
            });
          });
          describe('When the difference between the limit allowed and the totalLimitedDeductions is between 0 and 350', () => {
            const totalLimitedDeductions = 2200;
            it('should return pprReinforcement 1587.02', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: 317.4,
                  limit: 2517.4,
                  majoration: 228.85,
                  pprReinforcement: 1587.02,
                });
            });
          });

          describe('When the difference between the limit allowed and the totalLimitedDeductions is less than 0', () => {
            const totalLimitedDeductions = 2600;
            it('should return pprReinforcement 0', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: -82.6,
                  limit: 2517.4,
                  majoration: 228.85,
                  pprReinforcement: 0,
                });
            });
          });
        });
        describe('When age higher than 50', () => {
          const age = 56;
          describe('When the difference between the limit allowed and the totalLimitedDeductions is higher than 300', () => {
            const totalLimitedDeductions = 396;
            it('should return pprReinforcement 500', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: 2121.4,
                  limit: 2517.4,
                  majoration: 228.85,
                  pprReinforcement: 1500,
                });
            });
          });
          describe('When the difference between the limit allowed and the totalLimitedDeductions is between 0 and 300', () => {
            const totalLimitedDeductions = 2400;
            it('should return pprReinforcement 587.02', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: 117.4,
                  limit: 2517.4,
                  majoration: 228.85,
                  pprReinforcement: 587.02,
                });
            });
          });

          describe('When the difference between the limit allowed and the totalLimitedDeductions is less than 0', () => {
            const totalLimitedDeductions = 2600;
            it('should return pprReinforcement 0', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: -82.6,
                  limit: 2517.4,
                  majoration: 228.85,
                  pprReinforcement: 0,
                });
            });
          });
        });
      });
    });
    describe('When collectableEarnings is higher than 80882', () => {
      const collectableEarnings = 96000;
      describe('When 0 dependents', () => {
        const dependents = 0;
        describe('When age less than 35', () => {
          const age = 24;
          describe('When the difference between the limit allowed and the totalLimitedDeductions is higher than 400', () => {
            const totalLimitedDeductions = 600;
            it('should return pprReinforcement 2000', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: 400, limit: 1000, majoration: 0, pprReinforcement: 2000,
                });
            });
          });
          describe('When the difference between the limit allowed and the totalLimitedDeductions is between 0 and 400', () => {
            const totalLimitedDeductions = 900;
            it('should return pprReinforcement 500', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: 100, limit: 1000, majoration: 0, pprReinforcement: 500,
                });
            });
          });

          describe('When the difference between the limit allowed and the totalLimitedDeductions is less than 0', () => {
            const totalLimitedDeductions = 2600;
            it('should return pprReinforcement 0', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: -1600, limit: 1000, majoration: 0, pprReinforcement: 0,
                });
            });
          });
        });
        describe('When age between 35 and 50', () => {
          const age = 36;
          describe('When the difference between the limit allowed and the totalLimitedDeductions is higher than 350', () => {
            const totalLimitedDeductions = 650;
            it('should return pprReinforcement 1750', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: 350, limit: 1000, majoration: 0, pprReinforcement: 1750,
                });
            });
          });
          describe('When the difference between the limit allowed and the totalLimitedDeductions is between 0 and 350', () => {
            const totalLimitedDeductions = 900;
            it('should return pprReinforcement 500', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: 100, limit: 1000, majoration: 0, pprReinforcement: 500,
                });
            });
          });

          describe('When the difference between the limit allowed and the totalLimitedDeductions is less than 0', () => {
            const totalLimitedDeductions = 2600;
            it('should return pprReinforcement 0', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: -1600, limit: 1000, majoration: 0, pprReinforcement: 0,
                });
            });
          });
        });
        describe('When age higher than 50', () => {
          const age = 56;
          describe('When the difference between the limit allowed and the totalLimitedDeductions is higher than 300', () => {
            const totalLimitedDeductions = 700;
            it('should return pprReinforcement 1500', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: 300, limit: 1000, majoration: 0, pprReinforcement: 1500,
                });
            });
          });
          describe('When the difference between the limit allowed and the totalLimitedDeductions is between 0 and 300', () => {
            const totalLimitedDeductions = 900;
            it('should return pprReinforcement 500', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: 100, limit: 1000, majoration: 0, pprReinforcement: 500,
                });
            });
          });

          describe('When the difference between the limit allowed and the totalLimitedDeductions is less than 0', () => {
            const totalLimitedDeductions = 2600;
            it('should return pprReinforcement 0', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: -1600, limit: 1000, majoration: 0, pprReinforcement: 0,
                });
            });
          });
        });
      });
      describe('When more than 2 dependents', () => {
        const dependents = 4;
        describe('When age less than 35', () => {
          const age = 24;
          describe('When the difference between the limit allowed and the totalLimitedDeductions is higher than 400', () => {
            const totalLimitedDeductions = 600;
            it('should return pprReinforcement 2000', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: 500,
                  limit: 1100,
                  majoration: 100,
                  pprReinforcement: 2000,
                });
            });
          });
          describe('When the difference between the limit allowed and the totalLimitedDeductions is between 0 and 400', () => {
            const totalLimitedDeductions = 900;
            it('should return pprReinforcement 1000', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: 200,
                  limit: 1100,
                  majoration: 100,
                  pprReinforcement: 1000,
                });
            });
          });

          describe('When the difference between the limit allowed and the totalLimitedDeductions is less than 0', () => {
            const totalLimitedDeductions = 2600;
            it('should return pprReinforcement 0', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: -1500, limit: 1100, majoration: 100, pprReinforcement: 0,
                });
            });
          });
        });
        describe('When age between 35 and 50', () => {
          const age = 36;
          describe('When the difference between the limit allowed and the totalLimitedDeductions is higher than 350', () => {
            const totalLimitedDeductions = 650;
            it('should return pprReinforcement 1750', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: 450,
                  limit: 1100,
                  majoration: 100,
                  pprReinforcement: 1750,
                });
            });
          });
          describe('When the difference between the limit allowed and the totalLimitedDeductions is between 0 and 350', () => {
            const totalLimitedDeductions = 900;
            it('should return pprReinforcement 1000', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: 200,
                  limit: 1100,
                  majoration: 100,
                  pprReinforcement: 1000,
                });
            });
          });

          describe('When the difference between the limit allowed and the totalLimitedDeductions is less than 0', () => {
            const totalLimitedDeductions = 2600;
            it('should return pprReinforcement 0', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: -1500, limit: 1100, majoration: 100, pprReinforcement: 0,
                });
            });
          });
        });
        describe('When age higher than 50', () => {
          const age = 56;
          describe('When the difference between the limit allowed and the totalLimitedDeductions is higher than 300', () => {
            const totalLimitedDeductions = 700;
            it('should return pprReinforcement 1500', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: 400,
                  limit: 1100,
                  majoration: 100,
                  pprReinforcement: 1500,
                });
            });
          });
          describe('When the difference between the limit allowed and the totalLimitedDeductions is between 0 and 300', () => {
            const totalLimitedDeductions = 900;
            it('should return pprReinforcement 1000', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: 200,
                  limit: 1100,
                  majoration: 100,
                  pprReinforcement: 1000,
                });
            });
          });

          describe('When the difference between the limit allowed and the totalLimitedDeductions is less than 0', () => {
            const totalLimitedDeductions = 2600;
            it('should return pprReinforcement 0', () => {
              const res = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
              expect(res)
                .toEqual({
                  deductionAmountAvailable: -1500, limit: 1100, majoration: 100, pprReinforcement: 0,
                });
            });
          });
        });
      });
    });
  });
});
