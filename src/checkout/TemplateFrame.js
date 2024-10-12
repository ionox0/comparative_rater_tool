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
exports.default = TemplateFrame;
const React = __importStar(require("react"));
const styles_1 = require("@mui/material/styles");
const Select_1 = __importDefault(require("@mui/material/Select"));
const MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
const FormControl_1 = __importDefault(require("@mui/material/FormControl"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const AppBar_1 = __importDefault(require("@mui/material/AppBar"));
const Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
const ArrowBackRounded_1 = __importDefault(require("@mui/icons-material/ArrowBackRounded"));
const ToggleColorMode_1 = __importDefault(require("./components/ToggleColorMode"));
const getCheckoutTheme_1 = __importDefault(require("./theme/getCheckoutTheme"));
const StyledAppBar = (0, styles_1.styled)(AppBar_1.default)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderBottom: '1px solid',
    borderColor: theme.palette.divider,
    backgroundColor: theme.palette.background.paper,
    boxShadow: 'none',
    backgroundImage: 'none',
    zIndex: theme.zIndex.drawer + 1,
    flex: '0 0 auto',
}));
function TemplateFrame({ showCustomTheme, toggleCustomTheme, mode, toggleColorMode, children, }) {
    const handleChange = (event) => {
        toggleCustomTheme(event.target.value === 'custom');
    };
    const checkoutTheme = (0, styles_1.createTheme)((0, getCheckoutTheme_1.default)(mode));
    return (React.createElement(styles_1.ThemeProvider, { theme: checkoutTheme },
        React.createElement(Box_1.default, { sx: { height: '100dvh', display: 'flex', flexDirection: 'column' } },
            React.createElement(StyledAppBar, null,
                React.createElement(Toolbar_1.default, { variant: "dense", disableGutters: true, sx: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        p: '8px 12px',
                    } },
                    React.createElement(Button_1.default, { variant: "text", size: "small", "aria-label": "Back to templates", startIcon: React.createElement(ArrowBackRounded_1.default, null), component: "a", href: "/material-ui/getting-started/templates/", sx: { display: { xs: 'none', sm: 'flex' } } }, "Back to templates"),
                    React.createElement(IconButton_1.default, { size: "small", "aria-label": "Back to templates", component: "a", href: "/material-ui/getting-started/templates/", sx: { display: { xs: 'auto', sm: 'none' } } },
                        React.createElement(ArrowBackRounded_1.default, null)),
                    React.createElement(Box_1.default, { sx: { display: 'flex', gap: 1 } },
                        React.createElement(FormControl_1.default, { variant: "outlined", sx: { minWidth: 180 } },
                            React.createElement(Select_1.default, { size: "small", labelId: "theme-select-label", id: "theme-select", value: showCustomTheme ? 'custom' : 'material', onChange: handleChange, label: "Design Language" },
                                React.createElement(MenuItem_1.default, { value: "custom" }, "Custom Theme"),
                                React.createElement(MenuItem_1.default, { value: "material" }, "Material Design 2"))),
                        React.createElement(ToggleColorMode_1.default, { "data-screenshot": "toggle-mode", mode: mode, toggleColorMode: toggleColorMode })))),
            React.createElement(Box_1.default, { sx: { flex: '1 1', overflow: 'auto' } }, children))));
}
