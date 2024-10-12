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
exports.default = Review;
const React = __importStar(require("react"));
const Divider_1 = __importDefault(require("@mui/material/Divider"));
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const List_1 = __importDefault(require("@mui/material/List"));
const ListItem_1 = __importDefault(require("@mui/material/ListItem"));
const ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
const Stack_1 = __importDefault(require("@mui/material/Stack"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
    { name: 'Card type:', detail: 'Visa' },
    { name: 'Card holder:', detail: 'Mr. John Smith' },
    { name: 'Card number:', detail: 'xxxx-xxxx-xxxx-1234' },
    { name: 'Expiry date:', detail: '04/2024' },
];
function Review() {
    return (React.createElement(Stack_1.default, { spacing: 2 },
        React.createElement(List_1.default, { disablePadding: true },
            React.createElement(ListItem_1.default, { sx: { py: 1, px: 0 } },
                React.createElement(ListItemText_1.default, { primary: "Products", secondary: "4 selected" }),
                React.createElement(Typography_1.default, { variant: "body2" }, "$134.98")),
            React.createElement(ListItem_1.default, { sx: { py: 1, px: 0 } },
                React.createElement(ListItemText_1.default, { primary: "Shipping", secondary: "Plus taxes" }),
                React.createElement(Typography_1.default, { variant: "body2" }, "$9.99")),
            React.createElement(ListItem_1.default, { sx: { py: 1, px: 0 } },
                React.createElement(ListItemText_1.default, { primary: "Total" }),
                React.createElement(Typography_1.default, { variant: "subtitle1", sx: { fontWeight: 700 } }, "$144.97"))),
        React.createElement(Divider_1.default, null),
        React.createElement(Stack_1.default, { direction: "column", divider: React.createElement(Divider_1.default, { flexItem: true }), spacing: 2, sx: { my: 2 } },
            React.createElement("div", null,
                React.createElement(Typography_1.default, { variant: "subtitle2", gutterBottom: true }, "Shipment details"),
                React.createElement(Typography_1.default, { gutterBottom: true }, "John Smith"),
                React.createElement(Typography_1.default, { gutterBottom: true, sx: { color: 'text.secondary' } }, addresses.join(', '))),
            React.createElement("div", null,
                React.createElement(Typography_1.default, { variant: "subtitle2", gutterBottom: true }, "Payment details"),
                React.createElement(Grid_1.default, { container: true }, payments.map((payment) => (React.createElement(React.Fragment, { key: payment.name },
                    React.createElement(Stack_1.default, { direction: "row", spacing: 1, useFlexGap: true, sx: { width: '100%', mb: 1 } },
                        React.createElement(Typography_1.default, { variant: "body1", sx: { color: 'text.secondary' } }, payment.name),
                        React.createElement(Typography_1.default, { variant: "body2" }, payment.detail))))))))));
}
