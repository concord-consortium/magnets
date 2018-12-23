export class Vector {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public negative() {
    return new Vector(-this.x, -this.y);
  }

  public add(v: Vector | number) {
    if (v instanceof Vector) return new Vector(this.x + v.x, this.y + v.y);
    else return new Vector(this.x + v, this.y + v);
  }

  public subtract(v: Vector | number) {
    if (v instanceof Vector) return new Vector(this.x - v.x, this.y - v.y);
    else return new Vector(this.x - v, this.y - v);
  }

  public multiply(v: Vector | number) {
    if (v instanceof Vector) return new Vector(this.x * v.x, this.y * v.y);
    else return new Vector(this.x * v, this.y * v);
  }

  public divide(v: Vector | number) {
    if (v instanceof Vector) return new Vector(this.x / v.x, this.y / v.y);
    else return new Vector(this.x / v, this.y / v);
  }

  public length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  public unit() {
    return this.divide(this.length());
  }

  public toAngle() {
    return Math.atan2(this.y, this.x);
  }
}
