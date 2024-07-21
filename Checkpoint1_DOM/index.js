document.addEventListener("DOMContentLoaded", () => {
  const updateTotalPrice = () => {
    let totalPrice = 0;
    document.querySelectorAll(".card").forEach((card) => {
      const unitPrice = parseFloat(
        card.querySelector(".unit-price").textContent.replace("$", "").trim()
      );
      const quantity = parseInt(
        card.querySelector(".quantity").textContent.trim()
      );
      totalPrice += unitPrice * quantity;
    });
    document.querySelector(".total").textContent = `${totalPrice.toFixed(2)} $`;
  };

  document.querySelectorAll(".fa-plus-circle").forEach((button) => {
    button.addEventListener("click", (event) => {
      const quantitySpan = event.target.nextElementSibling;
      let quantity = parseInt(quantitySpan.textContent);
      quantitySpan.textContent = quantity + 1;
      updateTotalPrice();
    });
  });

  document.querySelectorAll(".fa-minus-circle").forEach((button) => {
    button.addEventListener("click", (event) => {
      const quantitySpan = event.target.previousElementSibling;
      let quantity = parseInt(quantitySpan.textContent);
      if (quantity > 0) {
        quantitySpan.textContent = quantity - 1;
        updateTotalPrice();
      }
    });
  });

  document.querySelectorAll(".fa-trash-alt").forEach((button) => {
    button.addEventListener("click", (event) => {
      const card = event.target.closest(".card-whole");
      card.parentElement.removeChild(card);
      updateTotalPrice();
    });
  });

  document.querySelectorAll(".fa-heart").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.target.classList.toggle("liked");
    });
  });
});
