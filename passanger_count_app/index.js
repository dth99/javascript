//document.getElementById("count-el").innerText=6

// let count = 0

// console.log(count)

// let myage = 35
// console.log(myage)

// let count = 50
// count= count+ 100
// count = count -25
// count= count+ 70
// console.log(count)

//initialize the count as 0
// listen for clicks on the increment btn
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// function increment() {
//     console.log("This button was clicked")
// }




let username='per'
console.log(username)

let notification= "You have 3 new notifications"
let out= notification+ ", "+username+"!!"
console.log(out)







let countEl= document.getElementById("count-el") // pass in argument

let saveEl = document.getElementById("save-el")

//console.log(countEl)
let count=0
function increment() {
        //console.log("clicked")
        count+=1
        countEl.innerText=count
        //console.log(count)
}


function save()
{
    let data=" - "+ count
    saveEl.textContent+= data
    // console.log(data)
    // console.log(count)
    count=0
    countEl.innerText=count
}
//console.log(saveEl)


