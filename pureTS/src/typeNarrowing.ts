function detectType(val: number | string) {
  if (typeof val === 'string') {
    return val.toLowerCase()
  }
  return val + 3
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === 'object') {
      for (const s of strs) {
        console.log(s)
      }
    } else if (typeof strs === 'string') {
      console.log(strs)
    }
  }
}

// docs suggest to use typeof to make an extra check with a fancy name type guard
// typeof - type guard
