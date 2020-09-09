export default class Vector {
  // This class represents a 2-dimensional vector. Please implement the class according to the
  // following instructions:
  //
  // * We should be able to get the `x` part and `y` part of a vector.
  // * We should be able to calculate the plus and minus of 2 vectors.
  // * We should be ablejava to calculate the distance of a vector.
  //
  // Your target:
  //
  // * Please implement the class and pass all the tests in vector_spec.js.
  // * Please do NOT modify the signature of the class. Please put all your code in the Vector
  // class.

  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  // eslint-disable-next-line space-before-blocks
  static plus(vector1, vector2){
    const plusResult = new Vector(vector1.x + vector2.x, vector1.y + vector2.y);
    return plusResult;
  }

  // eslint-disable-next-line space-before-blocks
  static minus(vector1, vector2){
    const plusResult = new Vector(vector1.x - vector2.x, vector1.y - vector2.y);
    return plusResult;
  }

  distance() {
    return ((this.x ** 2) + (this.y ** 2)) ** (1 / 2);
  }
}
