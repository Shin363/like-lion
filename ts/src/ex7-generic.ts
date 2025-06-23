// 제네릭 : 무엇이든 될 수 있는..
function print<T>(value: T): void {
  console.log(``);
}
print<string>("Hello, World!"); //값만 넘기는 게 아니라 내가 타입을 지정할 수 있다.
print<number>(42);

// type Member = {} 얘는 빈 객체를 만들어서 new Member로 하는 게 불가능, but 클래스는 가능
interface Member {
  id: string;
  username: string;
  password: string;
  email: string;
  profileImgaeUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

class Member {
  //...
}
