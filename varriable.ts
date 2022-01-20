let 이름: string = "kim"; // 간단한 변수 타입지정
let 이름1: string[] = ["kim", "park"]; // array 타입지정
let 이름2: { name: string } = { name: "kim" }; // object 타입지정
let 이름3: { name?: string } = { name: "kim" }; // 속성에 ?를 붙이면 들어올 수도 있고, 안 들어올 수 있는 옵션이 된다.
let 이름4: string | number = "kim"; // union 타입지정 (다양한 타입이 들어올 수 있음.)

type MyType = string | number; // type alias_타입이 너무 길면 변수안에 담을 수 있는데, 변수명 앞에 type을 붙여야 한다.
// 타입 변수는 일반 변수들과 차별화를 두기 위해서 맨 앞을 대문자로 해준다.
let 이름5: MyType = "kim";
