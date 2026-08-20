const button = document.querySelector("#demoButton");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = "It works! Now change something.";
});
