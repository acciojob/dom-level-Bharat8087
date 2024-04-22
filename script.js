//your JS code here. If required.


var targetElement = document.getElementById('level');
var domLevel = 0;

while (targetElement !== null && targetElement.nodeName !== 'HTML') {
    targetElement = targetElement.parentNode;
    domLevel++;
}

alert('The level of the element is: ' + domLevel);
