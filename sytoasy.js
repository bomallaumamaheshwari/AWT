console.log('CVR');
setTimeout(() => {
    console.log('IT');
}, 2000);

console.log('III-A');
console.log('III-A');
console.log('III-A');
console.log('III-A');

function calculate(){
    let sum = 0;
    for(let i=0;i<100000000;i++){
        sum +=i;
    }
    console.log('Math result ',sum)
}
