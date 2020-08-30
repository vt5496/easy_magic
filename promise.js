const time = (numb) =>{
    console.log(numb)
}

let f = new Promise((resolve, reject) => {
    time(0)
    setTimeout(() => time(1), 2000)
    time(2)
    setTimeout(() => resolve(time(3)), 1000)
    time(4)
    time(5)
})
time(6)
time(7)

f.then(()=>time(8))

time(9)