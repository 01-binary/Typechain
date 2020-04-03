
class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const js = new Human("jinsoo", 28,"male");


const sayHi = (person: Human): string => {
    return `${person.name} ${person.age} ${person.gender}`;
};

console.log(sayHi(js));

export { };