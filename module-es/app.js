import add4, { add as add3, name } from "./script1.js";
import { add } from "./script2.js";

console.log(`${name}는 ${add3(1, 2) + add4(1, 2)} 살...`);
console.log(add(1, 2));
