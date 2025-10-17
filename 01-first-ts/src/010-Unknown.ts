function process(val:unknown){
    if(typeof val === "string"){
        console.log(val.toUpperCase());
    }else if(typeof val === "number"){
        console.log(val.toFixed(2));
    }else{
        console.log("Unknown type");
    }
}



process("Hello World");
process(100);
process(true);