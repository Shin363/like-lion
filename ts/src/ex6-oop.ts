// 역할자
class Car {
  private speed: number;
  // 부모의 drive와 stop은 결국 의미가 없다. 구현부를 작성하지 않고 싶은데.. => interface
  drive() {
    console.log("Driving an car : " + this.speed + "km/h");
  }
  stop() {
    console.log("stopping the car");
  }
}

// interface Car {
// speed: number;
//   // 약속만 정한다.
//   drive();
//   stop();
// }

// Is A 상속
class SUVCar extends Car {
  drive() {
    // console.log("Driving an SUV car : " + this.speed + "km/h");
  }
  stop() {
    console.log("stopping the SUV car");
  }
}

class SportsCar {
  private speed: number;
  drive() {
    console.log("Driving an SUV car : " + this.speed + "km/h");
  }
  stop() {
    console.log("stopping the SUV car");
  }
}
// 추상화란 : 일반화를 해줌으로써 범주를 넓게 해준다. 공통분모
class GamePanel {
  private car: Car; //부품으로 받는 상속 / Has A 상속이다. 타입 또는 형식 조리관계가 있는 상속?? , suv와 높은 결합력을 가진다.

  constructor() {
    this.car = new Car(); //객체, 인스턴스 => 형식의 실체화(new를 사용한다)된 것
  }
  start() {
    this.car.drive();
  }
  end() {
    this.car.stop();
  }
}

let myCar: Car = new SUVCar(); //Car면 된다. Car를 불렀을 때 SUVCar가 온 것.
let myCar2: SUVCar = new Car(); //무조건 SUV가 와야 한다. 근데 Car가 온 것. 에러 남
