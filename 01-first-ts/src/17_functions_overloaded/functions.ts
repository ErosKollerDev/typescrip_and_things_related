function getLength(val: any[]): number ;
function getLength(val: string): string ;
function getLength(val: string | any[]) {
    if( typeof val === 'string'){
        let  _array =  val.split(" ");
        return _array.length+"";
    }
    return val.length;
}



console.log(getLength("hello There, Are u Okay?"));
console.log(getLength([1, 2, 3]));