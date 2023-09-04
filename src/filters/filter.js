export class SelectFilter {
  constructor(props) {
    this.filterBlock = document.getElementById(props.id);
    props.options.forEach((option) => {
      this.filterBlock.insertAdjacentElement('beforeend', this.getOptionElement(option))
    })
  }

  getOptionElement(option) {
    const optionElement = document.createElement('option')
    optionElement.setAttribute('value', option.value)
    optionElement.innerText = option.label;

    return optionElement;
  }

  get value() {
    return this.filterBlock.value;
  }

  onChange(fn) {
    this.filterBlock.addEventListener('change', fn)
  }
}