const add = (a, b) =>{
  return a + b;
}

const promise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('hello word');
      resolve();
    }, 100);
  })
}
promise();
console.log(add(1, 3));