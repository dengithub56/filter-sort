function sortProducts() {
    const current = document.querySelector('.sort-current');
    const sorts = document.querySelectorAll('.sort');

    [...sorts].map(el => {
        el.onclick = () => {
            sorting(el.getAttribute("data-sort"))
        }
    })

    function sorting(trigger = 1) {
        [...sorts].forEach(el => {
            if (el.getAttribute("data-sort") == trigger) {
                current.innerHTML = el.innerHTML
            }
            el.classList.remove('sort-show')
        })
    }

    current.onclick = () => {
        [...sorts].forEach(el => el.classList.add('sort-show'))
    }
}
sortProducts()