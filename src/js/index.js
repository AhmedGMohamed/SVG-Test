"use strict";
document.addEventListener('DOMContentLoaded', function () {
    var inputElement = document.querySelector('#svg-number');
    var svg = document.querySelector('#svg');
    inputElement.addEventListener('input', function () {
        var inputValue = inputElement.value;
        setValue(svg, inputValue);
    });
});
function setValue(element, value) {
    element.setAttribute('viewBox', "0 0 1370 ".concat(value));
}
