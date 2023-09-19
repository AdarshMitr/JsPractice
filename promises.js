//Promises are a way to handle asynchronous operations.

const cart=['shoes','pants','kurta'];

createOrder(cart,function() {
    proceedToPayment(orderId);
}); 

//This code has problem of 'inversion of control'

