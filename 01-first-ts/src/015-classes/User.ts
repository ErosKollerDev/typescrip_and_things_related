
interface Human {
    name: string | undefined;
    age: number | undefined;
}

abstract class Person implements Human {
    name: string | undefined;
    age: number | undefined;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    get fullName(): string {
        return `${this.name} ${this.age}`;
    }
    toString(): string {
        return `${this.name} ${this.age}`;
    }
}



class User implements Person {
    readonly id: number = 1;
    private isAdmin: boolean = false;

    name: string;
    age: number;
    public hobbies: string[] = [];

    static version: string = "1.0.0";


    constructor(name: string, public surname: string, age: number) {
        this.name = name;

        this.age = age;
        this.id = Math.floor(Math.random() * 1000000);
    }

    get fullName(): string {
        return `${this.name} ${this.surname}`;
    }

    toString() {
        return `id: ${this.id}, User: ${this.name}, age: ${this.age} `;
    }
}

class SuperUser extends User {
    constructor(public name: string, public surname: string, public age: number = 1000, private superPower?: string) {
        super(name, surname, age);
    }

    set setSuperPower(power: string) {
        if (power.trim().length === 0) throw new Error("Must provide a super power")
        this.superPower = power;
    }

    toString(): string {
        return super.toString() + `, SuperUser: ${this.superPower}`;
    }
}

let john = new User("John", "Smith", 36);
let superUser = new SuperUser("Clark", "Kent", 36, "Can compile JS into C++");
console.log(john.toString());
console.log("---------");
console.log(superUser.toString());

console.log(john.fullName);
superUser.setSuperPower = "Can compile JS into Java Bitcode";
console.log(superUser.toString());
try {
    superUser.setSuperPower = "    ";

} catch (e: Error | any) {
    console.log(`Error: ${e.message}`);
}

console.log(User.version);
console.log(SuperUser.version);

