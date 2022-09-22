// let allLastLi = document.querySelectorAll(`li:last-of-type`);

// allLastLi.forEach(li => li.classList.add(`last`))


// setFirstItemClassName(level){
//     allFirstLi = document.querySelectorAll(`li:first-of-type`)
    
//     return allFirstLi.forEach(li => li.classList.add(`first`))
// }
// setFirstItemClassName()

const root = document.querySelector(`ul#root`);

const setFirstItemClassByLevel = (ul, level) => {
    level--;

    if(level > 0){
        const LIs = [...ul.children];

        LIs.forEach(li => {

            let InnerULs = [...li.children];

            InnerULs.forEach(innerUL => setFirstItemClassByLevel(innerUL, level));

        })

    } else{
        let LiFirst = ul.querySelector(`li:first-of-type`);
        LiFirst.classList.add(`first`);
    }
}

setFirstItemClassByLevel(root, 2)

const setLastItemClassByLevel = (ul, level) => {
    level--;

    if(level > 0){
        const LIs = [...ul.children];

        LIs.forEach(li => {

            let InnerULs = [...li.children];

            InnerULs.forEach(innerUL => setLastItemClassByLevel(innerUL, level));

        })

    } else{
        let LiLast = ul.querySelector(`li:last-of-type`);
        LiLast.classList.add(`last`);
    }
}

setLastItemClassByLevel(root, 2)