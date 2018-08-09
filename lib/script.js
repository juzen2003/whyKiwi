// all 6 buttons
let convenientButton = document.getElementById('convenient-button');
let sparksButton = document.getElementById('sparks-creativity-button');
let educationalButton = document.getElementById('educational-button');
let familyButton = document.getElementById('family-time-button');
let funButton = document.getElementById('fun-button');
let alternativeButton = document.getElementById('alternative-button');

// text area
let textArea = document.getElementById('text-field');
let defaultText = textArea.innerHTML; // convenientText

// img
let imgHolder = document.getElementById('img-holder');
let textImg = document.getElementById('article-img');
let defaultImg = textImg.src;
let defaultId = textImg.id;


// actions
function updateText(text) {
  textArea.innerHTML = text;
}
function updateImg(img, id="") {
  imgHolder.style.display = "";
  textImg.id = id === "" ? defaultId : id;
  textImg.src = img;
}
function removeImg() {
  imgHolder.style.display = "none";
}

// click action
convenientButton.addEventListener('click', () => {
  updateText(defaultText);
  updateImg(defaultImg);
});

sparksButton.addEventListener('click', () => {
  updateText(sparksText);
  removeImg();
});

educationalButton.addEventListener('click', () => {
  updateText(educationalText);
  updateImg("http://icdn.kiwicrate.com/site/home/why-kiwico-educational.jpg", "edu-img");
});

familyButton.addEventListener('click', () => {
  updateText(familyText);
  removeImg();
});

funButton.addEventListener('click', () => {
  updateText(funText);
  removeImg();
});

alternativeButton.addEventListener('click', () => {
  updateText(alternativeText);
  removeImg();
});

var sparksText = "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ligula cursus nulla pellentesque rutrum. Aliquam mattis fermentum quam, vel auctor metus pulvinar et.\"";
var educationalText = "\"My daughter is a <em>sponge for STEM projects</em> ​and this is the perfect solution to constantly searching for new things to keep her engaged.\"";
var familyText = "\"<em>Mauris sodales ex vel ornare fermentum.</em> Nulla luctus erat magna, eget efficitur mauris iaculis sed. Donec suscipit condimentum turpis, eget consectetur ipsum congue a. Suspendisse faucibus tincidunt nisl at porta. Aenean tempus <em>rutrum ligula eu scelerisque.</em>​ Cras elementum nisi vel felis lacinia, et volutpat leo scelerisque.\"";
var funText = "\"Maecenas aliquam pellentesque velit et egestas. Aliquam ac tortor et nibh pretium pharetra!\"";
var alternativeText = "\"Nam sodales nunc non gravida ornare. Sed in tincidunt urna. Nam fringilla, purus non commodo pretium, ex neque interdum lectus, ac egestas magna nisl sed arcu. Morbi elit enim, accumsan sed nunc non.\"\nMattis mollis nisl";
