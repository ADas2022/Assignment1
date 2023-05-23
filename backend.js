//const items = [{"item_name":"Football","description":"Official size and weight football suitable for outdoor play.","price":29.99,"quantity":10},{"item_name":"Basketball","description":"Indoor and outdoor basketball with excellent grip and durability.","price":19.99,"quantity":15},{"item_name":"Running Shoes","description":"Lightweight and comfortable running shoes for various terrains.","price":79.99,"quantity":8},{"item_name":"Yoga Mat","description":"Non-slip and eco-friendly yoga mat for comfortable workouts.","price":24.99,"quantity":12},{"item_name":"Tennis Racket","description":"High-quality tennis racket suitable for beginners and intermediate players.","price":89.99,"quantity":5},{"item_name":"Golf Clubs Set","description":"Complete set of golf clubs for golf enthusiasts, including irons, woods, and putters.","price":299.99,"quantity":3}]
//const items = "[{\"item_name\":\"Football\",\"description\":\"Official size and weight football suitable for outdoor play.\",\"price\":29.99,\"quantity\":10},{\"item_name\":\"Basketball\",\"description\":\"Indoor and outdoor basketball with excellent grip and durability.\",\"price\":19.99,\"quantity\":15},{\"item_name\":\"Running Shoes\",\"description\":\"Lightweight and comfortable running shoes for various terrains.\",\"price\":79.99,\"quantity\":8},{\"item_name\":\"Yoga Mat\",\"description\":\"Non-slip and eco-friendly yoga mat for comfortable workouts.\",\"price\":24.99,\"quantity\":12},{\"item_name\":\"Tennis Racket\",\"description\":\"High-quality tennis racket suitable for beginners and intermediate players.\",\"price\":89.99,\"quantity\":5},{\"item_name\":\"Golf Clubs Set\",\"description\":\"Complete set of golf clubs for golf enthusiasts, including irons, woods, and putters.\",\"price\":299.99,\"quantity\":3}]"
const items = '[{"item_name":"Football","description":"Official size and weight football suitable for outdoor play.","price":29.99,"quantity":10,"imageURL":"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3c1882a72a644900a384af43011338b0_9366/Oceaunz_League_Ball_White_HT9015_02_standard_hover.jpg"},{"item_name":"Basketball","description":"Indoor and outdoor basketball with excellent grip and durability.","price":19.99,"quantity":15,"imageURL":"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9a44621a281149709ca4ae420163c466_9366/All_Court_3.0_Ball_Orange_HM4975_01_standard.jpg"},{"item_name":"Running Shoes","description":"Lightweight and comfortable running shoes for various terrains.","price":79.99,"quantity":8,"imageURL":"https://lh3.googleusercontent.com/tq_s44pSFbzPzLtJUYVpuBWSY4NRLHXs8cURJxHhpzk0JdQNDBS7PmYSaTQfbTg89aPv3Q9LuxUm5USJ1GAJJfg_RCB65VAjZizcTnM"},{"item_name":"Yoga Mat","description":"Non-slip and eco-friendly yoga mat for comfortable workouts.","price":24.99,"quantity":12,"imageURL":"https://m.media-amazon.com/images/I/417aNYl8r-S._AC_SX425_.jpg"},{"item_name":"Tennis Racket","description":"High-quality tennis racket suitable for beginners and intermediate players.","price":89.99,"quantity":5,"imageURL":"https://cdn.racketpedia.com/media/rackets-data-sheets/4/orig/adidas-barricade-08d55ea3-b204-4cbd-ab25-dcf638a8a8e4.jpg"},{"item_name":"Golf Clubs Set","description":"Complete set of golf clubs for golf enthusiasts, including irons, woods, and putters.","price":299.99,"quantity":3,"imageURL":"https://i.ebayimg.com/images/g/sGQAAOSw1UNiYZb2/s-l500.png"}]';

let itemList = JSON.parse(items);

//var links = ["https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3c1882a72a644900a384af43011338b0_9366/Oceaunz_League_Ball_White_HT9015_02_standard_hover.jpg", ]



console.log(itemList);
//displayItems();

function addItem(item) {
    itemList.push(item)
}



/*function displayItems() {

    // Assuming you have already parsed the JSON string and stored it in the 'itemList' variable

    // Get a reference to the 'itemList' div element
    const itemListContainer = document.getElementById('itemList');

    // Iterate over each item in the itemList array
    itemList.forEach((item) => {
    // Create a new item container element
    const itemContainer = document.createElement('div');

    // Create HTML markup for displaying the item details
    const itemHTML = `
        <h3>${item.item_name}</h3>
        <p>Description: ${item.description}</p>
        <p>Price: $${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
    `;

    // Set the itemHTML as the inner HTML of the item container
    itemContainer.innerHTML = itemHTML;

    // Append the item container to the itemListContainer
    itemListContainer.appendChild(itemContainer);
    }); 



} */