class Human {
    public name: string;
    private age: number;
    public gender: string;
    constructor(name: string, age: number, gender?: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Human("Lynn", 18, "female");

// interface Human {
//     name: string,
//     age: number,
//     gender: string
// }

const person = {
    name : "Nicolas",
    age : 24,
    gender : "Male"
}

const sayHi = (person:Human):string => {
    return `${person.name},${person.age},${person.gender}!!`;
}

console.log(sayHi(lynn));

export {};