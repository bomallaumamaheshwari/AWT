/*function* mygen(){
    yield 1;
    yield 2;
    yield 3;
    return "this is a first line";
}
    const genObject =  mygen();
    console.log(genObject.next())
    console.log(genObject.next())
    console.log(genObject.next())
    console.log(genObject.next().value)*/

/*function* simplegenerator(){
    yield 'aaa';
    yield 'bbb';
    console.log("this line is after bbb")
    yield 'ccc';
}
    let simple=simplegenerator();
    console.log(simple.next());
    console.log(simple.next());
    console.log(simple.next());*/
    /*error
    function* getNextId(){
        let id=0;
        while(id<3)
        yield++ ;
    }
    let createuser=getNextId();
    console.log(createuser.next().value);
    console.log(createuser.next().value);
    console.log("ok!let's print next value");
    console.log(createuser.next().value);
    console.log(createuser.next().value);*/