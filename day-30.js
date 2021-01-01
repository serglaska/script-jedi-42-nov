// task http://www.codewars.com/kata/santaclausable-interface

const isSantaClausable = obj => ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney']
  .every(method => typeof obj[method] === 'function');

// task http://www.codewars.com/kata/cylon-evolution

class Cylon {
  constructor(model) {
    return this.model = model;
  };
  attack() {
    return 'Destroy all humans!';
  };
};

class HumanSkin extends Cylon {
  infiltrate() {
    return 'Infiltrate the colonies'
  };
  attack() {
    return super.attack()
  };
};

// task https://www.codewars.com/kata/588a00ad70720f2cd9000005/train/javascript

class Router {
  constructor() {
    this.routes = new Map();
  };
  bind(url, meth, action) {
    this.routes.set(url + ':' + meth, action);
  };
  runRequest(url, meth) {
    if (!this.routes.has(url + ':' + meth)) {
      return 'Error 404: Not Found';
    };

    return this.routes.get(url + ':' + meth)();
  };
};
