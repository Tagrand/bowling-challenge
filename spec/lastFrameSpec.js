/* eslint-env jasmine */
const LastFrame = require('../src/lastFrame');

describe('StrikeRound', () => {
  let finalFrame;

  beforeEach(() => {
    finalFrame = new LastFrame(3, 3);
  });

  function chainOfRolls(...rolls) {
    rolls.forEach((roll) => {
      finalFrame.roll(roll);
    });
  }

  describe('finished', () => {
    it('has not finished finished after a strike', () => {
      finalFrame.roll(10);

      expect(finalFrame.isFinished()).toBe(false);
    });

    it('has not finished finished after two throws after a strike', () => {
      chainOfRolls(10, 10);

      expect(finalFrame.isFinished()).toBe(false);
    });


    it('has finished finished after three throws after a strike', () => {
      chainOfRolls(10, 10, 10);

      expect(finalFrame.isFinished()).toBe(true);
    });

    it('has finished finished after two throws, which are not a strike', () => {
      chainOfRolls(8, 1);

      expect(finalFrame.isFinished()).toBe(true);
    });

    it('has not finished after one throw', () => {
      finalFrame.roll(10);

      expect(finalFrame.isFinished()).toBe(false);
    });

    it('has not finished after a spare', () => {
      chainOfRolls(7, 3);

      expect(finalFrame.isFinished()).toBe(false);
    });

    it('has finished after a spare and an extra roll', () => {
      chainOfRolls(7, 3, 2);

      expect(finalFrame.isFinished()).toBe(true);
    });
  });
});
