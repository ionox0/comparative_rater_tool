"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getCheckoutTheme;
const themePrimitives_1 = require("./themePrimitives");
const customizations_1 = require("./customizations");
function getCheckoutTheme(mode) {
    return Object.assign(Object.assign({}, (0, themePrimitives_1.getDesignTokens)(mode)), { components: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, customizations_1.inputsCustomizations), customizations_1.dataDisplayCustomizations), customizations_1.feedbackCustomizations), customizations_1.navigationCustomizations), customizations_1.surfacesCustomizations) });
}
