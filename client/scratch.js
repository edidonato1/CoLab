// function updateCreatedAt(str) {
//   let newStr = str.split('').splice(0, 10).join('').split('-').reverse()
//   return newStr.map(item => item.charAt(0) === '0' ? item.slice(1) : item).join('/')
// }


const  updateCreatedAt= (str) => {
  let newStr = str.split('').splice(0, 10).join('').split('-').reverse()
  return newStr.map(item => item.charAt(0) === '0' ? item.slice(1) : item).join('/')
}

// console.log(updateCreatedAt('2020-12-01T00:02:19.906Z'))

const readLess = (str) => {
  if (str.length > 140) {
    return `${str.slice(0, 140)}... read more >> `
  } else {
    return str
  }
}

console.log(readLess('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'))

// console.log(readLess('hello'))