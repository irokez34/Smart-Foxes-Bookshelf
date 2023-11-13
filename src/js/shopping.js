const LOCAL_KEY = localStorage.getItem('shoppingList');
const parsedSettings = JSON.parse(LOCAL_KEY);
console.log(parsedSettings); // settings object

function createShopping(arr) {

    arr.map(({ _id, amazon_product_url, author, book_image, list_name, title, buy_links
}) => {
        // console.log(buy_links[1].url);
    })
}

 createShopping(parsedSettings);



