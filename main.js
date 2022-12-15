/**
 * Practice.
 */

//Array with cantact details.
let registro = [];

//Function to add the data of the contacts to the array.
const agregarContacto = (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let tel = document.getElementById("tel").value;
  let mensaje = document.getElementById("mensaje");

  if (name === "") {
    mensaje.textContent = "Missing data to register the contact";
    setTimeout(() => {
      mensaje.textContent = "";
    }, 5000);
  } else if (tel === "") {
    mensaje.textContent = "Missing data to register the contact";
    setTimeout(() => {
      mensaje.textContent = "";
    }, 5000);
  } else {
    registro.push([name, tel]);
    mensaje.textContent = `The contact ${name} has been added with the number ${tel}`;
    setTimeout(() => {
      mensaje.textContent = "";
    }, 5000);
    registrar();
  }
  datos.reset();
};

//Submitting the form will activate the agregarContacto function.
let datos = document.getElementById("form");
datos.addEventListener("submit", agregarContacto);

//When the list is empty, a text will appear that says empty
let list = document.querySelector("#list");
if (list.innerHTML === "") {
  list.textContent = "(Empty)";
}

//display of the list of added contacts.
const registrar = () => {
  list.innerHTML = "";
  registro.forEach((e) => {
    let li = document.createElement("li");
    li.textContent = `${e[0]}  [ ${e[1]} ]`;
    list.appendChild(li);
  });
};

// delete contact

document.getElementById("delete").addEventListener("click", () => {
  let position = document.getElementById("ubic").value;
  document.getElementById("text").textContent =
    "Select the position number of the contact you want to delete and press the delete button again";
  if (position === "") {
    document.getElementById("edit").classList.toggle("visible");
  } else if (position < 1) {
    document.getElementById("edit").classList.toggle("visible");
  } else {
    registro.splice(position - 1, 1);
    registrar();
    document.getElementById("ubic").value = "";
    document.getElementById("edit").classList.toggle("visible");
  }
  //To show the word "empty" in case you delete all the elements.
  if (list.innerHTML === "") {
    list.textContent = "(Empty)";
  }
});

// const editarContacto = () => {
//   document.getElementById("text").textContent =
//     "To edit the contact, first select the contact's position number and then press edit again to enter the new data.";
//   let posicion = document.getElementById("ubic").value;

//   let edit = document.getElementById("edit");

//   if (posicion === "") {
//     edit.classList.toggle("visible");
//   } else if (posicion < 1) {
//     edit.classList.toggle("visible");
//   } else {
//     registro.splice(posicion - 1, 1);
//     registrar();
//     document.getElementById("ubic").value = "";
//     edit.classList.toggle("visible");
//   }
// };

// document.getElementById("editar").addEventListener("click", editarContacto);
