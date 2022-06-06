/**
 *
 * # DileFormMixin
 *
 * Mixin to apply functionality to form components
 *
 */

export const DileFormMixin = (superclass) => class extends superclass {


  constructor() {
    super();
    this.firstValue = null;
  }

  firstUpdated() {
    super.firstUpdated();
    this.firstValue = this.getData();
  }

  getData() {
    let data = {};
    this.allNodeElements.forEach(node => {
      data[node.getAttribute('name')] = node.value;
    });
    return data;
  }

  setData(data) {
    this.allNodeElements.forEach(node => {
      if(data[node.getAttribute('name')]) {
        if (typeof node.set === "function") {
          node.set(data[node.getAttribute('name')]);
        } else {
          node.value = data[node.getAttribute('name')];
        }

      }
    });
  }

  clearData() {
    this.allNodeElements.forEach(node => {
      if (typeof node.clear === "function") {
        node.clear();
      } else {
        node.value = '';
      }
    });
  }

  get allNodeElements() {
    return this.shadowRoot.querySelectorAll('[name]');
  }

  getNodeElement(name) {
    return this.shadowRoot.querySelector('[name="' + name + '"]');
  }

  resetData() {
    this.setData(this.firstValue);
  }

  resetField(name) {
    if(this.firstValue.hasOwnProperty(name)) {
      let value = this.firstValue[name];
      let node = this.getNodeElement(name);
      node.value = value;
    }
  }
}