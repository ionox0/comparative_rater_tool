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
exports.default = Info;
const React = __importStar(require("react"));
const List_1 = __importDefault(require("@mui/material/List"));
const ListItem_1 = __importDefault(require("@mui/material/ListItem"));
const ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const products = [
    {
        name: 'Professional plan',
        desc: 'Monthly subscription',
        price: '$15.00',
    },
    {
        name: 'Dedicated support',
        desc: 'Included in the Professional plan',
        price: 'Free',
    },
    {
        name: 'Hardware',
        desc: 'Devices needed for development',
        price: '$69.99',
    },
    {
        name: 'Landing page template',
        desc: 'License',
        price: '$49.99',
    },
];
function Info({ totalPrice }) {
    return (React.createElement(React.Fragment, null,
        React.createElement(Typography_1.default, { variant: "subtitle2", sx: { color: 'text.secondary' } }, "Total"),
        React.createElement(Typography_1.default, { variant: "h4", gutterBottom: true }, totalPrice),
        React.createElement(List_1.default, { disablePadding: true }, products.map((product) => (React.createElement(ListItem_1.default, { key: product.name, sx: { py: 1, px: 0 } },
            React.createElement(ListItemText_1.default, { sx: { mr: 2 }, primary: product.name, secondary: product.desc }),
            React.createElement(Typography_1.default, { variant: "body1", sx: { fontWeight: 'medium' } }, product.price)))))));
}
