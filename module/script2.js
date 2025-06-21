// 이름 부여하지 않고 export 하기
module.exports = function add(a, b) {
  return a + b;
};
// exports.add = add; //**이름 부여**모듈의 고립화를 해결하기 위한 exports
