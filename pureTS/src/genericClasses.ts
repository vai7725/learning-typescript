interface DB {
  connectionId: number
  username: string
  password: string
}

function fnForGenClasses<T, U extends DB>(x: T, y: U): object {
  return {
    x,
    y,
  }
}

fnForGenClasses('hello', {
  connectionId: 2,
  username: 'vai',
  password: 'nothing',
})

interface Quiz {
  name: string
  type: string
}

interface Course {
  name: string
  author: string
  subject: string
}

class Sellable<T> {
  public cart: T[] = []

  addToCart(product: T) {
    this.cart.push(product)
  }
}
