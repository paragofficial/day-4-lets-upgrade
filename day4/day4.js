function table(num){
    for(let i=1;i<=10;i++){
        let res = num * i;
        console.log(`${num} * ${i} = ${res} `);
    }
}

const num = prompt("Enter a num");
table(num);