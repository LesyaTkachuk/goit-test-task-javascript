class StringBuilder {
  constructor(baseString = '') {
    this._value = baseString;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value += str;
    return this;
  }

  prepend(str) {
    this._value = str + this._value;
    return this;
  }

  pad(str) {
    this.append(str);
    this.prepend(str);
    return this;
  }
}

const builder = new StringBuilder('.');

builder.append('^').prepend('^').pad('=');
console.log(builder.value); // '=^.^='
