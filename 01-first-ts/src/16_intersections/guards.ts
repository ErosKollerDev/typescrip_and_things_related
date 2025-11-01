class User {
    constructor(public name: string) {
    }

    join() {
        console.log("User joined");
    }
}

class Admin {
    constructor(permissions: string[]) {
    }

    scan() {
        console.log("Scanning");
    }
}

const user = new User("Eros");

const admin = new Admin(["scan", "ban", "restore"]);

type Entity = User | Admin;

function init(entity: Entity): void {
    if (entity instanceof User) {
        entity.join();
    } else {
        entity.scan();
    }
}


init(user);
init(admin);