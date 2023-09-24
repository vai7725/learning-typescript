function instance1(val: number | string): number | string {
  return val
} // but what if we have no idea what type of value is gonna come.

// we can do like

function instance2(val: any): any {
  return val
} // but we would not want to use any

// instead we can do like

function instance3<Type>(val: Type): Type {
  return val
}

interface Bottle {
  brand: string
  reusable: boolean
}

// function identity4<Bottle>(obj: Bottle): Bottle {
//   return obj
// }

// identity4({ brand: 'vai', reusable: true })

function getSearchedArray<T>(arr: T[]): T {
  // complex db operations
  return arr[0]
}

const getAnotherSearchedProd = <T>(products: T[]): T => products[23]
