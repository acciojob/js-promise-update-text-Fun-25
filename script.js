//your JS code here. If required
function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello, world!');
    }, 1000);
  });
}

helloWorld().then((result) => {
  const outputDiv = document.getElementById('output');
  outputDiv.textContent = result;
});
