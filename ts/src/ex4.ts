let names: string[] = ["Ga", "Na", "Da"];
console.log(names[0].length);

let everyThings: unknown[] = [1, 6, "Hello", true, { key: "value" }];
let everyThings2: any[] = [1, 6, "Hello", true, { key: "value" }];
console.log(everyThings2[1].length); // any타입이라 에러 나지 않음

if (typeof everyThings[1] === "string") {
  //조건 검사 후 사용 가능
  console.log(everyThings[1].length);
}

//조건 검사 대안
console.log((everyThings[1] as string).length); // as string으로 문자열 확인
