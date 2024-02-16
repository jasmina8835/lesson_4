// DOM BOM


// CONTENT BILAN ISHLASH
let h = document.querySelector('h1')
let ul = document.querySelector('ul')

console.dir(document)
// innerHTML , innerTEXT , outerHTML , outerText , textContent
// before() , after() , prepend() , append() , remove() , createElement()
console.log(h.innerText);
// h.innarText = `<i>Salom Dunyo</i>`
// console.log(h.innerText);
// h.innerHTML = `<i>IT Park</i>`
// console.log(h.textContent);
// h.textContent = `<i>Salom Dunyo</i>`
console.log(h.outerHTML);
console.log(h.outerText);
// h.outerHTML = `<i>Salom Dunyo</i>`
// h.outerText = 'Salom Dunyo'
// let numbers = [1, 2, 3, 4, 5, 6]
// for (let i = 0; i < numbers.length; i++) {
//     const item = numbers[i];
//     ul.innerHTML += `
//     <i>${item}</i>
//     `
// }

// for (let i = 0; i < numbers.length; i++) {
//     const item = numbers[i];

//     let li = document.createElement('li')
//     console.log(li);
//     li.innerHTML = item
//     ul.append(li)
// }
// h.remove()

