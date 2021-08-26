const addForm = document.querySelector('.form--add')


const addElement = (e, node, txt, attr, value) => {
  e.preventDefault();
  const element = document.createElement(node);
  const text = document.createTextNode(txt);
  element.appendChild(text);
  element.setAttribute(attr, value);
  document.querySelector('.content').appendChild(element);
}

const searchElements = (event) => {
  event.preventDefault();
  const infoElement = document.querySelector('.result');
  console.log(searchForm.elements['searching'].value)
}

const showInfo = () => {}



//listeners
addForm.addEventListener('submit', (e) => addElement(
  e,
  addForm.elements.node.value,
  addForm.elements.text.value,
  addForm.elements.attr.value,
  addForm.elements.value.value
))

const searchForm = document.querySelector('.form--search');
searchForm.addEventListener('submit', searchElements)