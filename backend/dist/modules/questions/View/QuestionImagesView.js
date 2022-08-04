"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  render(image) {
    return {
      id: image.id,
      url: `localhost:3333/questions/images/${image.path}`
    };
  },

  renderMany(image) {
    return image.map(image => this.render(image));
  }

};
exports.default = _default;