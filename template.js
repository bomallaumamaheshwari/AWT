/*
let productName = "laptop";
let quantity = 2

let description = "I have ordered "+quantity+" "+productName;
console.log(description)*/

/*let productName = "laptop";
let quantity = 2

let description = "I have ordered "+quantity+" "+productName+ "from \"amazon\" last week";
console.log(description);

let description2 = `I have ordered ${quantity} ${productName} from "amazon" last week`;
console.log(description2);*/

let productName="laptop";
let quantity=2;
let status="pending"

let productstatus="status of the product is ";
productstatus+=(status == 'delivered')?'green':'red';
console.log(productstatus)
let description="I have ordered "+quantity+ " "+productName+"+from \"amazon\" last week"+productstatus;
console.log(description)
function estimatedDelivery(){
    return "10--2-2023";
}
let description2 = `I have ordered ${quantity} ${productName} from "amazon" last week and  estimated delivery is ${estimatedDelivery()} and ${productstatus}`;
console.log(description2)