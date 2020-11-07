const getTip = (amount) => {
  if (typeof amount === 'number') {
    return amount * .25
  } else {
    throw Error('Argument must be number')
  }
}

try {
  const result = getTip(true);
  console.log(result);
} catch(e) {
  console.log('catch block is running')
}

