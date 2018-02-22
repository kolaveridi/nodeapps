console.log('Starting app');

setTimeout(()=>{
console.log('Inside call back');
},2000);

setTimeout(()=>{
console.log('Second callback');
},0);

console.log('Finishing app');
