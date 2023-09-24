type Fish = {
  swim: () => void
}
type Bird = {
  fly: () => void
}

function isFish(pet: Fish | Bird): pet is Fish {
  // if we don't use the 'is' it will only return either true or false which will cause problem to the fn we wrote down below. So this also defines the type of the pet here.
  return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet
    return 'Fish food'
  } else {
    pet
    return 'bird food'
  }
}
