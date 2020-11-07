const user = { email: 'jd@gmail.com'};

try {
  if (!user.name) {
    throw 'User has no name';
  }
} catch (e) {
  console.log(e)
  // console.log(e.message)
  // console.log(e.name)
  // console.log(e instanceof TypeError)
} finally {
  console.log('Finally runs regardless of result...')
}

console.log('Program continues')