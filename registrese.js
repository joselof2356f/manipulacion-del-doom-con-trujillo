
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


const btnCrear    = document.getElementById("crearCuenta");

const campoNombre = document.getElementById("Nombre");
const campoLugar  = document.getElementById("lugar");
const campoEdad   = document.getElementById("edad");
const campoCorreo = document.getElementById("correo");
const campoPass   = document.getElementById("contraseña");

const lista     = document.getElementById("listaUsuarios");
const resultado = document.getElementById("resultado");






btnCrear.addEventListener("click", () => {
  const nombre = campoNombre.value.trim();
  const pais   = campoLugar.value;
  const edad   = campoEdad.value.trim();
  const correo = campoCorreo.value.trim();
  const pass   = campoPass.value.trim();

  if (!nombre || pais === "seleccionar" || !edad || !correo || !pass) {
    resultado.textContent = " Por favor completa todos los campos.";
    resultado.style.color = "red";
    return;
  }


  const yaExiste = usuarios.find((u) => u.correo === correo);
  if (yaExiste) {
    resultado.textContent = " Ya existe una cuenta con ese correo.";
    resultado.style.color = "orange";
    return;
  }


  const nuevoUsuario = { nombre, pais, edad, correo, pass };
  usuarios.push(nuevoUsuario);

  
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  resultado.textContent = ` ¡Cuenta creada para ${nombre}!`;
  resultado.style.color = "lightgreen";

  mostrarUsuarios(usuarios);

  campoNombre.value = "";
  campoLugar.value  = "seleccionar";
  campoEdad.value   = "";
  campoCorreo.value = "";
  campoPass.value   = "";
});
