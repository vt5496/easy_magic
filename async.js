const time = (numb) =>{
    console.log(numb)
}

const timeOut = (numb) =>{
    return new Promise(resolve => setTimeout(()=>resolve(time(2)), numb))
}


let f = async() => {
    time(0)
    await time(1)
    await timeOut(1000)
    time(3)
}
time(4)
f()
time(5)
time(6)
time(7)

