// A promise is an object representing the eventual completion or failure of an asynchronous operation

/*  const cart=['shoes','pants','kurta'];   */

// createOrder(cart,function() {
//     proceedToPayment(orderId);
// }); 

//This code has problem of 'inversion of control'.createOrder API cannot be trusted as it may or maynot proceed to payment or it can call it twice.
// Passing callback function like this isn't reliable as we are giving control to some other part of code which we are not aware of.
//These problems can be resolved by using promises.


/*  const promise= createOrder(cart);  */
// return a promise (empty object) {data:undefined} and it will be filled automatically after async operation of createOrder API carries out as {data:orderDetails}

//Now a callback function is attached to promise object and will be called automatically only once without giving control to createOrder API.

 /*  promise.then(function(orderId) {
      proceedToPayment(orderId);
    });
*/


    //-----------Real Promise Object--------------

const GITHUB_API='https://api.github.com/users/adarshmitr';

   const user= fetch(GITHUB_API); 
   console.log(user);// Promise

user.then(function(data){
    console.log(data) //Response
})

// Promise object is immutable 
// Promise chaining also helps to avoid callback hell(pyramid of doom).


