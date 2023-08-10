let label = document.getElementById('label')
let shoppingCart = document.getElementById('shopping-cart')

let basket = JSON.parse(localStorage.getItem("dataItems")) || []

let calc = () => {
  let cartIcon = document.getElementById('cartAmount');
  cartIcon.innerHTML = basket.map((el) => el.item).reduce((x, y) => x + y, 0)
}

calc()

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket.map((el) => {
      let { id, item } = el;
      let search = shopItemsData.find((el) => el.id === id) || []

      return (`
      <div class="cart-item">
          <img class="img" src=${search.image} alt="" />
          <div class="details-item">
            <div class="titile-price-x">
              <h4 class="title-price">
              <p class="">${search.name}</p>
              <p class="cart-item-price">$ ${search.price}</p>
              </h4>
              <i onClick="removeItem(${id})"class="bi bi-x-lg"></i>
            </div>

            <div class="buttons cart-buttons">
            <i onClick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">${item}</div>
              <i onClick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
            <h3>$ ${item * search.price}<h3/>
          </div>
      </div>
      `)
    }).join(''));
  }
  else {
    shoppingCart.innerHTML = ``

    label.innerHTML = `
      <h2>Cart id Empty</h2>
      <a href="./index.html"> 
        <button class="home-btn">Back to home</button>
      </a>
    `
  }
}

generateCartItems();

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
  generateCartItems();
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

  basket = basket.filter((el) => el.item !== 0)
  generateCartItems();

  localStorage.setItem("dataItems", JSON.stringify(basket))
}

let update = (id) => {
  let search = basket.find((x) => x.id === id)  
  calc();
}

let removeItem = (id) => {
  let selectedItem = id
  basket = basket.filter((el) => el.id !== selectedItem.id)
  
  generateCartItems(); 
  localStorage.setItem("dataItems", JSON.stringify(basket))
}

let totalAmount = () => {
  if(basket.length !== 0 ){
    let amount = basket.map((el) => {
      let {item, id} = el
    })
  }
  else return
}