document.addEventListener("DOMContentLoaded", function () {
 
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }


  function handleFadeIn() {
    const fadeIns = document.querySelectorAll(".fade-in");
    fadeIns.forEach((fadeIn) => {
      if (isInViewport(fadeIn)) {
        fadeIn.classList.add("active");
      } else {
        fadeIn.classList.remove("active");
      }
    });
  }

  // Add scroll event listener to trigger the fade-in effect
  window.addEventListener("scroll", handleFadeIn);


  handleFadeIn();
});

///////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const tourList = document.getElementById("tour-list");
  const tourPagination = document.getElementById("tour-pagination");
  const imageGalleryModal = new bootstrap.Modal(
    document.getElementById("imageGalleryModal")
  );

  const toursData = [
    {
      location: "London",
      title: "Best Of London: Tower Of London, Thames & Changing Of The Guard",
      rating: 0,
      reviews: 0,
      tags: ["Rail Tour", "River Cruise"],
      originalPrice: 345,
      discountedPrice: 320,
      duration: "1 days - 9 hours",
      image: "./assets/img/deals/card1.png",
      onSale: true,
    },
    {
      location: "Mauritius",
      title: "Mauritius: Le Morne Mountain Guided Sunrise Hike And Climb",
      rating: 0,
      reviews: 0,
      tags: ["Escorted Tour", "Rail Tour"],
      originalPrice: 289,
      discountedPrice: 253,
      duration: "5 days - 4 nights",
      image: "./assets/img/deals/card2.png",
      onSale: true,
    },
    {
      location: "Thailand",
      title: "West Thai Wonders: Phuket, Koh Phi Phi, Krabi & Beyond",
      rating: 5,
      reviews: 1,
      tags: ["Rail Tour", "River Cruise"],
      originalPrice: 250,
      discountedPrice: 210,
      duration: "2 days",
      image: "./assets/img/deals/card3.png",
      onSale: true,
    },
    {
      location: "Ciudad del Sol",
      title: "VIP Private Tour Giza Pyramids, Sphinx, Camel Ride And Quad Bike",
      rating: 0,
      reviews: 0,
      tags: ["Rail Tour", "Tour & Cruise"],
      originalPrice: 105,
      discountedPrice: 95,
      duration: "7 days - 6 nights",
      image: "./assets/img/deals/card4.png",
      onSale: true,
    },
    {
      location: "Bali",
      title: "Bali Unesco World Heritage Sites Tour",
      rating: 5,
      reviews: 1,
      tags: ["Rail Tour", "River Cruise", "Wildlife"],
      originalPrice: 100,
      discountedPrice: 92,
      duration: "5 days - 4 nights",
      image: "./assets/img/deals/card5.png",
      onSale: true,
    },
    {
      location: "European Way, Southampton, United Kingdom",
      title:
        "Yllas: Forest Hike With Snowshoes And Campfire Snacks To Arctic...",
      rating: 0,
      reviews: 0,
      tags: ["Rail Tour", "Wildlife"],
      originalPrice: 87,
      discountedPrice: 82,
      duration: "2 days - 1 nights",
      image: "./assets/img/deals/card6.png",
      onSale: true,
    },
    {
      location: "Tokyo, Japan",
      title:
        "Tokyo: Private Cherry Blossom Experience - The Best Of Ancient ...",
      rating: 0,
      reviews: 0,
      tags: ["Rail Tour", "Wildlife"],
      originalPrice: 67,
      discountedPrice: 62,
      duration: "2 days - 1 nights",
      image: "./assets/img/deals/card7.png",
      onSale: true,
    },
    {
      location: "The address of Roma, Italia",
      title: "Royal Palm Beachcomber Special",
      rating: 0,
      reviews: 0,
      tags: ["Rail Tour", "River Cruise", "Wildlife"],
      originalPrice: 67,
      discountedPrice: 62,
      duration: "5 days - 3 nights",
      image: "./assets/img/deals/card8.png",
      onSale: true,
    },
    {
      location: "London",
      title: "Best Of London: Tower Of London, Thames & Changing Of The Guard",
      rating: 0,
      reviews: 0,
      tags: ["Rail Tour", "River Cruise"],
      originalPrice: 345,
      discountedPrice: 320,
      duration: "1 days - 9 hours",
      image: "./assets/img/deals/card9.png",
      onSale: true,
    },
    {
      location: "Mauritius",
      title: "Mauritius: Le Morne Mountain Guided Sunrise Hike And Climb",
      rating: 0,
      reviews: 0,
      tags: ["Escorted Tour", "Rail Tour"],
      originalPrice: 289,
      discountedPrice: 253,
      duration: "5 days - 4 nights",
      image: "./assets/img/deals/card10.png",
      onSale: true,
    },
    {
      location: "Thailand",
      title: "West Thai Wonders: Phuket, Koh Phi Phi, Krabi & Beyond",
      rating: 5,
      reviews: 1,
      tags: ["Rail Tour", "River Cruise"],
      originalPrice: 250,
      discountedPrice: 210,
      duration: "2 days",
      image: "./assets/img/deals/card2.png",
      onSale: true,
    },
    {
      location: "Ciudad del Sol",
      title: "VIP Private Tour Giza Pyramids, Sphinx, Camel Ride And Quad Bike",
      rating: 0,
      reviews: 0,
      tags: ["Rail Tour", "Tour & Cruise"],
      originalPrice: 105,
      discountedPrice: 95,
      duration: "7 days - 6 nights",
      image: "./assets/img/deals/card1.png",
      onSale: true,
    },
  ];

  const itemsPerPage = 8;
  let currentPage = 1;
  let currentImageIndex = 0;

  function displayTours(page) {
    tourList.innerHTML = ""; // Clear existing tours

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageTours = toursData.slice(startIndex, endIndex);

    pageTours.forEach((tour, index) => {
      const card = document.createElement("div");
      card.className = "col-sm-6 col-md-4 col-lg-3 mb-4 tour-card";
      card.innerHTML = `
              <div class="card h-100">
                  <img src="${
                    tour.image
                  }" class="card-img-top tour-image" alt="${
        tour.title
      }" style="height: 220px; object-fit: cover; cursor: pointer;">
                  ${tour.onSale ? '<span class="on-sale">On Sale</span>' : ""}
                  <div class="card-body">
                      <h5 class="card-title">${tour.title}</h5>
                      <p class="card-text"><small class="text-muted"><i class="fas fa-map-marker-alt"></i> ${
                        tour.location
                      }</small></p>
                      <div class="d-flex justify-content-between align-items-center">
                          <div>
                              <span class="me-2">${
                                tour.rating
                              } <i class="fas fa-star"></i></span>
                              <span>(${tour.reviews} reviews)</span>
                          </div>
                      </div>
                      <div class="mt-2">
                          ${tour.tags
                            .map(
                              (tag) =>
                                `<span class="badge bg-secondary me-1">${tag}</span>`
                            )
                            .join("")}
                      </div>
                      <div class="mt-3">
                          ${
                            tour.originalPrice
                              ? `<s class="text-muted">$${tour.originalPrice.toFixed(
                                  2
                                )}</s> `
                              : ""
                          }
                          <b>$${tour.discountedPrice.toFixed(2)}</b>
                      </div>
                      <small class="text-muted">${tour.duration}</small>
                  </div>
              </div>
          `;

      // Event listener for the image to open the gallery
      const tourImage = card.querySelector(".tour-image");
      tourImage.addEventListener("click", function () {
        currentImageIndex = startIndex + index; // Set the index to the clicked image
        updateGalleryImage(); // Function to update the image source
        imageGalleryModal.show(); // Show the image gallery modal
      });

      tourList.appendChild(card);
    });
  }

  function displayPagination() {
    tourPagination.innerHTML = ""; // Clear existing pagination

    const totalPages = Math.ceil(toursData.length / itemsPerPage);

    // Add "Previous" arrow
    const prevItem = document.createElement("li");
    prevItem.className = "page-item " + (currentPage === 1 ? "disabled" : "");
    prevItem.innerHTML = `<a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a>`;
    prevItem.addEventListener("click", function (e) {
      e.preventDefault();
      if (currentPage > 1) {
        currentPage--;
        displayTours(currentPage);
        displayPagination();
        updateActiveLink();
      }
    });
    tourPagination.appendChild(prevItem);

    for (let i = 1; i <= totalPages; i++) {
      const pageLink = document.createElement("li");
      pageLink.className = "page-item";
      const link = document.createElement("a");
      link.className = "page-link";
      link.href = "#";
      link.textContent = i;

      link.addEventListener("click", function (e) {
        e.preventDefault();
        currentPage = i;
        displayTours(currentPage);
        displayPagination();
        updateActiveLink();
      });

      pageLink.appendChild(link);
      tourPagination.appendChild(pageLink);
    }

    // Add "Next" arrow
    const nextItem = document.createElement("li");
    nextItem.className =
      "page-item " + (currentPage === totalPages ? "disabled" : "");
    nextItem.innerHTML = `<a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a>`;
    nextItem.addEventListener("click", function (e) {
      e.preventDefault();
      if (currentPage < totalPages) {
        currentPage++;
        displayTours(currentPage);
        displayPagination();
        updateActiveLink();
      }
    });
    tourPagination.appendChild(nextItem);

    updateActiveLink();
  }

  function updateActiveLink() {
    // Remove active class from all links
    document
      .querySelectorAll("#tour-pagination .page-item .page-link")
      .forEach((item) => {
        item.classList.remove("active");
      });

    // Add active class to the current page link
    const currentPageLink = document.querySelector(
      `#tour-pagination .page-item:nth-child(${currentPage + 1}) .page-link`
    ); // +1 to account for "Previous" arrow
    if (currentPageLink) {
      currentPageLink.classList.add("active");
    }
  }

  function updateGalleryImage() {
    const galleryImage = document.getElementById("gallery-image");
    galleryImage.src = toursData[currentImageIndex].image;
  }

  // Apply styles to the modal dynamically
  const modalElement = document.getElementById("imageGalleryModal");
  modalElement.addEventListener("shown.bs.modal", function () {
    const modalBody = modalElement.querySelector(".modal-body");
    modalBody.style.backgroundColor = "#000"; // Black background
    modalBody.style.display = "flex";
    modalBody.style.justifyContent = "center";
    modalBody.style.alignItems = "center";

    const galleryImage = document.getElementById("gallery-image");
    galleryImage.style.maxWidth = "100%";
    galleryImage.style.maxHeight = "100%";
    galleryImage.style.width = "auto";
    galleryImage.style.height = "auto";
    galleryImage.style.objectFit = "contain"; // Crucial for aspect ratio and filling space

    // Style the navigation buttons
    const navButtonsContainer = document.createElement("div");
    navButtonsContainer.style.position = "absolute";
    navButtonsContainer.style.top = "50%";
    navButtonsContainer.style.left = "0";
    navButtonsContainer.style.right = "0";
    navButtonsContainer.style.display = "flex";
    navButtonsContainer.style.justifyContent = "space-between";
    navButtonsContainer.style.alignItems = "center";
    navButtonsContainer.style.transform = "translateY(-50%)";
    navButtonsContainer.style.padding = "0 10px"; // Add some padding
    navButtonsContainer.style.zIndex = "10"; // Ensure buttons are on top of the image

    const prevButton = document.getElementById("prev-image");
    prevButton.classList.add("modal-nav-button");
    prevButton.style.position = "relative"; // Remove absolute positioning
    prevButton.style.marginLeft = "10px"; // Add margin

    const nextButton = document.getElementById("next-image");
    nextButton.classList.add("modal-nav-button");
    nextButton.style.position = "relative"; // Remove absolute positioning
    nextButton.style.marginRight = "10px"; // Add margin

    navButtonsContainer.appendChild(prevButton);
    navButtonsContainer.appendChild(nextButton);
    modalBody.appendChild(navButtonsContainer);

    const navButtons = modalElement.querySelectorAll(".modal-nav-button");
    navButtons.forEach((button) => {
      button.style.color = "white";
      button.style.background = "none";
      button.style.border = "none";
      button.style.fontSize = "2em";
      button.style.cursor = "pointer";
    });

    //Hover Effect
    navButtons.forEach((button) => {
      button.addEventListener("mouseover", function () {
        button.style.color = "#ccc"; // Lighter on hover
      });
      button.addEventListener("mouseout", function () {
        button.style.color = "white";
      });
    });

    //Style close button
    const closeButton = modalElement.querySelector(".btn-close");
    closeButton.style.filter = "invert(1)"; // Invert the color to white
    closeButton.addEventListener("mouseover", () => {
      closeButton.style.filter = "invert(0)"; // Revert the color to Black
      closeButton.style.backgroundColor = "red";
    });
    closeButton.addEventListener("mouseout", () => {
      closeButton.style.filter = "invert(1)";
      closeButton.style.backgroundColor = "transparent";
    });
  });

  document.getElementById("prev-image").addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent event bubbling
    currentImageIndex =
      (currentImageIndex - 1 + toursData.length) % toursData.length;
    updateGalleryImage();
  });

  document.getElementById("next-image").addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent event bubbling
    currentImageIndex = (currentImageIndex + 1) % toursData.length;
    updateGalleryImage();
  });

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (imageGalleryModal._isShown) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        document.getElementById("prev-image").click();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        document.getElementById("next-image").click();
      }
    }
  });

  // Set the modal size after it's shown
  modalElement.addEventListener("show.bs.modal", function () {
    const modalDialog = modalElement.querySelector(".modal-dialog");
    modalDialog.classList.add("modal-fullscreen");
    document.body.classList.add("modal-open"); // Add class to body
    document.body.style.overflow = "hidden"; // Disable scrolling
  });

  modalElement.addEventListener("hidden.bs.modal", function () {
    document.body.classList.remove("modal-open"); // Remove class from body
    document.body.style.overflow = "auto"; // Restore scrolling
  });

  // Initial display
  displayTours(currentPage);
  displayPagination();
});
