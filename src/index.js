const starsSelected = document.querySelector(
	".section-rating__card-rating__buttons-container"
);
const submitButton = document.querySelector(
	".section-rating__card-rating__submit-button"
);
const cardRating = document.querySelector(".section-rating__card-rating");
const cardClassification = document.querySelector(
	".section-rating__card-classification"
);
const selection = document.querySelector(
	".section-rating__card-classification__selection-container__text"
);

let stars = 0;
starsSelected.addEventListener("click", (evt) => {
	stars = evt.target.innerText;
});

submitButton.addEventListener("click", (evt) => {
	if (stars) {
		cardRating.classList.add("inactive");
		cardClassification.classList.remove("inactive");
		selection.innerText = `You selected ${stars} out of 5`;
	}
});
