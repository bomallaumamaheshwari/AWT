/*1
const user={
    firstName:'uma',
    lastName:'bomalla',
    address:{
        city:'hyderbad',
        country:'India'
    }
}
const name=user.firstName;
console.log(name)
const {firstName,lastName}=user;
console.log(firstName)
console.log(lastName)*/

/*2
const user={
    firstName:'uma',
    lastName:'bomalla',
    address:{
        city:'hyderbad',
        country:'India'
    }
}
const {firstName,lastName,...userInfo}=user;
console.log(firstName)
console.log(userInfo)*/
/*const user={
    firstName:'uma',
    lastName:'bomalla',
    age:20,
    address:{
        city:'hyderbad',
        country:'India'
    }
}
    const {firstName:fname,lastName:lname,age=10}=user;
console.log(fname)
console.log(lname)
console.log(age)*/

/*3
const scores=[10,20,30,40,50]

const [x, ,c]=scores;
console.log(x)
console.log(c)*/

/*4
const scores=[10,20,30,40,50]

const [x, ,c,...other]=scores
console.log(x)
console.log(c)
console.log(other)*/

/*5
const scores=[10,20,30,40,50]
console.log(scores[0])
const [x] = scores
console.log(x)*/
/*
const scores=[10,20,30,40,50]
const [x,b,c]=scores
console.log(x)
console.log(b)
console.log(c)*/



