// Write your solution in this file!
var customerName='bob';

function Name(){
    return customerName;
}
function upperCaseCustomerName(){
    if(customerName){
    customerName= customerName.toUpperCase();
    }
}
var bestCustomer;

function setBestCustomer(){
    bestCustomer='not bob';
    return bestCustomer;
}

function overwriteBestCustomer(){
    bestCustomer='maybe bob'
    return bestCustomer;
}
const leastfavouritecustomer = "Steve"
function changeLeastFavoriteCustomer(){
    leastfavouritecustomer ='warui';
}
