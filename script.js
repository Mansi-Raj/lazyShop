// Sample product data
const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "Product 2",
      price: 150,
      image: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "Product 3",
      price: 200,
      image: "https://via.placeholder.com/200"
    },
    {
      id: 4,
      name: "Product 4",
      price: 250,
      image: "https://via.placeholder.com/200"
    }
  ];
  
  const productList = document.getElementById('product-list');
  const cartCount = document.getElementById('cart-count');
  let cart = [];
  
  // Function to render products
  function renderProducts() {
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product');
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(productCard);
    });
  }
  
  // Function to add product to cart
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    cartCount.innerText = cart.length;
    alert(`${product.name} added to cart`);
  }
  
  // Initialize product rendering
  renderProducts();
  