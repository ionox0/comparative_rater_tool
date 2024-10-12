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
exports.default = Checkout;
const React = __importStar(require("react"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const Card_1 = __importDefault(require("@mui/material/Card"));
const CardContent_1 = __importDefault(require("@mui/material/CardContent"));
const CssBaseline_1 = __importDefault(require("@mui/material/CssBaseline"));
const Grid2_1 = __importDefault(require("@mui/material/Grid2"));
const Stack_1 = __importDefault(require("@mui/material/Stack"));
const Step_1 = __importDefault(require("@mui/material/Step"));
const StepLabel_1 = __importDefault(require("@mui/material/StepLabel"));
const Stepper_1 = __importDefault(require("@mui/material/Stepper"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const styles_1 = require("@mui/material/styles");
const ChevronLeftRounded_1 = __importDefault(require("@mui/icons-material/ChevronLeftRounded"));
const ChevronRightRounded_1 = __importDefault(require("@mui/icons-material/ChevronRightRounded"));
const AddressForm_1 = __importDefault(require("./components/AddressForm"));
const getCheckoutTheme_1 = __importDefault(require("./theme/getCheckoutTheme"));
const PaymentForm_1 = __importDefault(require("./components/PaymentForm"));
const Review_1 = __importDefault(require("./components/Review"));
const TemplateFrame_1 = __importDefault(require("./TemplateFrame"));
const steps = ['Shipping address', 'Payment details', 'Review your order'];
function getStepContent(step) {
    switch (step) {
        case 0:
            return React.createElement(AddressForm_1.default, null);
        case 1:
            return React.createElement(PaymentForm_1.default, null);
        case 2:
            return React.createElement(Review_1.default, null);
        default:
            throw new Error('Unknown step');
    }
}
function Checkout() {
    const [mode, setMode] = React.useState('light');
    const [showCustomTheme, setShowCustomTheme] = React.useState(true);
    const checkoutTheme = (0, styles_1.createTheme)((0, getCheckoutTheme_1.default)(mode));
    const defaultTheme = (0, styles_1.createTheme)({ palette: { mode } });
    const [activeStep, setActiveStep] = React.useState(0);
    // This code only runs on the client side, to determine the system color preference
    React.useEffect(() => {
        // Check if there is a preferred mode in localStorage
        const savedMode = localStorage.getItem('themeMode');
        if (savedMode) {
            setMode(savedMode);
        }
        else {
            // If no preference is found, it uses system preference
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setMode(systemPrefersDark ? 'dark' : 'light');
        }
    }, []);
    const toggleColorMode = () => {
        const newMode = mode === 'dark' ? 'light' : 'dark';
        setMode(newMode);
        localStorage.setItem('themeMode', newMode); // Save the selected mode to localStorage
    };
    const toggleCustomTheme = () => {
        setShowCustomTheme((prev) => !prev);
    };
    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    return (React.createElement(TemplateFrame_1.default, { toggleCustomTheme: toggleCustomTheme, showCustomTheme: showCustomTheme, mode: mode, toggleColorMode: toggleColorMode },
        React.createElement(styles_1.ThemeProvider, { theme: showCustomTheme ? checkoutTheme : defaultTheme },
            React.createElement(CssBaseline_1.default, { enableColorScheme: true }),
            React.createElement(Grid2_1.default, { size: { sm: 12, md: 7, lg: 8 }, sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '100%',
                    width: '100%',
                    backgroundColor: { xs: 'transparent', sm: 'background.default' },
                    alignItems: 'start',
                    pt: { xs: 6, sm: 16 },
                    px: { xs: 2, sm: 10 },
                    gap: { xs: 4, md: 8 },
                } },
                React.createElement(Box_1.default, { sx: {
                        display: 'flex',
                        justifyContent: { sm: 'space-between', md: 'flex-end' },
                        alignItems: 'center',
                        width: '100%',
                        maxWidth: { sm: '100%', md: 600 },
                    } },
                    React.createElement(Box_1.default, { sx: {
                            display: { xs: 'none', md: 'flex' },
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                            flexGrow: 1,
                        } },
                        React.createElement(Stepper_1.default, { id: "desktop-stepper", activeStep: activeStep, sx: { width: '100%', height: 40 } }, steps.map((label) => (React.createElement(Step_1.default, { sx: { ':first-child': { pl: 0 }, ':last-child': { pr: 0 } }, key: label },
                            React.createElement(StepLabel_1.default, null, label))))))),
                React.createElement(Card_1.default, { sx: { display: { xs: 'flex', md: 'none' }, width: '100%' } },
                    React.createElement(CardContent_1.default, { sx: {
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        } },
                        React.createElement("div", null,
                            React.createElement(Typography_1.default, { variant: "subtitle2", gutterBottom: true }, "Selected products"),
                            React.createElement(Typography_1.default, { variant: "body1" }, activeStep >= 2 ? '$144.97' : '$134.98')))),
                React.createElement(Box_1.default, { sx: {
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                        width: '100%',
                        maxWidth: { sm: '100%', md: 600 },
                        maxHeight: '720px',
                        gap: { xs: 5, md: 'none' },
                    } },
                    React.createElement(Stepper_1.default, { id: "mobile-stepper", activeStep: activeStep, alternativeLabel: true, sx: { display: { sm: 'flex', md: 'none' } } }, steps.map((label) => (React.createElement(Step_1.default, { sx: {
                            ':first-child': { pl: 0 },
                            ':last-child': { pr: 0 },
                            '& .MuiStepConnector-root': { top: { xs: 6, sm: 12 } },
                        }, key: label },
                        React.createElement(StepLabel_1.default, { sx: { '.MuiStepLabel-labelContainer': { maxWidth: '70px' } } }, label))))),
                    activeStep === steps.length ? (React.createElement(Stack_1.default, { spacing: 2, useFlexGap: true },
                        React.createElement(Typography_1.default, { variant: "h1" }, "\uD83D\uDCE6"),
                        React.createElement(Typography_1.default, { variant: "h5" }, "Thank you for your order!"),
                        React.createElement(Typography_1.default, { variant: "body1", sx: { color: 'text.secondary' } },
                            "Your order number is",
                            React.createElement("strong", null, "\u00A0#140396"),
                            ". We have emailed your order confirmation and will update you once its shipped."),
                        React.createElement(Button_1.default, { variant: "contained", sx: { alignSelf: 'start', width: { xs: '100%', sm: 'auto' } } }, "Go to my orders"))) : (React.createElement(React.Fragment, null,
                        getStepContent(activeStep),
                        React.createElement(Box_1.default, { sx: [
                                {
                                    display: 'flex',
                                    flexDirection: { xs: 'column-reverse', sm: 'row' },
                                    alignItems: 'end',
                                    flexGrow: 1,
                                    gap: 1,
                                    pb: { xs: 12, sm: 0 },
                                    mt: { xs: 2, sm: 0 },
                                    mb: '60px',
                                },
                                activeStep !== 0
                                    ? { justifyContent: 'space-between' }
                                    : { justifyContent: 'flex-end' },
                            ] },
                            activeStep !== 0 && (React.createElement(Button_1.default, { startIcon: React.createElement(ChevronLeftRounded_1.default, null), onClick: handleBack, variant: "text", sx: { display: { xs: 'none', sm: 'flex' } } }, "Previous")),
                            activeStep !== 0 && (React.createElement(Button_1.default, { startIcon: React.createElement(ChevronLeftRounded_1.default, null), onClick: handleBack, variant: "outlined", fullWidth: true, sx: { display: { xs: 'flex', sm: 'none' } } }, "Previous")),
                            React.createElement(Button_1.default, { variant: "contained", endIcon: React.createElement(ChevronRightRounded_1.default, null), onClick: handleNext, sx: { width: { xs: '100%', sm: 'fit-content' } } }, activeStep === steps.length - 1 ? 'Get Results' : 'Next')))))))));
}
