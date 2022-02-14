interface Person {
  firstName: string;
  lastName: string;
}
function greeter(person: Person) {
  return "hello," + person.firstName + " " + person.lastName;
}
let user = { firstName: "wjz", lastName: "xxp" };
console.log(greeter(user));

export default greeter
