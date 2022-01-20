// object에 타입을 지정할 속성이 너무 많으면
// [key: string]와 같은 방식으로 글자로 된 모든 object 속성의 타입으로나타낼 수 있다.
type Member1 = {
  [key: string]: string;
};

let jain: Member1 = { name: "kim", age: "1234" };
