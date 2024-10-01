async function fetchData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setupCards(data);
  } catch (error) {
    console.log("There was a problem with the fetch operation: ", error);
  }
}

function setupCards(data) {
  const cards = document.querySelectorAll(".card");
  const cardImages = document.querySelectorAll(".card-description img");
  const cardHeaders = document.querySelectorAll(".card-description h1");
  const cardParagraphs = document.querySelectorAll(".card-description p");
  const cardButtons = document.querySelectorAll(".card button");

  data.forEach((item, index) => {
    const card = cards[index];
    if (card) {
      setupCard(card, item, {
        image: cardImages[index],
        header: cardHeaders[index],
        paragraph: cardParagraphs[index],
        button: cardButtons[index]
      });
    }
  })
}

function setupCard(card, item, { image, header, paragraph, button }) {
  card.style.backgroundColor = item.color;
  if (image) {
    image.src = item.icon;
    image.alt = `${item.type} Icon`;
  }
  if (header) {
    header.textContent = item.type;
  }
  if (paragraph) {
    paragraph.textContent = item.description;
  }
  if (button) {
    button.style.color = item.color;
  }
}

fetchData();