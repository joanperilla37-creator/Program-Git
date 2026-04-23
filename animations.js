// Animación al enfocar los inputs
const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
  input.addEventListener("focus", () => {
    input.style.transition = "0.3s";
    input.style.boxShadow = "0 0 8px rgba(0, 150, 255, 0.6)";
    input.style.transform = "scale(1.05)";
  });

  input.addEventListener("blur", () => {
    input.style.boxShadow = "none";
    input.style.transform = "scale(1)";
  });
});

// Animación del botón al pasar el mouse
const button = document.getElementById("loginBtn");

button.addEventListener("mouseover", () => {
  button.style.transition = "0.3s";
  button.style.backgroundColor = "#007BFF";
  button.style.color = "#fff";
  button.style.transform = "scale(1.1)";
});

button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "";
  button.style.color = "";
  button.style.transform = "scale(1)";
});

// Animación de entrada para el contenedor
const container = document.querySelector(".login-container");
window.addEventListener("load", () => {
  container.style.opacity = 0;
  container.style.transform = "translateY(-50px)";
  container.style.transition = "all 0.8s ease";

  setTimeout(() => {
    container.style.opacity = 1;
    container.style.transform = "translateY(0)";
  }, 100);
});

// Animación de la ilustración (efecto flotante)
const illustration = document.querySelector(".illustration img");

function floatAnimation() {
  illustration.animate(
    [
      { transform: "translateY(0px)" },
      { transform: "translateY(-10px)" },
      { transform: "translateY(0px)" }
    ],
    {
      duration: 3000,
      iterations: Infinity
    }
  );
}

floatAnimation();