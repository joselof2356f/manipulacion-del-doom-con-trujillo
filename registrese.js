// ── 1. ARREGLO EN MEMORIA (carga lo guardado) ──────────────────
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// ── 2. SELECTORES DEL DOM ─────────────────────────────────────
const btnCrear    = document.getElementById("crearCuenta");

const campoNombre = document.getElementById("Nombre");
const campoLugar  = document.getElementById("lugar");
const campoEdad   = document.getElementById("edad");
const campoCorreo = document.getElementById("correo");
const campoPass   = document.getElementById("contraseña");

const lista     = document.getElementById("listaUsuarios");
const resultado = document.getElementById("resultado");

// ── 3. FUNCIÓN: mostrar lista de usuarios ─────────────────────



// ── 4. EVENTO: Crear cuenta ───────────────────────────────────
btnCrear.addEventListener("click", () => {
  const nombre = campoNombre.value.trim();
  const pais   = campoLugar.value;
  const edad   = campoEdad.value.trim();
  const correo = campoCorreo.value.trim();
  const pass   = campoPass.value.trim();

  if (!nombre || pais === "seleccionar" || !edad || !correo || !pass) {
    resultado.textContent = "⚠️ Por favor completa todos los campos.";
    resultado.style.color = "red";
    return;
  }

  // Verificar si el correo ya existe
  const yaExiste = usuarios.find((u) => u.correo === correo);
  if (yaExiste) {
    resultado.textContent = "⚠️ Ya existe una cuenta con ese correo.";
    resultado.style.color = "orange";
    return;
  }

  // Crear objeto y guardarlo
  const nuevoUsuario = { nombre, pais, edad, correo, pass };
  usuarios.push(nuevoUsuario);

  // Guardar en localStorage para el login
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  resultado.textContent = `✅ ¡Cuenta creada para ${nombre}!`;
  resultado.style.color = "lightgreen";

  mostrarUsuarios(usuarios);

  // Limpiar formulario
  campoNombre.value = "";
  campoLugar.value  = "seleccionar";
  campoEdad.value   = "";
  campoCorreo.value = "";
  campoPass.value   = "";
});
