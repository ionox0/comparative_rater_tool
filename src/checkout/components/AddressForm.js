"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AddressForm;
const React = __importStar(require("react"));
const FormLabel_1 = __importDefault(require("@mui/material/FormLabel"));
const Grid2_1 = __importDefault(require("@mui/material/Grid2"));
const OutlinedInput_1 = __importDefault(require("@mui/material/OutlinedInput"));
const system_1 = require("@mui/system");
const FormGrid = (0, system_1.styled)(Grid2_1.default)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));
function AddressForm() {
    return (React.createElement(Grid2_1.default, { container: true, spacing: 3 },
        React.createElement(FormGrid, { size: { xs: 12 } },
            React.createElement(FormLabel_1.default, { htmlFor: "business-name", required: true }, "Business name"),
            React.createElement(OutlinedInput_1.default, { id: "business-name", name: "business-name", type: "name", placeholder: "Apple Inc", autoComplete: "business name", required: true, size: "small" })),
        React.createElement(FormGrid, { size: { xs: 6 } },
            React.createElement(FormLabel_1.default, { htmlFor: "city", required: true }, "City"),
            React.createElement(OutlinedInput_1.default, { id: "city", name: "city", type: "city", placeholder: "New York", autoComplete: "City", required: true, size: "small" })),
        React.createElement(FormGrid, { size: { xs: 6 } },
            React.createElement(FormLabel_1.default, { htmlFor: "state", required: true }, "State"),
            React.createElement(OutlinedInput_1.default, { id: "state", name: "state", type: "state", placeholder: "NY", autoComplete: "State", required: true, size: "small" })),
        React.createElement(FormGrid, { size: { xs: 6 } },
            React.createElement(FormLabel_1.default, { htmlFor: "zip", required: true }, "Zip / Postal code"),
            React.createElement(OutlinedInput_1.default, { id: "zip", name: "zip", type: "zip", placeholder: "12345", autoComplete: "shipping postal-code", required: true, size: "small" })),
        React.createElement(FormGrid, { size: { xs: 6 } },
            React.createElement(FormLabel_1.default, { htmlFor: "country", required: true }, "Country"),
            React.createElement(OutlinedInput_1.default, { id: "country", name: "country", type: "country", placeholder: "United States", autoComplete: "shipping country", required: true, size: "small" }))));
}
