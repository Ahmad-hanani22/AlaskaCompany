const products = [
  {
    name: "Camera Journey",
    price: 17.0,
    oldPrice: 21.0,
    image: "./assets/img/shop/product1.jpg",
  },
  {
    name: "Compact Shelter",
    price: 40.0,
    oldPrice: null,
    image: "./assets/img/shop/product2.jpg",
  },
  {
    name: "Compass",
    price: 4.0,
    oldPrice: null,
    image: "./assets/img/shop/product3.jpg",
  },
  {
    name: "Flashlight",
    price: 15.0,
    oldPrice: null,
    image: "./assets/img/shop/product4.jpg",
  },
  {
    name: "Infrared Binoculars",
    price: 35.0,
    oldPrice: null,
    image: "./assets/img/shop/product5.jpg",
  },
  {
    name: "Mountain Climbers",
    price: 12.5,
    oldPrice: 19.0,
    image: "./assets/img/shop/product6.jpg",
  },
  {
    name: "Sleeping Bag",
    price: 24.0,
    oldPrice: null,
    image: "./assets/img/shop/product7.jpg",
  },
  {
    name: "Tourist Backpack",
    price: null,
    oldPrice: null,
    image: "./assets/img/shop/broduct8.jpg",
  },
  {
    name: "Product 9",
    price: 99.99,
    oldPrice: 120.0,
    image: "./assets/img/shop/product9.jpg",
  },
];

const productsPerPageFirstPage = 6; // Products on first page
const productsPerPageOtherPages = 3; // Products on subsequent pages
let currentPage = 1;

function displayProducts(page) {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";

  let productsPerPage =
    page === 1 ? productsPerPageFirstPage : productsPerPageOtherPages;

  const startIndex =
    (page - 1) *
    (page === 1 ? productsPerPageFirstPage : productsPerPageOtherPages);
  const endIndex = startIndex + productsPerPage;
  const productsToDisplay = products.slice(startIndex, endIndex);

  productsToDisplay.forEach((product) => {
    const card = document.createElement("div");
    card.className = "col-md-3 product-card small-product"; // Changed to col-md-3 and added small-product class
    card.innerHTML = `
        <img src="${product.image}" alt="${
      product.name
    }" class="img-fluid small-img">
        <h4 class="small-title">${product.name}</h4>
        ${
          product.oldPrice
            ? `<del class="small-price">$${product.oldPrice.toFixed(2)}</del> `
            : ""
        }
        <span class="small-price">$${
          product.price ? product.price.toFixed(2) : "N/A"
        }</span>
    `;
    productContainer.appendChild(card);
  });
}

function updatePaginationButtons() {
  const paginationLinksContainer = document.getElementById("pagination-links");
  paginationLinksContainer.innerHTML = "";

  // Dynamically calculate the number of pages based on the defined layout
  let numberOfPages = 1;
  if (products.length > productsPerPageFirstPage) {
    numberOfPages =
      1 +
      Math.ceil(
        (products.length - productsPerPageFirstPage) / productsPerPageOtherPages
      );
  }

  // زر "السابق"
  const prevLi = document.createElement("li");
  prevLi.className = "page-item";
  const prevA = document.createElement("a");
  prevA.className = "page-link";
  prevA.href = "#";
  prevA.dataset.page = "prev";
  prevA.textContent = "Previous";
  prevLi.appendChild(prevA);
  paginationLinksContainer.appendChild(prevLi);

  for (let i = 1; i <= numberOfPages; i++) {
    const li = document.createElement("li");
    li.className = "page-item " + (i === currentPage ? "active" : "");
    const a = document.createElement("a");
    a.className = "page-link";
    a.href = "#";
    a.dataset.page = i;
    a.textContent = i;
    li.appendChild(a);
    paginationLinksContainer.appendChild(li);
  }

  // زر "التالي"
  const nextLi = document.createElement("li");
  nextLi.className = "page-item";
  const nextA = document.createElement("a");
  nextA.className = "page-link";
  nextA.href = "#";
  nextA.dataset.page = "next";
  nextA.textContent = "Next";
  nextLi.appendChild(nextA);
  paginationLinksContainer.appendChild(nextLi);
}

function updateProductsCount() {
  const productsCountElement = document.getElementById("products-count");
  let productsPerPage =
    currentPage === 1 ? productsPerPageFirstPage : productsPerPageOtherPages;
  const startIndex =
    (currentPage - 1) *
      (currentPage === 1
        ? productsPerPageFirstPage
        : productsPerPageOtherPages) +
    1;
  const endIndex = Math.min(startIndex + productsPerPage - 1, products.length); // Adjusted endIndex calculation
  productsCountElement.textContent = `Showing ${startIndex}-${endIndex} of ${products.length} results`;
}

// Event listener for pagination links
document
  .getElementById("pagination-links")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("page-link")) {
      event.preventDefault();
      const page = event.target.dataset.page;

      if (page === "next") {
        currentPage = Math.min(
          currentPage + 1,
          Math.ceil(
            (products.length - productsPerPageFirstPage) /
              productsPerPageOtherPages
          ) + 1
        );
      } else if (page === "prev") {
        currentPage = Math.max(currentPage - 1, 1);
      } else {
        currentPage = parseInt(page);
      }

      displayProducts(currentPage);
      updatePaginationButtons();
      updateProductsCount();
    }
  });

// Initialization
displayProducts(currentPage);
updatePaginationButtons();
updateProductsCount();
