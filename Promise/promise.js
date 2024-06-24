// create  promise 

const pone = new Promise(function (resolve, reject) {
    // do an async task
    // db calls , / network call , cryptography
    setTimeout(() => {
        //  console.log('async task is complete')
        resolve()
    }, 3000);
})
// consumption
pone.then(() => {
    // console.log('promise consumed');
})

// or 
// direct creattion and consumption

new Promise((resolve, reject) => {
    setTimeout(() => {
        //  console.log('async task two')
        resolve()
    }, 1000);
})
    .then(() => {
        // console.log('asyn two resolved')
    })



// passing value from resolve to next step

const promisethree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "arjun", email: "hah@gamil.com" })
    }, 1000);
})
promisethree.then((data) => {
    // console.log(data)
})


// promise four // handling error
const promisefour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ user: 'ramu', pass: 123 })
        } else {
            reject('something is wrong')
        }
    }, 1000);
})

promisefour.then((user) => {
    console.log(user.user)
}).catch((error) => console.log(error))
    .finally('the promise the either resolved or rejected')



// promise five 
const promisefive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ user: 'ramu', pass: 123 })
        } else {
            reject('something is wrong in promise five')
        }
    }, 1000);
})

// using asnyc await 

async function consumefive() {
    try {
        const response = await promisefive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumefive()


// fetching  data from api  using asyn await , 

async function getUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        // console.log(data)

    } catch (error) {
        console.log(error)
    }
}
getUser()

// fetching same data using 
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err))