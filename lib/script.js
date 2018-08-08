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

// actions
function updateText(text) {
  // console.log("click");
  textArea.innerHTML = text;
}

// click action
convenientButton.addEventListener('click', () => updateText(defaultText));
sparksButton.addEventListener('click', () => updateText(sparksText));
educationalButton.addEventListener('click', () => updateText(educationalText));
familyButton.addEventListener('click', () => updateText(familyText));
funButton.addEventListener('click', () => updateText(funText));
alternativeButton.addEventListener('click', () => updateText(alternativeText));

var sparksText = "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ligula cursus nulla pellentesque rutrum. Aliquam mattis fermentum quam, vel auctor metus pulvinar et.\"";
var educationalText = "\"My daughter is a <em>sponge for STEM projects</em> ​and this is the perfect solution to constantly searching for new things to keep her engaged.\"";
var familyText = "\"<em>Mauris sodales ex vel ornare fermentum.</em> Nulla luctus erat magna, eget efficitur mauris iaculis sed. Donec suscipit condimentum turpis, eget consectetur ipsum congue a. Suspendisse faucibus tincidunt nisl at porta. Aenean tempus <em>rutrum ligula eu scelerisque.</em>​ Cras elementum nisi vel felis lacinia, et volutpat leo scelerisque.\"";
var funText = "\"Maecenas aliquam pellentesque velit et egestas. Aliquam ac tortor et nibh pretium pharetra!\"";
var alternativeText = "\"Nam sodales nunc non gravida ornare. Sed in tincidunt urna. Nam fringilla, purus non commodo pretium, ex neque interdum lectus, ac egestas magna nisl sed arcu. Morbi elit enim, accumsan sed nunc non.\"\nMattis mollis nisl";
