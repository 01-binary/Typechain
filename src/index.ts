const name = "jinsoo",
age = 28,
gender = "male";

const sayHi = (name: string, age: number, gender?: string): void => {
    console.log(`${name} ${age} ${gender}`)
};

sayHi(name, age);

export { };