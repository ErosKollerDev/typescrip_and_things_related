

enum Role {
    'ADMIN',
    'EDITOR',
    'USER',
}

class User<R> {
    constructor(
        public id: number,
        public name: string,
        public age: number,
        public externalId: R,
        public role: Role
    ) {
    }
}

const user = new User(1, "John", 36, "123456789" ,Role.ADMIN);

console.log(user);