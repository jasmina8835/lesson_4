

for (let i = 0; i < 100; i++) {
    let li = document.createElements('li')
    li.innerTEXT = i
    if (a < 25) {
        ul.before(li)
    }else if (i >= 25 && i< 50) {
        ul.prepend(li)
    }else if (i >= 50 && i < 75) {
        ul.append(li)
    }else {
        ul.after(li)
    }
}




