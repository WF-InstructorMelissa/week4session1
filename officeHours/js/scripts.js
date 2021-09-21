function date() {
    document.getElementById('date').innerText = Date()
    // document.getElementById('date').innerHTML = Date()
    // innerHTML still works here but isn't' needed
}

let title = "Here are the images you asked for!"
let imgs = [
    './images/meme01.jpg',
    './images/meme02.jpg',
    './images/meme03.jpg',
    './images/meme04.jpg'
]
let alt = 'meme images'

function showImgs() {
    let content = `<h3>${title}</h3><div id='row'>`
    for(var x of imgs) {
        content += `<img src='${x}' alt='${alt}'>`
    }
    content += `</div>`
    console.log(content)
    document.getElementById('showImg').innerHTML = content
    // document.getElementById('showImg').innerText = content
    // innerText doesn't error out the function but prints the actual html code itself to the page not as elements
}

let numbers = [1,2,3,7,8,9]
document.getElementById('arr01').innerHTML = "Original Array: <br>" + numbers
 
function insertItems() {
    numbers.splice(3,0, 4,5,6)
    document.getElementById('arr02').innerHTML = "New Array:<br>" + numbers
}
// 3 is the index where the new information gets put
// 0 is how many to remove 

function removeItems() {
    numbers.splice(3,3)
    document.getElementById('arr03').innerHTML = "New Improved Array:<br>" + numbers
}

let kids = ['Shannon', 'Aiden']
let stepKids = ['Nathan', 'Hayden']
let dogs = ['Bear', 'Abby', 'Lucy', 'Roxy', 'Copper']
function myFamily() {
    document.getElementById('arr04').innerHTML = 'Biologial Kids: ' + kids
    document.getElementById('arr05').innerHTML = 'Step Kids: ' + stepKids
    document.getElementById('arr06').innerHTML = 'Dogs: ' + dogs
    let allKids = kids.concat(stepKids)
    document.getElementById('arr07').innerHTML = 'All my kids: ' + allKids
    let addingDogs = allKids.concat(dogs)
    console.log(addingDogs)
    document.getElementById('arr08').innerHTML = 'My whole Family: Nick,' + addingDogs
}
