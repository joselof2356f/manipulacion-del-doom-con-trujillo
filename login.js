
const btnLogin  = document.getElementById("btnLogin");
const resultado = document.getElementById("resultado");

btnLogin.addEventListener("click", () => {
  const correo = document.getElementById("correo").value.trim();
  const pass   = document.getElementById("contraseña").value.trim();

  if (!correo || !pass) {
    resultado.textContent = "⚠️ Completa todos los campos.";
    resultado.style.color = "red";
    return;
  }

  
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  if (usuarios.length === 0) {
    resultado.textContent = "⚠️ No hay usuarios registrados aún.";
    resultado.style.color = "orange";
    return;
  }

  
  const encontrado = usuarios.find(
    (u) => u.correo === correo && u.pass === pass
  );

  if (encontrado) {
    resultado.textContent = `✅ Bienvenido, ${encontrado.nombre}!`;
    resultado.style.color = "lightgreen";

 
    localStorage.setItem("sesionActiva", JSON.stringify(encontrado));

  
    setTimeout(() => {
      window.location.href = "manipulacion-del-doom-con-trujillo/canciones.html";
    }, 1500);

  } else {
    resultado.textContent = "❌ Correo o contraseña incorrectos.";
    resultado.style.color = "red";
  }
});