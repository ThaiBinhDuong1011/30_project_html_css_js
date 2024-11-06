const productList = document.querySelector('.product-list')
const searchInput = document.querySelector('.search input')
const listItems = []

getData()

searchInput.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch('https://fakestoreapi.com/products')
    const results = await res.json()

    // Clear products
    productList.innerHTML = ''

    results.forEach((product) => {
        var div = document.createElement('div')
        div.setAttribute('class', 'product-item')
        listItems.push(div)

        div.innerHTML = `
            <img src="${product.image}" alt="">
            <div class="info">
                <div class="name">${product.title}</div>
                <div class="price">${product.price} USD</div>
            </div>
        `

        productList.appendChild(div)
    })
}

function filterData(search) {
    listItems.forEach((item) => {
        if (item.innerText.toLowerCase().includes(search.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}
