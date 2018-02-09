/* eslint-env jasmine */
const Frame = require('../src/frame');

describe('Frame', () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  function chainOfRolls(...rolls) {
    rolls.forEach((roll) => {
      frame.roll(roll);
    });
  }

  describe('Score', () => {
    it('has a score of 7 after one roll of seven', () => {
      frame.roll(7);

      expect(frame.score()).toEqual(7);
    });

    it('has a score of after two rolls of 7 and 2 nine', () => {
      chainOfRolls(7, 2);

      expect(frame.score()).toEqual(9);
    });

    it('still has a score of nine, after three rolls of 7, 2, 4', () => {
      chainOfRolls(7, 2, 4, 4);

      expect(frame.score()).toEqual(9);
    });

    it('has a score of a score of 13 after three rolls of 7, 3, 4 ', () => {
      chainOfRolls(7, 3, 4);

      expect(frame.score()).toEqual(14);
    });

    it('has a score of a score of 13 after three rolls of 7, 3, 4, 8 ', () => {
      chainOfRolls(7, 3, 4, 8);

      expect(frame.score()).toEqual(14);
    });

    it('has a score of a score of 20 after a strike and two rolls of, 7, 3', () => {
      chainOfRolls(10, 7, 3);

      expect(frame.score()).toEqual(20);
    });
  });

  describe('Finished', () => {
    it('has not finished after one roll', () => {
      frame.roll(7);

      expect(frame.isFinished()).toBe(false);
    });

    it('has finished finished after two rolls', () => {
      chainOfRolls(2, 7);

      expect(frame.isFinished()).toBe(true);
    });

    it('has finished finished after a strike', () => {
      frame.roll(10);

      expect(frame.isFinished()).toBe(true);
    });
  });
});
