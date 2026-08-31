async function fn1() {
  try {
    return fetch("invalid-url");
  } catch (e) {
    console.log("Error caught"); //won't run
  }
}
fn1();




async function fn2() {
  try {
    return await fetch("invalid-url");
  } catch (e) {
    console.log("Error caught");    // will run
  }
}
fn2();