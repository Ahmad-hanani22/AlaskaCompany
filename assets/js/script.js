document.addEventListener("DOMContentLoaded", function () {
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScrollAnimation(elements) {
    elements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add("animate");
      } else {
        element.classList.remove("animate");
      }
    });
  }

  const advantageItems = document.querySelectorAll(".advantage-item");
  const tripIdeaCards = document.querySelectorAll(".trip-ideas .card");
  const storiesCards = document.querySelectorAll(".inspiration-section .card");

  // Initialize animations on page load
  advantageItems.forEach((item) => {
    if (isElementInViewport(item)) {
      item.classList.add("animate");
    }
  });
  tripIdeaCards.forEach((item) => {
    if (isElementInViewport(item)) {
      item.classList.add("animate");
    }
  });
  storiesCards.forEach((item) => {
    if (isElementInViewport(item)) {
      item.classList.add("animate");
    }
  });
  handleScrollAnimation(advantageItems);
  handleScrollAnimation(tripIdeaCards);
  handleScrollAnimation(storiesCards);

  window.addEventListener("scroll", () => {
    handleScrollAnimation(advantageItems);
    handleScrollAnimation(tripIdeaCards);
    handleScrollAnimation(storiesCards);
  });

  const destinations = [
    {
      title: "Germany",
      image: "./assets/img/destination/germany.jpg",
      link: "#",
    },
    { title: "Qatar", image: "./assets/img/destination/qatar.jpg", link: "#" },
    {
      title: "Turkey",
      image: "./assets/img/destination/turky.jpg",
      link: "#",
    },
    { title: "Egypt", image: "./assets/img/destination/egypt.jpg", link: "#" },
    { title: "Paris", image: "./assets/img/destination/paris.jpg", link: "#" },
    { title: "Dubai", image: "./assets/img/destination/dubai.jpg", link: "#" },
    {
      title: "Saudi Arabia",
      image: "./assets/img/destination/saudi_Arabia.jpg",
      link: "#",
    },
    {
      title: "London",
      image: "./assets/img/destination/london.jpg",
      link: "#",
    },
  ];

  const container = document.getElementById("destinationContainer");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  let itemsPerPage = 4;
  let currentIndex = 0;
  let transitionDuration = 0.5;

  function initializeDestinations() {
    container.innerHTML = "";
    destinations.forEach((destination) => {
      const cardWrapper = document.createElement("div");
      cardWrapper.classList.add("card-wrapper");

      cardWrapper.innerHTML = `
        <div class="card rounded-4 overflow-hidden position-relative">
          <img src="${destination.image}" class="card-img-top" alt="${destination.title}">
          <div class="card-img-overlay d-flex flex-column justify-content-end">
            <h5 class="card-title text-white text-center">${destination.title}</h5>
            <a href="${destination.link}" class="btn btn-outline-light rounded-pill mt-2 see-all-tours-btn">See All Tours</a>
          </div>
        </div>
      `;
      container.appendChild(cardWrapper);
    });
  }

  function updateItemsPerPage() {
    if (window.innerWidth <= 768) {
      itemsPerPage = 1;
      transitionDuration = 0.3;
    } else {
      itemsPerPage = 4;
      transitionDuration = 0.5;
    }
  }

  function slideDestinations() {
    const translateX = -currentIndex * (100 / itemsPerPage);
    container.style.transition = `transform ${transitionDuration}s ease-in-out`;
    container.style.transform = `translateX(${translateX}%)`;
    updateButtons();
  }

  function updateButtons() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex >= destinations.length - itemsPerPage;
  }

  nextButton.addEventListener("click", () => {
    currentIndex =
      (currentIndex + 1) % (destinations.length - itemsPerPage + 1);
    slideDestinations();
  });

  prevButton.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + (destinations.length - itemsPerPage + 1)) %
      (destinations.length - itemsPerPage + 1);
    slideDestinations();
  });

  window.addEventListener("resize", () => {
    updateItemsPerPage();
    slideDestinations();
    updateButtons();
  });

  initializeDestinations();
  updateItemsPerPage();
  slideDestinations();
  updateButtons();

  const stories = [
    {
      category: "Business",
      title: "Fashion Outfit",
      date: "6 Sep, 2016",
      description:
        "Lacus ut nisi ultrices faucibus. Pellentesque porta felis id erat...",
      image: "./assets/img/storis/1.jpg",
    },
    {
      category: "Sports",
      title: "You big profit",
      date: "6 Sep, 2016",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam...",
      image: "./assets/img/storis/2.jpg",
    },
    {
      category: "Family",
      title: "A happy family",
      date: "6 Sep, 2016",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam...",
      image: "./assets/img/storis/3.jpg",
    },
    {
      category: "Friends",
      title: "A smile is a sign of friendliness",
      date: "7 Sep, 2016",
      description: "A smile is a sign of friendliness",
      image: "./assets/img/storis/4.jpg",
    },
    {
      category: "Business & sports",
      title: "The Santa Barbara Wildfire",
      date: "7 Sep, 2016",
      description:
        "Lacus ut nisi ultrices faucibus. Pellentesque porta felis id erat...",
      image: "./assets/img/storis/5.jpg",
    },
    {
      category: "Business",
      title: "Profit is great",
      date: "8 Sep, 2016",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam...",
      image: "./assets/img/storis/6.jpg",
    },
  ];

  const storiesContainer = document.querySelector(".inspiration-section .row");
  const storiesPrevButton = document.querySelector(
    ".inspiration-section .d-flex .btn:first-child"
  );
  const storiesNextButton = document.querySelector(
    ".inspiration-section .d-flex .btn:last-child"
  );

  let storiesItemsPerPage;
  let storiesCurrentIndex = 0;
  let storiesTransitionDuration = 0.5;
  let isAnimating = false;

  function calculateStoriesItemsPerPage() {
    return window.innerWidth <= 768 ? 1 : 4;
  }

  function updateStoriesLayout() {
    const newStoriesItemsPerPage = calculateStoriesItemsPerPage();
    storiesItemsPerPage = newStoriesItemsPerPage; // Corrected

    const storiesWrapper = storiesContainer.querySelector(".stories-wrapper");
    const cards = storiesWrapper.querySelectorAll(".col-md-3");
    const cardCount = stories.length; // Get correct card count

    const cardWidthPercentage = newStoriesItemsPerPage === 1 ? 100 : 25;
    storiesWrapper.style.width = cardCount * cardWidthPercentage + "%";

    cards.forEach((card, index) => {
      card.style.width = cardWidthPercentage + "%";
      // Now you will not lose values in the card
      card.innerHTML = `
          <div class="card h-100">
              <img src="${stories[index].image}" class="card-img-top" alt="${stories[index].title}">
              <div class="card-body">
                  <span class="badge bg-secondary text-light">${stories[index].category}</span>
                  <h5 class="card-title">${stories[index].title}</h5>
                  <small class="text-muted">${stories[index].date}</small>
                  <p class="card-text">${stories[index].description}</p>
              </div>
          </div>
          `;
    });

    updateStoriesButtons();
  }

  function initializeStories() {
    // Always re-create the wrapper
    storiesContainer.innerHTML = "";
    const storiesWrapper = document.createElement("div");
    storiesWrapper.classList.add("stories-wrapper");
    storiesWrapper.style.display = "flex";
    storiesContainer.appendChild(storiesWrapper);

    // Create content
    createStoriesCards();
    // Apply style for slide
    updateStoriesLayout();
    // Slide and update buttons
    slideStories();
    storiesContainer.style.overflow = "hidden";
    storiesWrapper.style.transition = `transform ${storiesTransitionDuration}s ease-in-out`;
  }

  function createStoriesCards() {
    const storiesWrapper = storiesContainer.querySelector(".stories-wrapper");
    stories.forEach((story) => {
      const storyCard = createStoryCard(story);
      storiesWrapper.appendChild(storyCard);
    });
  }
  function createStoryCard(story) {
    const col = document.createElement("div");
    col.classList.add("col-md-3", "mb-4");
    col.style.width = "100%";
    col.innerHTML = `
     <div class="card h-100">
       <img src="${story.image}" class="card-img-top" alt="${story.title}">
       <div class="card-body">
         <span class="badge bg-secondary text-light">${story.category}</span>
         <h5 class="card-title">${story.title}</h5>
         <small class="text-muted">${story.date}</small>
         <p class="card-text">${story.description}</p>
       </div>
     </div>
   `;
    return col;
  }

  function slideStories() {
    if (isAnimating) return;
    isAnimating = true;

    const cardWidth =
      storiesContainer.offsetWidth / calculateStoriesItemsPerPage();
    const translateX = -storiesCurrentIndex * cardWidth;

    const storiesWrapper = storiesContainer.querySelector(".stories-wrapper");
    storiesWrapper.style.transform = `translateX(${translateX}px)`;

    setTimeout(() => {
      isAnimating = false;
    }, storiesTransitionDuration * 1000);

    updateStoriesButtons();
  }

  function updateStoriesButtons() {
    const newStoriesItemsPerPage = calculateStoriesItemsPerPage();
    storiesPrevButton.disabled = storiesCurrentIndex === 0;
    storiesNextButton.disabled =
      storiesCurrentIndex >= stories.length - newStoriesItemsPerPage;
  }

  storiesNextButton.addEventListener("click", () => {
    const maxIndex = stories.length - calculateStoriesItemsPerPage();
    if (storiesCurrentIndex < maxIndex) {
      storiesCurrentIndex++;
      slideStories();
    }
  });

  storiesPrevButton.addEventListener("click", () => {
    if (storiesCurrentIndex > 0) {
      storiesCurrentIndex--;
      slideStories();
    }
  });

  window.addEventListener("resize", () => {
    const newStoriesItemsPerPage = calculateStoriesItemsPerPage();
    storiesCurrentIndex = Math.min(
      storiesCurrentIndex,
      stories.length - newStoriesItemsPerPage
    );
    updateStoriesLayout();
    slideStories();
  });

  initializeStories();
});
