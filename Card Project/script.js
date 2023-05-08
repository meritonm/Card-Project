const search = document.querySelector("#search");
console.log(search);
const contactsElements = document.querySelector(".all-products");

const firstProductTable = {
  src: "/images/table.jpeg",
  h3: "Classic Desk",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit recusandae eum odio et? Sunt, eligendi ducimus. Nesciunt placeat dolore facilis voluptatibus fuga ex quasi ab.",
  span: "Available in 5 different colors",
  p: 89.99,
  button: "customize",
  available: true,
};

const secondProductTable = {
  src: "/images/table1.jpeg",
  h3: "Standing Desk",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit recusandae eum odio et? Sunt, eligendi ducimus. Nesciunt placeat dolore facilis voluptatibus fuga ex quasi ab.",
  span: "Available in 5 different colors",
  p: 169.99,
  button: "customize",
  available: true,
};

const thirdProductTable = {
  src: "/images/images.jpeg",
  h3: "Classic Desk Room",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit recusandae eum odio et? Sunt, eligendi ducimus. Nesciunt placeat dolore facilis voluptatibus fuga ex quasi ab.",
  span: "Available in 5 different colors",
  p: 55.99,
  button: "customize",
  available: true,
};

const firstProductCharger = {
  src: "/images/charger.jpeg",
  h3: "Charger",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit recusandae eum odio et? Sunt, eligendi ducimus. Nesciunt placeat dolore facilis voluptatibus fuga ex quasi ab.",
  span: "Available in 5 different colors",
  p: 15.99,
  button: "customize",
  available: true,
};

const secondProductCharger = {
  src: "/images/charger2.jpeg",
  h3: "Triple Charger",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit recusandae eum odio et? Sunt, eligendi ducimus. Nesciunt placeat dolore facilis voluptatibus fuga ex quasi ab.",
  span: "Available in 5 different colors",
  p: 99.99,
  button: "customize",
  available: true,
};

const firstProductStand = {
  src: "/images/forphone.jpeg",
  h3: "Dual Dock",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit recusandae eum odio et? Sunt, eligendi ducimus. Nesciunt placeat dolore facilis voluptatibus fuga ex quasi ab.",
  span: "Available in 5 different colors",
  p: 1089.99,
  button: "customize",
  available: true,
};

const secondProductStand = {
  src: "/images/forphone2.jpeg",
  h3: "Iphone Dock",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit recusandae eum odio et? Sunt, eligendi ducimus. Nesciunt placeat dolore facilis voluptatibus fuga ex quasi ab.",
  span: "Available in 5 different colors",
  p: 189.99,
  button: "customize",
  available: true,
};

const firstProductHolder = {
  src: "/images/holder.jpeg",
  h3: "Larg Tray",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit recusandae eum odio et? Sunt, eligendi ducimus. Nesciunt placeat dolore facilis voluptatibus fuga ex quasi ab.",
  span: "Available in 5 different colors",
  p: 29.99,
  button: "customize",
  available: true,
};

const secondProductHolder = {
  src: "/images/holder2.jpeg",
  h3: "Pen Tray",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit recusandae eum odio et? Sunt, eligendi ducimus. Nesciunt placeat dolore facilis voluptatibus fuga ex quasi ab.",
  span: "Available in 5 different colors",
  p: 49.99,
  button: "customize",
  available: true,
};

const thirdProductHolder = {
  src: "/images/holder3.jpeg",
  h3: "Cubic Pot",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit recusandae eum odio et? Sunt, eligendi ducimus. Nesciunt placeat dolore facilis voluptatibus fuga ex quasi ab.",
  span: "Available in 5 different colors",
  p: 59.99,
  button: "customize",
  available: false,
};

const sceleton = (src, h3, desc, span, p, button) => {
  let outofstock = "/images/outofstock.jpg";
  /* <img src="${items.available ? src : `${outofstock}`}" alt="">*/

  return `
  <div class = "items" >
  <a href = "">
  <img src="${src}" alt="">

  </a>
  <h3>${h3}</h3>
  <span>${desc}</span>
  <p>${span}</p>
  <p>${p} €</p>
  <button>${button}</button>
  
  </div>`;
};

const renderContacts = (products) => {
  products.forEach(({ src, h3, desc, span, p, button }) => {
    contactsElements.innerHTML += sceleton(src, h3, desc, span, p, button);
  });
};

const products = [
  firstProductTable,
  secondProductTable,
  thirdProductTable,
  firstProductCharger,
  secondProductCharger,
  firstProductStand,
  secondProductStand,
  firstProductHolder,
  secondProductHolder,
  thirdProductHolder,
];
renderContacts(products);

const checkContaines = (name, value) => {
  return name.toLowerCase().startsWith(value);
};

const checkIncludes = (name, value) => {
  return name.toLowerCase().includes(value);
};

const renderSearchedElements = (products) => {
  contacts.forEach(({ src, h3, desc, span, p, button }) => {
    let value = search.value;
    let h3Condition = checkContaines(h3, value) || checkIncludes(h3, value);
    let descCondition =
      checkContaines(desc, value) || checkIncludes(desc, value);

    let matched = h3Condition || descCondition;

    matched
      ? (contactsElements.innerHTML += sceleton(src, h3, desc, span, p, button))
      : "";
  });
};

search.addEventListener("input", () => {
  contactsElements.innerHTML = "";
  search === "" ? renderContacts(products) : renderSearchedElements(products);
});

/* OUT OF STOCK */
// .unavailable {
// filter: grayscale(1);
// opacity: 0.5;
// }

///////////////////////////////////////////////
/* Search */

///////////////////////////////////////////////
/* Range */

// productItems.sort((a, b) => a.p - b.p);
// console.log(productItems);

const range = document.querySelector("#range-number");
const rangeValue = document.querySelector(".range-value");

// range.addEventListener("change", (event) => {
//   rangeValue.innerHTML = `Value is: ${event.target.value}`;
// });

///////////////////////////////////////////////
/* FOOTER */
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
