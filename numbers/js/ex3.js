function multiply(x, y) {
    if (x * y > Number.MAX_VALUE) {
      return ("Process as Infinity");
    }
    return (x * y);
  }
  
  console.log(multiply(1.7976931348623157e+308, 1));

  
  console.log(multiply(1.7976931348623157e+308, 2));