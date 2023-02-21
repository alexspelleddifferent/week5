console.log('hello world')

let Name='Alex'
let health='healthy'

function gpa(val) {
    if (!(val < 0 || val >4)) {
        return true
    }

    return false
}

console.log(Name)
console.log(health)
console.log(gpa(5))
console.log(gpa(-5))
console.log(gpa(3))
console.log(typeof 'hi')