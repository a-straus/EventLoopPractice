console.log("1st message in script1");

const p = new Promise((resolve, reject) => {
  // setTimeout(() => console.log("setTimeout inside script 1 promise"));
  try {
    resolve("Promise Resolve Message from Script 1");
  } catch (err) {
    reject(err);
  }
})
  .then((message) => {
    console.log(message);
    setTimeout(() => console.log("set timeout in promise"));
  })
  .then(() => console.log("second promise"))
  .then(() => console.log("third promise"))
  .catch((err) => console.log(err));

console.log("second message in script1");

window.onload = (event) => {
  const div = document.getElementById("test");
  // for (let i = 1; i < 11; i++) {
  //   setTimeout(() => {
  //     const child = document.createElement("p");
  //     child.innerHTML = `child${i}`;
  //     div.appendChild(child);
  //     const p = Promise.resolve().then(() => {
  //       for (let i = 0; i < 100000; i++) console.log(i);
  //     });
  //   }, i * 1000);
  // }

  // const p2 = Promise.resolve().then(() => {
  //   console.log("Inside the paint");
  //   for (let i = 0; i < 10; i++) {
  //     console.log(i);
  //     const p3 = Promise.resolve().then(() => {
  //       for (let j = 0; j < 10000; j++) console.log(j);
  //       console.log(`making element${i}`);
  //       const child = document.createElement("p");
  //       child.innerHTML = `child${i}`;
  //       div.appendChild(child);
  //     });
  //   }
  // });
  // const p4 = Promise.resolve().then(() => {
  //   for (let i = 0; i < 5; i++) {
  //     const child = document.createElement("p");
  //     child.innerHTML = `child${i}`;
  //     div.appendChild(child);
  //   }
  // });
  // setTimeout(() => {
  //   const p5 = Promise.resolve().then(() => {
  //     for (let i = 5; i < 10; i++) {
  //       const child = document.createElement("p");
  //       child.innerHTML = `child${i}`;
  //       div.appendChild(child);
  //     }
  //   });
  // }, 1000);
};
