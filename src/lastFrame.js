const Frame = require('../src/frame');

class LastFrame extends Frame {
  constructor() {
    super();
    this.rules =  { strike: { length: 3, scoreLength: 3 },
      spare: { length: 3, scoreLength: 3 },
      normal: { length: 2, scoreLength: 2 },
    }
  }
}


module.exports = LastFrame;
