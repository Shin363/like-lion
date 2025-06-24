let x = 3;
let y = 4;
function add(a, b) {
  return a + b + x;
}
exports.addX = add; //모듈의 고립화를 해결하기 위한 exports
