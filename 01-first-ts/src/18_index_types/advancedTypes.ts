type DataStore = {
    [prop: string]: number | string;
}

let dataStore: DataStore = {'url': 'localhost', 'port': 8080}

console.log(dataStore);