type FileData = { path: string; content: string };

type StatusData = { isOpen: boolean; errorMessage?: string };

type FileStatusData = FileData & StatusData;


const fileStatusData: FileStatusData = { path: 'file.txt', content: 'A lot things in here ....', isOpen: true };

console.log(fileStatusData);

type DataBase = { url: string; port: number };

type Connection = FileStatusData | DataBase;

const connectionToDb: Connection = { url: 'localhost', port: 3000 };

const connectionToFile: Connection = { path: 'file.txt', content: 'A lot things in here ....', isOpen: true };


function getConnection(connection: Connection) {
    if ('url' in connection) {
        console.log(`Connecting to database at ${connection.url}:${connection.port}`);
    } else {
        console.log(`Opening file ${connection.path}`);
    }
}


console.log("--------------------------");
getConnection(connectionToDb);
console.log("--------------------------");
getConnection(connectionToFile);
console.log("--------------------------");
