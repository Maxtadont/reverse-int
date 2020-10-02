module.exports = function reverse (n) {
  let str = String(Math.abs(n));
  let revstr = Number(str.split('').reverse().join(''));
  return revstr;
}
