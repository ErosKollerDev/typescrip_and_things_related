let names: Array<string> = ['John', 'Jane'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// names.push(10);

class DataStore<T> {
    [key: string]: T
}

let dataStore = new DataStore<string | number>();
dataStore['name'] = 'John';
dataStore['age'] = 30;
dataStore['height'] = 180;


let dataStoreV2 = new DataStore<string | boolean>();
dataStoreV2['role'] = 'Java Developer';
dataStoreV2['framework'] = 'Spring Boot';
dataStoreV2['isWorking'] = true;

console.log(dataStore);
const jsonString = JSON.stringify(dataStore, null, 3);
console.log('Stringified JSON:', jsonString);
const parsedObject = JSON.parse(jsonString);
console.log('Parsed back:', parsedObject);


function merge<T extends DataStore<string | number | boolean>>(a: T, b:  DataStore<string | boolean>): T {
    return {...a, ...b};
}

function mergeMeAgain<T extends object, U extends object>(a: T, b: U) {
    return {...a, ...b} as T;
}

let merged = merge(dataStore, dataStoreV2);

console.log('-------------------------------------')
console.log(merged);
console.log('-------------------------------------')
console.log(merged.name);
console.log('-------------------------------------')

let again = mergeMeAgain(dataStore, dataStoreV2);
console.log(again);
console.log('-------------------------------------')
