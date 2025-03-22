document.addEventListener("DOMContentLoaded", function () {
  const tours = [
    {
      title: "Adventure Shore Excursions",
      description: "Explore Half-Moon Reef & Coral...",
      price: 99.0,
      image: "./assets/img/tourlist/tour1.jpg",
      rating: 4.5,
      reviews: 15,
      tourType: ["Rail Tour", "Tour & Cruise"],
      duration: "1 night",
      location: "Maldives",
      originalPrice: 120.0,
    },
    {
      title: "Alpine Getaway For Mountain",
      description: "lovers.",
      price: 60.0,
      image: "assets/img/tourlist/tour2.jpg",
      rating: 3.8,
      reviews: 8,
      tourType: ["Rail Tour", "River Cruise"],
      duration: "5 days - 4 nights",
      location: "Theme park, Singapore",
      originalPrice: 80.0,
    },
    {
      title: "Bali Unesco World Heritage Sites",
      description: "Tour.",
      price: 92.0,
      image: "assets/img/tourlist/tour3.jpg",
      rating: 5.0,
      reviews: 22,
      tourType: ["Rail Tour", "River Cruise", "Wildlife"],
      duration: "5 days - 4 nights",
      location: "Bali",
      originalPrice: 100.0,
    },
    {
      title: "Best Of London Tower Of London",
      description: "Thames & Changing Of The Guard...",
      price: 300.0,
      image: "assets/img/tourlist/tour4.jpg",
      rating: 4.2,
      reviews: 12,
      tourType: ["Rail Tour", "River Cruise"],
      duration: "1 days - 9 hours",
      location: "London",
      originalPrice: 345.0,
    },
    {
      title: "Dubrownik Discovery Old Town",
      description: "Walking Tour.",
      price: 64.0,
      image: "assets/img/tourlist/tour5.jpg",
      rating: 4.7,
      reviews: 18,
      tourType: ["Rail Tour", "River Cruise"],
      duration: "6 days - 5 nights",
      location: "European Way, Southampton, United Kingdom",
      originalPrice: 80.0,
    },
    {
      title: "Incredible Holiday With Cruise",
      description: "tour.",
      price: 93.0,
      image: "assets/img/tourlist/tour6.jpg",
      rating: 4.9,
      reviews: 25,
      tourType: ["Escorted Tour", "Rail Tour"],
      duration: "5 days - 4 nights",
      location: "New Delhi",
      originalPrice: 110.0,
    },
    {
      title: "Tour 7",
      description: "Description 7",
      price: 120.0,
      image: "assets/img/tourlist/tour7.jpg",
      rating: 3.5,
      reviews: 5,
      tourType: ["Rail Tour"],
      duration: "3 days",
      location: "Unknown",
      originalPrice: 150.0,
    },
    {
      title: "Tour 8",
      description: "Description 8",
      price: 75.0,
      image: "assets/img/tourlist/tour8.jpg",
      rating: 4.0,
      reviews: 10,
      tourType: ["River Cruise"],
      duration: "4 days",
      location: "Unknown",
      originalPrice: 90.0,
    },
    {
      title: "Tour 9",
      description: "Description 9",
      price: 110.0,
      image: "assets/img/tourlist/tour9.jpg",
      rating: 4.3,
      reviews: 14,
      tourType: ["Wildlife"],
      duration: "2 days",
      location: "Unknown",
      originalPrice: 130.0,
    },
    {
      title: "Tour 10",
      description: "Description 10",
      price: 250.0,
      image: "assets/img/tourlist/tour10.jpg",
      rating: 4.6,
      reviews: 17,
      tourType: ["Tour & Cruise"],
      duration: "7 days",
      location: "Unknown",
      originalPrice: 280.0,
    },
    {
      title: "Tour 11",
      description: "Description 11",
      price: 80.0,
      image: "assets/img/tourlist/tour11.jpg",
      rating: 3.9,
      reviews: 9,
      tourType: ["Escorted Tour"],
      duration: "1 day",
      location: "Unknown",
      originalPrice: 95.0,
    },
    {
      title: "Tour 12",
      description: "Description 12",
      price: 100.0,
      image: "assets/img/tourlist/tour12.jpg",
      rating: 4.1,
      reviews: 11,
      tourType: ["Rail Tour", "River Cruise"],
      duration: "5 days",
      location: "Unknown",
      originalPrice: 115.0,
    },
    {
      title: "Tour 13",
      description: "Description 13",
      price: 130.0,
      image: "assets/img/tourlist/tour13.jpg",
      rating: 4.4,
      reviews: 13,
      tourType: ["Rail Tour", "River Cruise"],
      duration: "5 days",
      location: "Unknown",
      originalPrice: 150.0,
    },
    {
      title: "Tour 14",
      description: "Description 14",
      price: 65.0,
      image: "assets/img/tourlist/tour14.jpg",
      rating: 3.7,
      reviews: 7,
      tourType: ["Rail Tour", "River Cruise"],
      duration: "5 days",
      location: "Unknown",
      originalPrice: 80.0,
    },
    {
      title: "Tour 15",
      description: "Description 15",
      price: 95.0,
      image: "assets/img/tourlist/tour15.jpg",
      rating: 4.8,
      reviews: 20,
      tourType: ["Rail Tour", "River Cruise"],
      duration: "5 days",
      location: "Unknown",
      originalPrice: 110.0,
    },
    {
      title: "Tour 16",
      description: "Description 16",
      price: 320.0,
      image: "assets/img/tourlist/tour16.jpg",
      rating: 4.0,
      reviews: 10,
      tourType: ["Rail Tour", "River Cruise"],
      duration: "5 days",
      location: "Unknown",
      originalPrice: 350.0,
    },
  ];

  const toursPerPage = 6;
  let currentPage = 1;

  const tourCardsContainer = document.getElementById("tour-cards-container");
  const paginationContainer = document.getElementById("pagination-container");
  const startTourElement = document.getElementById("start-tour");
  const endTourElement = document.getElementById("end-tour");
  const totalToursElement = document.getElementById("total-tours");

  const allDestinationSelect = document.getElementById("allDestination");
  const selectDatesInput = document.getElementById("selectDates");
  const clearFilterButton = document.getElementById("clearFilter");
  const findToursButton = document.querySelector(".btn-success.mt-3.w-100");
  const durationCheckboxes = document.querySelectorAll(
    'input[name="duration"]'
  );
  const tourTypeCheckboxes = document.querySelectorAll(
    'input[name="tourType"]'
  );
  const ratingRadios = document.querySelectorAll('input[name="rating"]');
  const priceRangeInput = document.getElementById("priceRange");

  
  flatpickr(selectDatesInput, {
    dateFormat: "Y-m-d",
  });

 
  findToursButton.addEventListener("click", function () {
    const selectedDestination = allDestinationSelect.value;
    const selectedDate = selectDatesInput.value;
    const selectedDurations = Array.from(durationCheckboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
    const selectedTourTypes = Array.from(tourTypeCheckboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
    const selectedRating = Array.from(ratingRadios).find(
      (radio) => radio.checked
    )?.value;
    const selectedPrice = parseFloat(priceRangeInput.value);

    filterTours(
      selectedDestination,
      selectedDate,
      selectedDurations,
      selectedTourTypes,
      selectedRating,
      selectedPrice
    );
  });

  // إضافة حدث نقر لزر "Clear Filter"
  clearFilterButton.addEventListener("click", function () {
    allDestinationSelect.value = "";
    selectDatesInput.value = "";
    durationCheckboxes.forEach((checkbox) => (checkbox.checked = false));
    tourTypeCheckboxes.forEach((checkbox) => (checkbox.checked = false));
    ratingRadios.forEach((radio) => (radio.checked = false));
    priceRangeInput.value = priceRangeInput.min;

    filterTours("", "", [], [], "", parseFloat(priceRangeInput.min));
  });

  function displayTours(page, filteredTours = tours) {
    tourCardsContainer.innerHTML = "";
    const startIndex = (page - 1) * toursPerPage;
    const endIndex = startIndex + toursPerPage;
    const paginatedTours = filteredTours.slice(startIndex, endIndex);

    paginatedTours.forEach((tour) => {
      const getBadgeColor = (type) => {
        switch (type) {
          case "Rail Tour":
            return "bg-warning";
          case "River Cruise":
            return "bg-info";
          case "Wildlife":
            return "bg-success";
          case "Tour & Cruise":
            return "bg-primary";
          case "Escorted Tour":
            return "bg-danger";
          default:
            return "bg-secondary";
        }
      };

      const cardHTML = `
            <div class="col">
              <div class="card h-100 position-relative">
                <img src="${tour.image}" class="card-img-top" alt="Tour Image">
                <span class="on-sale position-absolute top-0 end-0 bg-danger text-white p-1 rounded">On Sale</span>
                <div class="card-body">
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-map-marker-alt me-2 text-muted"></i>
                    <small class="text-muted">${tour.location}</small>
                  </div>
                  <h5 class="card-title">${tour.title}</h5>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-star text-warning me-1"></i>
                    <span>${tour.rating} (${tour.reviews} reviews)</span>
                  </div>
                  <div class="mb-2">
                    ${tour.tourType
                      .map(
                        (type) =>
                          `<span class="badge ${getBadgeColor(
                            type
                          )} text-white me-1 rounded-pill">${type}</span>`
                      )
                      .join(" ")}
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div>
                      <s class="text-muted">$${tour.originalPrice.toFixed(
                        2
                      )}</s>
                      <div class="fw-bold">From $${tour.price.toFixed(2)}</div>
                    </div>
                    <div class="d-flex align-items-center">
                      <i class="far fa-clock me-1"></i>
                      <span>${tour.duration}</span>
                    </div>
                  </div>
                </div>
                <div class="card-footer bg-transparent border-top">
                  <a href="#" class="btn btn-primary btn-sm view-details-btn" data-tour-index="${
                    startIndex + paginatedTours.indexOf(tour)
                  }">View Details</a>
                </div>
              </div>
            </div>
          `;
      tourCardsContainer.innerHTML += cardHTML;
    });
    updateTourCount(
      startIndex + 1,
      Math.min(endIndex, filteredTours.length),
      filteredTours.length
    );
    attachViewDetailsListeners();
    displayPagination(filteredTours);
  }

  function attachViewDetailsListeners() {
    const viewDetailsButtons = document.querySelectorAll(".view-details-btn");
    viewDetailsButtons.forEach((button) => {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        const tourIndex = this.dataset.tourIndex;
        viewTourDetails(tourIndex);
      });
    });
  }

  function viewTourDetails(tourIndex) {
    console.log(`View details for tour at index ${tourIndex}`);
  }

  function updateTourCount(start, end, total) {
    startTourElement.innerText = start;
    endTourElement.innerText = end;
    totalToursElement.innerText = total;
  }

  function displayPagination(filteredTours = tours) {
    const totalPages = Math.ceil(filteredTours.length / toursPerPage);
    paginationContainer.innerHTML = "";

    const previousLink = document.createElement("li");
    previousLink.classList.add("page-item");
    previousLink.innerHTML = `<a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a>`;
    previousLink.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        displayTours(currentPage, filteredTours);
        updatePagination();
      }
    });
    paginationContainer.appendChild(previousLink);

    for (let i = 1; i <= totalPages; i++) {
      const pageLink = document.createElement("li");
      pageLink.classList.add("page-item");
      pageLink.innerHTML = `<a class="page-link" href="#">${i}</a>`;
      pageLink.addEventListener("click", () => {
        currentPage = i;
        displayTours(currentPage, filteredTours);
        updatePagination();
      });
      paginationContainer.appendChild(pageLink);
    }

    const nextLink = document.createElement("li");
    nextLink.classList.add("page-item");
    nextLink.innerHTML = `<a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a>`;
    nextLink.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        displayTours(currentPage, filteredTours);
        updatePagination();
      }
    });
    paginationContainer.appendChild(nextLink);

    updatePagination();
  }

  function updatePagination() {
    const pageLinks = paginationContainer.querySelectorAll(".page-item");
    pageLinks.forEach((link, index) => {
      if (index === currentPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  function filterTours(destination, date, durations, tourTypes, rating, price) {
    let filteredTours = tours;

    if (destination) {
      filteredTours = filteredTours.filter(
        (tour) => tour.location.toLowerCase() === destination.toLowerCase()
      );
    }

    if (date) {
      filteredTours = filteredTours.filter((tour) =>
        tour.duration.includes(date)
      );
    }

    if (durations && durations.length > 0) {
      filteredTours = filteredTours.filter((tour) => {
        return durations.some((duration) => {
          if (duration === "Less than 1 day") {
            return (
              tour.duration.includes("night") || tour.duration.includes("hours")
            );
          } else if (duration === "1 to 3 days") {
            return (
              tour.duration.includes("1 day") ||
              tour.duration.includes("2 days") ||
              tour.duration.includes("3 days")
            );
          } else if (duration === "3+ days") {
            return !(
              tour.duration.includes("1 day") ||
              tour.duration.includes("2 days") ||
              tour.duration.includes("3 days")
            );
          } else {
            return true;
          }
        });
      });
    }

    if (tourTypes && tourTypes.length > 0) {
      filteredTours = filteredTours.filter((tour) =>
        tourTypes.some((type) => tour.tourType.includes(type))
      );
    }

    if (rating) {
      const ratingValue = parseFloat(rating); 
      filteredTours = filteredTours.filter(
        (tour) => tour.rating >= ratingValue
      );
    }

    if (price) {
      filteredTours = filteredTours.filter((tour) => tour.price <= price);
    }

    currentPage = 1;
    displayTours(currentPage, filteredTours);
    displayPagination(filteredTours);
  }

  displayTours(currentPage);
  displayPagination();
});
