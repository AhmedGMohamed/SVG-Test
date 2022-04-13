document.addEventListener('DOMContentLoaded', (): void => {
  const inputElement = <HTMLInputElement>document.querySelector('#svg-number');
  const svg = <HTMLElement>document.querySelector('#svg');
  inputElement.addEventListener('input', (): void => {
    const inputValue = inputElement.value;
    setValue(svg, inputValue);
  })
})

function setValue(element: HTMLElement, value: string): void {
  element.setAttribute('viewBox', `0 0 1370 ${value}`);
}