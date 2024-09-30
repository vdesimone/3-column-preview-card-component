fetch("data.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    data.forEach((item, index) => {
      const card = document.querySelectorAll(".card")[index];
      if (card) {
        setupCard(card, item, index)
      }
    })
  })
  .catch(error => {
    console.log("There was a problem with the fetch operation: ", error);
  });

function setupCard(card, item, index) {
  const cardImage = document.querySelectorAll(".card-description img")[index];
  const cardHeader = document.querySelectorAll(".card-description h1")[index];
  const cardParagraph = document.querySelectorAll(".card-description p")[index];
  const cardButton = document.querySelectorAll(".card button")[index];

  card.style.backgroundColor = item.color;

  if (cardImage) {
    cardImage.src = item.icon;
    cardImage.alt = `${item.type} Icon`;
  }
  if (cardHeader) {
    cardHeader.textContent = item.type;
  }
  if (cardParagraph) {
    cardParagraph.textContent = item.description;
  }
  if (cardButton) {
    cardButton.style.color = item.color;
  }
}

