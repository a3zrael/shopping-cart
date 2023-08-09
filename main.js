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
    id: "p[qwke[kd",
    name: 'Mens Suit',
    price: 300,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    image: "img/img-4.jpg"
}]

const generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
        let {id, name , price, desc, image} = x;
        return `
        <div class="item">
        <img width="220" src=${image} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price_quantity">
            <h2>$ ${price}</h2>
            <div class="buttons">
              <i class="bi bi-dash-lg"></i>
              <div class="quantity">0</div>
              <i class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>
        `;
    }).join(''))
}

generateShop()