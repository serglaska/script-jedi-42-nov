// task \http://www.codewars.com/kata/this-is-a-problem

function NameMe(first, last) {
  this.lastName = last;
  this.firstName = first;
  this.name = first + ' ' + last;
};

// task https://www.codewars.com/kata/this-is-an-other-problem

function NamedOne(first, last){
    this.lastName = last;
    this.firstName = first;
};

NamedOne.prototype = {
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },

  set fullName(fn) {
    const name = fn.split(' ');
    if (name.length === 2) {
      this.firstName = name[0];
      this.lastName = name[1];
    }
  },
};
