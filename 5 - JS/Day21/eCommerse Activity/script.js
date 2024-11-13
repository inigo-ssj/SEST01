const products = [
  { id: 1, name: "Stainless Pot", price: 3500.0, image: "images/product1.png" },
  {
    id: 2,
    name: "Frying Pan Set",
    price: 5000.0,
    image: "images/product2.png",
  },
  { id: 3, name: "Chef's Knife", price: 1000.0, image: "images/product3.png" },
  { id: 4, name: "Butcher Knife", price: 800.0, image: "images/product4.png" },
  { id: 5, name: "White Bowl", price: 300.0, image: "images/product5.png" },
  { id: 6, name: "Bowl", price: 200.0, image: "images/product6.png" },
  { id: 7, name: "Plate Set 1", price: 1000.0, image: "images/product7.png" },
  { id: 8, name: "Plate Set 2", price: 500.0, image: "images/product8.png" },
  { id: 9, name: "Plate Set 3", price: 1500.0, image: "images/product9.png" },
  { id: 10, name: "Wok", price: 3500.0, image: "images/product10.png" },
  {
    id: 11,
    name: "Stainless Sauce Pan",
    price: 2000.0,
    image: "images/product11.png",
  },
  {
    id: 12,
    name: "Cooking Pot Set",
    price: 6000.0,
    image: "images/product12.png",
  },
];

let cart = [];

function displayProducts() {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="150">
            <span>${product.name} - ₱${product.price.toFixed(2)}</span>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
    productsContainer.appendChild(productDiv);
  });
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    const cartItem = cart.find((item) => item.id === productId);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    displayCart();
  }
}

function displayCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";
  let totalPrice = 0;
  let totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.quantity;
    totalItems += item.quantity;

    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");
    cartItemDiv.innerHTML = `
            <span>${item.name}</span>
            <span>₱${item.price.toFixed(2)} x ${item.quantity}</span>
            <button onclick="decrementQuantity(${item.id})">-</button>
            <button onclick="incrementQuantity(${item.id})">+</button>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
    cartItemsContainer.appendChild(cartItemDiv);
  });

  document.getElementById("total-price").textContent = totalPrice.toFixed(2);
  document.getElementById("total-items").textContent = totalItems;
}

function incrementQuantity(productId) {
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity += 1;
    displayCart();
  }
}

function decrementQuantity(productId) {
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem && cartItem.quantity > 1) {
    cartItem.quantity -= 1;
    displayCart();
  }
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  displayCart();
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for your purchase!");
    cart = [];
    displayCart();
  }
}

if (document.getElementById("products")) {
  displayProducts();
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("open");
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("open");
}
