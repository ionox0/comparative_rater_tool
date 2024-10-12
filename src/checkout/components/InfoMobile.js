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
exports.default = InfoMobile;
const React = __importStar(require("react"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const Drawer_1 = __importDefault(require("@mui/material/Drawer"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const Close_1 = __importDefault(require("@mui/icons-material/Close"));
const ExpandMoreRounded_1 = __importDefault(require("@mui/icons-material/ExpandMoreRounded"));
const Info_1 = __importDefault(require("./Info"));
function InfoMobile({ totalPrice }) {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const DrawerList = (React.createElement(Box_1.default, { sx: { width: 'auto', px: 3, pb: 3, pt: 8 }, role: "presentation" },
        React.createElement(IconButton_1.default, { onClick: toggleDrawer(false), sx: { position: 'absolute', right: 8, top: 8 } },
            React.createElement(Close_1.default, null)),
        React.createElement(Info_1.default, { totalPrice: totalPrice })));
    return (React.createElement("div", null,
        React.createElement(Button_1.default, { variant: "text", endIcon: React.createElement(ExpandMoreRounded_1.default, null), onClick: toggleDrawer(true) }, "View details"),
        React.createElement(Drawer_1.default, { open: open, anchor: "top", onClose: toggleDrawer(false) }, DrawerList)));
}
