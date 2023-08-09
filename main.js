const shop = document.getElementById("shop")

let shopItemsData = [{
    id: "oejfoijs",
    name: 'Casual shirt',
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    image: "img/img-1.jpg"
},
{
    id: "dsfsdf",
    name: 'Office shirt',
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    image: "img/img-2.jpg"
},
{
    id: "lclskmpdcm",
    name: 'T shirt',
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    image: "img/img-3.jpg"
},
{
    id: "pqwkekd",
    name: 'Mens Suit',
    price: 300,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    image: "img/img-4.jpg"
}]

let basket = JSON.parse(localStorage.getItem("dataItems")) || []

const generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
        let { id, name, price, desc, image } = x;
        let search = basket.find((x) => x.id === id) || []
        return `
        <div id=product-id-${id} class="item">
        <img width="220" src=${image} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price_quantity">
            <h2>${price}$</h2>
            <div class="buttons">
              <i onClick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">${search.item === undefined ? 0 : search.item}</div>
              <i onClick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>
        `;
    }).join(''))
}

let increment = (id) => {
    let selectedItem = id;

    let search = basket.find((x) => x.id === selectedItem.id)

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        })
    } else {
        search.item += 1;
    }

    update(selectedItem.id);
    
    localStorage.setItem("dataItems", JSON.stringify(basket))
}

let decrement = (id) => {
    let selectedItem = id;

    let search = basket.find((x) => x.id === selectedItem.id)

    if (search === undefined) return
    else if (search.item === 0) return
    else {
        search.item -= 1;
    }

    update(selectedItem.id);
    
    basket = basket.filter((el) => el.item !== 0);
    
    localStorage.setItem("dataItems", JSON.stringify(basket))
}

let update = (id) => {
    let search = basket.find((x) => x.id === id)
    document.getElementById(id).innerHTML = search.item
    calc();
}

let calc = () => {
    let cartIcon = document.getElementById('cartAmount');
    cartIcon.innerHTML = basket.map((el) => el.item).reduce((x, y) => x + y, 0)
}

calc()

generateShop()