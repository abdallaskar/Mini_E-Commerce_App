
import { renderCards, createCards } from './utils.js'; // Import the renderCards and createCards functions
import { controller } from './main.js'; // Import the controller instance
import Product from './product.js';

const mainTable = document.querySelector(".poduct table");
const AllButton = document.getElementById("All");
const ElectronicsButton = document.getElementById("Ele");
const ClothingButton = document.querySelector(".clo");
const ShoesButton = document.querySelector(".sho");
const sortButton = document.getElementById("sort-by");
const searcBar = document.querySelector(".searchBar");
const searchButton = document.querySelector(".searchButton");
const messageDiv = document.querySelector(".message");


let allProducts = controller.getAllProducts();
// convert All products from object to cards
let cards = createCards(allProducts);
// render the cards in the table
renderCards(cards,mainTable);

// Add event listeners to search button and enter key press
searchButton.addEventListener("click",handelSearch);
searcBar.addEventListener("keypress",function(e){
    if(e.key === "Enter"){
        handelSearch();
    }
});
// Add event listeners to the buttons to filter products by category
AllButton.addEventListener("click", function() {
    // Get all products from the controller
    const allProducts = controller.getAllProducts(); 
    // Create cards for all products
    const cards = createCards(allProducts); 
    renderCards(cards,mainTable); // Render the cards in the table
});
ClothingButton.addEventListener("click", function() {
    const clothingProducts = controller.getClothingProducts(); // Get clothing products from the controller
    const cards = createCards(clothingProducts); // Create cards for clothing products
    console.log(clothingProducts)
     renderCards(cards,mainTable); // Render the cards in the table
});
ShoesButton.addEventListener("click", function() {
    const shoesProducts = controller.getShoesProducts(); // Get shoes products from the controller
    const cards = createCards(shoesProducts); // Create cards for shoes products
    renderCards(cards,mainTable);// Render the cards in the table
});
ElectronicsButton.addEventListener("click", function() {
    const electronicsProducts = controller.getElectronicsProducts(); // Get electronics products from the controller
    const cards = createCards(electronicsProducts); // Create cards for electronics products
     renderCards(cards,mainTable); // Render the cards in the table
});

sortButton.addEventListener("change", function() {
    if(sortButton.value === "low") {
        controller.sortProductsByprice();
    }else if(sortButton.value === "high") {
        controller.sortProductsBypriceDes();
    }else{
        controller.sortProductsByID()
    }

    let allProducts = controller.getAllProducts();
    let cards = createCards(allProducts);
    renderCards(cards,mainTable);
});

// handel search bar function 
function handelSearch(){
    const searchValue = searcBar.value.trim(); // Get the search value and convert it to lowercase
    searcBar.value = "";

    if(searchValue === "") {
        searcBar.placeholder = "Search can’t be empty 🚫";
        return;
    }
    const searchingProduct = controller.searchByName(searchValue); 
    if(searchingProduct.length == 0){
        searcBar.placeholder = "Item not found 😢";
        messageDiv.style.display = "block";
        return;
    }
    else{
        const cards = createCards(searchingProduct)
        renderCards(cards,mainTable); // Clear the table before rendering new cards
        searcBar.placeholder = "Search for products"; // Reset placeholder
    }
}






