let a = 10;

function first() {
  let b = 20;

  function second() {
    let c = 30;
    console.log(a, b, c);
  }

  second();
}

first();                // 10 20 30


