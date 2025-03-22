document.addEventListener("DOMContentLoaded", function () {
  const destinations = [
    {
      name: "Bali",
      tours: 7,
      image: "./assets/img/dest/bali.jpg",
    },
    {
      name: "Bangkok",
      tours: 7,
      image: "./assets/img/dest/bankoge.jpg",
    },
    {
      name: "Cancun",
      tours: 6,
      image: "./assets/img/dest/cancun.jpg",
    },
    {
      name: "Nha Trang",
      tours: 11,
      image: "./assets/img/dest/nha.jpg",
    },
    {
      name: "Paris",
      tours: 15,
      image: "./assets/img/dest/paris.jpg",
    },
    {
      name: "Tokyo",
      tours: 9,
      image: "./assets/img/dest/tokyo.jpg",
    },
  ];

  const destinationsContainer = document.querySelector(".row");
  const paginationContainer = document.querySelector(".pagination");

  let currentPage = 1;
  const cardsPerPage = [4, 2];

  function displayDestinations(page) {
    destinationsContainer.innerHTML = "";

    let itemsPerPage = 0;
    let startIndex = 0;

    if (page === 1) {
      itemsPerPage = cardsPerPage[0];
      startIndex = 0;
    } else if (page === 2) {
      itemsPerPage = cardsPerPage[1];
      startIndex = cardsPerPage[0];
    }

    const endIndex = startIndex + itemsPerPage;
    const destinationsToDisplay = destinations.slice(startIndex, endIndex);

    destinationsToDisplay.forEach((destination) => {
      const cardHTML = `
        <div class="col-md-3 mb-4">
          <div class="card rounded-4 shadow-sm destination-card">
            <img src="${destination.image}" class="card-img-top rounded-4" alt="${destination.name}">
            <div class="card-body">
              <h5 class="card-title">${destination.name}</h5>
              <p class="card-text">${destination.tours} tours and activities</p>
              <a href="#" class="btn btn-primary see-tours-btn">See All Tours and Activities</a>
            </div>
          </div>
        </div>
      `;
      destinationsContainer.innerHTML += cardHTML;
    });
  }

  function updatePagination() {
    paginationContainer.innerHTML = "";
    let totalPages = 2;

    // Previous Button
    const prevButton = document.createElement("li");
    prevButton.className = "page-item" + (currentPage === 1 ? " disabled" : "");
    prevButton.innerHTML = `<a class="page-link rounded-circle" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a>`;
    prevButton.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        displayDestinations(currentPage);
        updatePagination();
      }
    });
    paginationContainer.appendChild(prevButton);

    // Page Numbers
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("li");
      pageButton.className = "page-item" + (i === currentPage ? " active" : "");
      pageButton.innerHTML = `<a class="page-link rounded-circle" href="#">${i}</a>`;
      pageButton.addEventListener("click", () => {
        currentPage = i;
        displayDestinations(currentPage);
        updatePagination();
      });
      paginationContainer.appendChild(pageButton);
    }

    // Next Button
    const nextButton = document.createElement("li");
    nextButton.className =
      "page-item" + (currentPage === totalPages ? " disabled" : "");
    nextButton.innerHTML = `<a class="page-link rounded-circle" href="#" aria-label="Next"><span aria-hidden="true">»</span></a>`;
    nextButton.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        displayDestinations(currentPage);
        updatePagination();
      }
    });
    paginationContainer.appendChild(nextButton);
  }

  // Initial Display
  displayDestinations(currentPage);
  updatePagination();
});
