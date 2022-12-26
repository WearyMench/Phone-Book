/**
 * Practice.
 */

//Array with cantact details.
let registro = [];

//Function to add the data of the contacts to the array.
const saveContact = (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let tel = document.getElementById("tel").value;
  let message = document.getElementById("message");

  if (name === "") {
    message.textContent = "Missing data to register the contact";
    setTimeout(() => {
      message.textContent = "";
    }, 5000);
  } else if (tel === "") {
    message.textContent = "Missing data to register the contact";
    setTimeout(() => {
      message.textContent = "";
    }, 5000);
  } else {
    registro.push([name, tel]);
    message.textContent = `The contact ${name} has been added with the number ${tel}`;
    setTimeout(() => {
      message.textContent = "";
    }, 5000);
    print();
  }
  datos.reset();
};

//Submitting the form will activate the saveContact function.
let datos = document.getElementById("form");
datos.addEventListener("submit", saveContact);

let list = document.querySelector("#list");
//When the list is empty, a text will appear that says empty
if (list.innerHTML === "") {
  list.textContent = "(Empty)";
}

//display of the list of added contacts.
const print = () => {
  list.innerHTML = "";
  registro.forEach((e) => {
    let li = document.createElement("li");
    let contact = `${e[0]}  [${e[1]}]`;

    //adding a delete buttom
    let button = document.createElement("button");
    button.classList.add("delete");
    button.textContent = "x";

    li.appendChild(document.createTextNode(contact));
    li.appendChild(button);
    list.appendChild(li);

    let index = registro.indexOf(e);
    button.addEventListener("click", () => remove(index));
  });
};

const remove = (index) => {
  registro.splice(index, 1);
  print();
  //When the list is empty, a text will appear that says empty
  if (list.innerHTML === "") {
    list.textContent = "(Empty)";
  }
};
