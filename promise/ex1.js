// 동기식으로 파일을 읽는 예제
// {
// // import { readFileSync } from "node:fs"; => 이거 안된다. require로 불러와야 함.
// const fs = require("fs");
// const path = "./";

// const fileList = fs.readdirSync(path);
// console.log(fileList);

// console.log("file read completed");
// }

// 비동기식으로 파일을 읽는 예제
// {
// const fs = require("fs");
// const path = "./";

// // 비동기식 표현
// fs.readdir(path, function (err, fileList) {
// console.log(fileList);
// });

// console.log("file read completed");
// }

// Promise로 파일을 읽는 예제
{
  const fs = require("fs").promises;
  const path = "./";
  const promise = fs.readdir(path); //반환값은 약속을 담는 그릇. 결과를 주면 호출을 해주는 역할만 수행한다.

  promise.then(function (err, fileList) {
    console.log(fileList);
  });
  console.log("file read completed");
}

// await 사용해서 파일을 읽는 예제
// {
// const fs = require("fs");
// const path = "./";

// (async () => {
// const fileList = await fs.readdir(path);
// })();
// }
