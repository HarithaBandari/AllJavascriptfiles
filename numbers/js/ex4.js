function clean(x) {
    if (x === Number.NaN) {
      
      return null;
    }
    if (isNaN(x)) {
      return 0;
    }
  }
  console.log(Number.NaN);
  console.log(clean(Number.NaN));