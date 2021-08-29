function sortingByClick() {
    const current = document.querySelector('.sort-current');
    const sorts = document.querySelectorAll('.sort');

    [...sorts].forEach(el => el.classList.add('sort-show'));
    [...sorts].map(el => {
            el.onclick = () => {
                sortingMenu(el.getAttribute('data-sort'));
                optionsSorting(el.getAttribute('data-sort'));
            }
        })
        //сортировка в названии меню
    function sortingMenu(trigger = 1) {
        [...sorts].forEach(el => {
            if (el.getAttribute('data-sort') == trigger) {
                current.innerHTML = el.innerHTML
            }
            el.classList.remove('sort-show');
        })
    }
}


//по каким атрибутам выполнять сортировку
function optionsSorting(param) {
    let action;
    let direction;
    switch (param) {
        case "1":
            action = "data-publishedon"
            direction = 0
            break
        case "2":
            action = "data-name"
            direction = 0
            break
        case "3":
            action = "data-price"
            direction = 1
            break
        case "4":
            action = "data-price"
            direction = 0
            break
    }
    sortingByParameters(action, direction)
}

//основная сортировка по data атрибутам
function sortingByParameters(param, direction = 0) {
    const allProduct = [...document.querySelectorAll('li')]
    const wrapper = document.querySelector('ul')

    allProduct.sort((a, b) => {
        a = a.getAttribute(param)
        b = b.getAttribute(param)
        if (param === "data-name") {
            if (a < b) return -1
        } else
            return direction == 0 ? a - b : b - a

    })
    allProduct.forEach(el => wrapper.appendChild(el));
}

//фильтр по checkbox
function checkboxIsEnabled() {
    const allProduct = [...document.querySelectorAll('li')]
    const checkBoxNew = document.getElementById('new')
    const checkBoxPopular = document.getElementById('popular')
    const param = []
    if (checkBoxPopular.checked) {
        param.push(checkBoxPopular.getAttribute('data-check'))
    }
    if (checkBoxNew.checked) {
        param.push(checkBoxNew.getAttribute('data-check'))
    }
    // необходимо изменить перебор опций товаров на rest...
    if (param.length) {
        allProduct.forEach(el => {
            if (el.getAttribute("data-option")) {
                let atr = el.getAttribute("data-option").split(' ')
                if (param.every(e => e == atr[0] || e == atr[1] || e == atr[2] || e == atr[3])) {
                    el.classList.add('checked')
                } else el.classList.remove('checked')
            } else el.classList.remove('checked')
        })
    } else allProduct.map(el => el.classList.add('checked'))
}