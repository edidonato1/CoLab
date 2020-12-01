// function updateCreatedAt(str) {
//   let newStr = str.split('').splice(0, 10).join('').split('-').reverse()
//   return newStr.map(item => item.charAt(0) === '0' ? item.slice(1) : item).join('/')
// }


const  updateCreatedAt= (str) => {
  let newStr = str.split('').splice(0, 10).join('').split('-').reverse()
  return newStr.map(item => item.charAt(0) === '0' ? item.slice(1) : item).join('/')
}

console.log(updateCreatedAt('2020-12-01T00:02:19.906Z'))