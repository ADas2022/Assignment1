
//import { itemList } from 'backend.js';

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("inventory-form");
    var sortButt = document.getElementById("sort-butt");
    var clearButt = document.getElementById("delete-butt");
    var submitButton = document.getElementById("sub_button");
    const itemListContainer = document.getElementById('itemList');
    displayItems();
    submitButton.disabled = !isEmpty(form);

    form.addEventListener("input", function() { //asked chat GPT for this
        var isFormValid = isEmpty(form); //returns false if it is empty
        submitButton.disabled = !isFormValid;
    });

    sortButt.addEventListener("click", function() {
        console.log("sort")
        itemList.sort(function(a, b) {
            return a.quantity - b.quantity;
          });
        itemListContainer.innerHTML = '';
        displayItems();
        console.log(itemList)
    });

    clearButt.addEventListener("click", function() {
        console.log("clear")
        itemList = []
        itemListContainer.innerHTML = '';
        displayItems();
        console.log(itemList)
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form input values
        var name = document.getElementById("iname").value;
        var desc = document.getElementById("id").value;
        var price = document.getElementById("price").value;
        var quan = document.getElementById("quan").value;
        var url = document.getElementById("url").value;

        console.log("hello");
        

        obj = {
            item_name: name,
            description: desc,
            price: price,
            quantity: quan,
            imageURL: url

        }

        // Create list item
        console.log(obj);
        const itemListContainer = document.getElementById('itemList');
        //addItemCont(obj, itemListContainer)
        addItemContTwo(obj, itemListContainer)
        addItem(obj);
        console.log(itemList)

        form.reset();
        submitButton.disabled = true;
        
    });

    form.addEventListener("reset", function(event) {
        event.preventDefault(); // Prevent form submission

        var inputs = form.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }

        console.log("reset");
    });

    function isEmpty(form) {
        for (var i = 0; i < form.elements.length; i++) {
            var input = form.elements[i];
            console.log(input);
            if (input.tagName === "INPUT" && input.value === "") {
                return false; // Return false if any field is empty
            }
        }

        return true;
    }

    function displayItems() {

        // Assuming you have already parsed the JSON string and stored it in the 'itemList' variable
    
        // Get a reference to the 'itemList' div element
        
        //const itemListContainer = document.getElementById('itemList');
    
        // Iterate over each item in the itemList array
        itemList.forEach((item) => {
        // Create a new item container element
            //addItemCont(item, itemListContainer)
            addItemContTwo(item, itemListContainer)
        });

    }

    function addItemCont(item, itemListContainer) {
        const itemContainer = document.createElement('div');
        
        const itemImage = document.createElement('div');
        
    
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

    }

    function addItemContTwo(item, itemListContainer) {
        //const itemContainer = itemListContainer;
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container');
        
        // Create item image
        const itemImage = document.createElement('div');
        itemImage.classList.add('item-image');
        const img = document.createElement('img');
        img.src = item.imageURL;
        img.alt = item.item_name;
        itemImage.appendChild(img);
        
        // Create item details
        const itemDetails = document.createElement('div');
        itemDetails.classList.add('item-details');
        const itemName = document.createElement('h3');
        itemName.textContent = item.item_name;
        const itemDescription = document.createElement('p');
        itemDescription.textContent = `Description: ${item.description}`;
        const itemPrice = document.createElement('p');
        itemPrice.textContent = `Price: $${item.price}`;
        const itemQuantity = document.createElement('p');
        itemQuantity.textContent = `Quantity: ${item.quantity}`;
        itemDetails.appendChild(itemName);
        itemDetails.appendChild(itemDescription);
        itemDetails.appendChild(itemPrice);
        itemDetails.appendChild(itemQuantity);
        
        // Append item image and item details to item container
        itemContainer.appendChild(itemImage);
        itemContainer.appendChild(itemDetails);
        itemListContainer.appendChild(itemContainer);

    }
});
