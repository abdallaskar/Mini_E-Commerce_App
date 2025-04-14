

function renderCards(Cards, mainTable) {

    mainTable.innerHTML = ""; // Clear the table
    let row = document.createElement("tr"); // start with a new row

    Cards.forEach(function(card, index) {
        const element = document.createElement("td");
        element.innerHTML = card.outerHTML; // Use outerHTML to get the HTML string of the card
        row.appendChild(element);

        // When we have 4 cards in the row or reach the last card
        if ((index + 1) % 4 === 0) {
            mainTable.appendChild(row);
            row = document.createElement("tr"); // start a new row
        }
    });

    // Append any remaining cards if the last row has less than 4
    if (row.children.length > 0) {
        mainTable.appendChild(row);
    }
}

function createCard(Product) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<img src=${Product.imageUrl} alt="product image" /> 
            <p> ${Product.description} </p>
            <span> $ ${Product.getPrice()}</span>
            <button> ADD to Cart </button> `;
    return card;
}


function createCards(products) {
    let cards = [];
    for(let i = 0; i < products.length; i++){
        const card = createCard(products[i]);
        cards.push(card); // Append the card element directly to the array
    }
    return cards;
}


export { renderCards, createCards };