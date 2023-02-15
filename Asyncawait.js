/*1
async function f(){
    console.log('Hello uma');
    return Promise.resolve(`1`);
}
f()
*/


async function f(){
    console.log('Hello Uma');
    return Promise.resolve('Done');
}
f().then(function(result){
    console.log(result);
})

