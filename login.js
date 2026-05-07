// ── SELECTORES DEL DOM ────────────────────────────────────────
const btnLogin  = document.getElementById("btnLogin");
const resultado = document.getElementById("resultado");

// ── EVENTO: Iniciar sesión ────────────────────────────────────
btnLogin.addEventListener("click", () => {
  const correo = document.getElementById("correo").value.trim();
  const pass   = document.getElementById("contraseña").value.trim();

  if (!correo || !pass) {
    resultado.textContent = "⚠️ Completa todos los campos.";
    resultado.style.color = "red";
    return;
  }

  // Leer usuarios guardados desde el registro
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  if (usuarios.length === 0) {
    resultado.textContent = "⚠️ No hay usuarios registrados aún.";
    resultado.style.color = "orange";
    return;
  }

  // Buscar si coincide correo y contraseña
  const encontrado = usuarios.find(
    (u) => u.correo === correo && u.pass === pass
  );

  if (encontrado) {
    resultado.textContent = `✅ Bienvenido, ${encontrado.nombre}!`;
    resultado.style.color = "lightgreen";

    // Guardar sesión activa
    localStorage.setItem("sesionActiva", JSON.stringify(encontrado));

    // Redirigir al inicio después de 1.5s
    setTimeout(() => {
      window.location.href = "manipulacion-del-doom-con-trujillo/canciones.html";
    }, 1500);

  } else {
    resultado.textContent = "❌ Correo o contraseña incorrectos.";
    resultado.style.color = "red";
  }
});