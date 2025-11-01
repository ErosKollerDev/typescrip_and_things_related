type user = {
    name: string;
    age: number;
}

const name = "Eros koller"

// console.log(typeof name)

type UserName = typeof name;

const fullName: UserName = "Eros koller"
// console.log(typeof fullName)

// type Settings = {
//     difficulty: "easy" | "medium" | "hard";
//     minLength: number;
//     didStart: boolean;
//     servers: string[];
// }


const settingsConfig = {
    difficulty: "easy",
    minLength: 5,
    didStart: false,
    servers: ["localhost", "127.0.0.1", "192.168.1.100", "192.168.1.101"]
}
type Settings = typeof settingsConfig;


function loadSettings(settings: Settings): void {
    console.log(settings)
}

function loadSettingsV2(settings: typeof  settingsConfig): void {
    console.log(settings)
}

loadSettings(settingsConfig);
loadSettingsV2(settingsConfig);