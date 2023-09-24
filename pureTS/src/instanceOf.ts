function logValue(x: Date | string) {
  if (x instanceof Date) {
    // instance of is similar to typeof where it states that `it is an instance of that particular obj or not`
    console.log(x.toLocaleDateString())
  } else {
    console.log(x.toUpperCase())
  }
}
