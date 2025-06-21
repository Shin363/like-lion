let x = 3;
let y = 4;
function add(a, b) {
  return a + b + x;
}
const name = "가나디";
// default로 하면 하나만 import할 수 있다.
export default function (a, b) {
  return a + b + y;
} //동적으로 import하는 거?**추가 검색 필요**

export { add, name }; //import문 안에 이름이 그대로 들어가야 함
