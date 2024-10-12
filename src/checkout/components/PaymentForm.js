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
exports.default = PaymentForm;
const React = __importStar(require("react"));
const Alert_1 = __importDefault(require("@mui/material/Alert"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const Card_1 = __importDefault(require("@mui/material/Card"));
const CardActionArea_1 = __importDefault(require("@mui/material/CardActionArea"));
const CardContent_1 = __importDefault(require("@mui/material/CardContent"));
const Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
const FormControl_1 = __importDefault(require("@mui/material/FormControl"));
const FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
const FormLabel_1 = __importDefault(require("@mui/material/FormLabel"));
const OutlinedInput_1 = __importDefault(require("@mui/material/OutlinedInput"));
const RadioGroup_1 = __importDefault(require("@mui/material/RadioGroup"));
const Stack_1 = __importDefault(require("@mui/material/Stack"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const styles_1 = require("@mui/material/styles");
const AccountBalanceRounded_1 = __importDefault(require("@mui/icons-material/AccountBalanceRounded"));
const CreditCardRounded_1 = __importDefault(require("@mui/icons-material/CreditCardRounded"));
const SimCardRounded_1 = __importDefault(require("@mui/icons-material/SimCardRounded"));
const WarningRounded_1 = __importDefault(require("@mui/icons-material/WarningRounded"));
const Card = (0, styles_1.styled)(Card_1.default)(({ theme }) => ({
    border: '1px solid',
    borderColor: theme.palette.divider,
    width: '100%',
    '&:hover': Object.assign({ background: 'linear-gradient(to bottom right, hsla(210, 100%, 97%, 0.5) 25%, hsla(210, 100%, 90%, 0.3) 100%)', borderColor: 'primary.light', boxShadow: '0px 2px 8px hsla(0, 0%, 0%, 0.1)' }, theme.applyStyles('dark', {
        background: 'linear-gradient(to right bottom, hsla(210, 100%, 12%, 0.2) 25%, hsla(210, 100%, 16%, 0.2) 100%)',
        borderColor: 'primary.dark',
        boxShadow: '0px 1px 8px hsla(210, 100%, 25%, 0.5) ',
    })),
    [theme.breakpoints.up('md')]: {
        flexGrow: 1,
        maxWidth: `calc(50% - ${theme.spacing(1)})`,
    },
    variants: [
        {
            props: ({ selected }) => selected,
            style: Object.assign({ borderColor: theme.palette.primary.light }, theme.applyStyles('dark', {
                borderColor: theme.palette.primary.dark,
            })),
        },
    ],
}));
const PaymentContainer = (0, styles_1.styled)('div')(({ theme }) => (Object.assign({ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: 375, padding: theme.spacing(3), borderRadius: `calc(${theme.shape.borderRadius}px + 4px)`, border: '1px solid ', borderColor: theme.palette.divider, background: 'linear-gradient(to bottom right, hsla(220, 35%, 97%, 0.3) 25%, hsla(220, 20%, 88%, 0.3) 100%)', boxShadow: '0px 4px 8px hsla(210, 0%, 0%, 0.05)', [theme.breakpoints.up('xs')]: {
        height: 300,
    }, [theme.breakpoints.up('sm')]: {
        height: 350,
    } }, theme.applyStyles('dark', {
    background: 'linear-gradient(to right bottom, hsla(220, 30%, 6%, 0.2) 25%, hsla(220, 20%, 25%, 0.2) 100%)',
    boxShadow: '0px 4px 8px hsl(220, 35%, 0%)',
}))));
const FormGrid = (0, styles_1.styled)('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
}));
function PaymentForm() {
    const [paymentType, setPaymentType] = React.useState('creditCard');
    const [cardNumber, setCardNumber] = React.useState('');
    const [cvv, setCvv] = React.useState('');
    const [expirationDate, setExpirationDate] = React.useState('');
    const handlePaymentTypeChange = (event) => {
        setPaymentType(event.target.value);
    };
    const handleCardNumberChange = (event) => {
        const value = event.target.value.replace(/\D/g, '');
        const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
        if (value.length <= 16) {
            setCardNumber(formattedValue);
        }
    };
    const handleCvvChange = (event) => {
        const value = event.target.value.replace(/\D/g, '');
        if (value.length <= 3) {
            setCvv(value);
        }
    };
    const handleExpirationDateChange = (event) => {
        const value = event.target.value.replace(/\D/g, '');
        const formattedValue = value.replace(/(\d{2})(?=\d{2})/, '$1/');
        if (value.length <= 4) {
            setExpirationDate(formattedValue);
        }
    };
    return (React.createElement(Stack_1.default, { spacing: { xs: 3, sm: 6 }, useFlexGap: true },
        React.createElement(FormControl_1.default, { component: "fieldset", fullWidth: true },
            React.createElement(RadioGroup_1.default, { "aria-label": "Payment options", name: "paymentType", value: paymentType, onChange: handlePaymentTypeChange, sx: {
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2,
                } },
                React.createElement(Card, { selected: paymentType === 'creditCard' },
                    React.createElement(CardActionArea_1.default, { onClick: () => setPaymentType('creditCard'), sx: {
                            '.MuiCardActionArea-focusHighlight': {
                                backgroundColor: 'transparent',
                            },
                            '&:focus-visible': {
                                backgroundColor: 'action.hover',
                            },
                        } },
                        React.createElement(CardContent_1.default, { sx: { display: 'flex', alignItems: 'center', gap: 1 } },
                            React.createElement(CreditCardRounded_1.default, { fontSize: "small", sx: [
                                    (theme) => (Object.assign({ color: 'grey.400' }, theme.applyStyles('dark', {
                                        color: 'grey.600',
                                    }))),
                                    paymentType === 'creditCard' && {
                                        color: 'primary.main',
                                    },
                                ] }),
                            React.createElement(Typography_1.default, { sx: { fontWeight: 'medium' } }, "Card")))),
                React.createElement(Card, { selected: paymentType === 'bankTransfer' },
                    React.createElement(CardActionArea_1.default, { onClick: () => setPaymentType('bankTransfer'), sx: {
                            '.MuiCardActionArea-focusHighlight': {
                                backgroundColor: 'transparent',
                            },
                            '&:focus-visible': {
                                backgroundColor: 'action.hover',
                            },
                        } },
                        React.createElement(CardContent_1.default, { sx: { display: 'flex', alignItems: 'center', gap: 1 } },
                            React.createElement(AccountBalanceRounded_1.default, { fontSize: "small", sx: [
                                    (theme) => (Object.assign({ color: 'grey.400' }, theme.applyStyles('dark', {
                                        color: 'grey.600',
                                    }))),
                                    paymentType === 'bankTransfer' && {
                                        color: 'primary.main',
                                    },
                                ] }),
                            React.createElement(Typography_1.default, { sx: { fontWeight: 'medium' } }, "Bank account")))))),
        paymentType === 'creditCard' && (React.createElement(Box_1.default, { sx: { display: 'flex', flexDirection: 'column', gap: 2 } },
            React.createElement(PaymentContainer, null,
                React.createElement(Box_1.default, { sx: { display: 'flex', justifyContent: 'space-between' } },
                    React.createElement(Typography_1.default, { variant: "subtitle2" }, "Credit card"),
                    React.createElement(CreditCardRounded_1.default, { sx: { color: 'text.secondary' } })),
                React.createElement(SimCardRounded_1.default, { sx: {
                        fontSize: { xs: 48, sm: 56 },
                        transform: 'rotate(90deg)',
                        color: 'text.secondary',
                    } }),
                React.createElement(Box_1.default, { sx: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        gap: 2,
                    } },
                    React.createElement(FormGrid, { sx: { flexGrow: 1 } },
                        React.createElement(FormLabel_1.default, { htmlFor: "card-number", required: true }, "Card number"),
                        React.createElement(OutlinedInput_1.default, { id: "card-number", autoComplete: "card-number", placeholder: "0000 0000 0000 0000", required: true, size: "small", value: cardNumber, onChange: handleCardNumberChange })),
                    React.createElement(FormGrid, { sx: { maxWidth: '20%' } },
                        React.createElement(FormLabel_1.default, { htmlFor: "cvv", required: true }, "CVV"),
                        React.createElement(OutlinedInput_1.default, { id: "cvv", autoComplete: "CVV", placeholder: "123", required: true, size: "small", value: cvv, onChange: handleCvvChange }))),
                React.createElement(Box_1.default, { sx: { display: 'flex', gap: 2 } },
                    React.createElement(FormGrid, { sx: { flexGrow: 1 } },
                        React.createElement(FormLabel_1.default, { htmlFor: "card-name", required: true }, "Name"),
                        React.createElement(OutlinedInput_1.default, { id: "card-name", autoComplete: "card-name", placeholder: "John Smith", required: true, size: "small" })),
                    React.createElement(FormGrid, { sx: { flexGrow: 1 } },
                        React.createElement(FormLabel_1.default, { htmlFor: "card-expiration", required: true }, "Expiration date"),
                        React.createElement(OutlinedInput_1.default, { id: "card-expiration", autoComplete: "card-expiration", placeholder: "MM/YY", required: true, size: "small", value: expirationDate, onChange: handleExpirationDateChange })))),
            React.createElement(FormControlLabel_1.default, { control: React.createElement(Checkbox_1.default, { name: "saveCard" }), label: "Remember credit card details for next time" }))),
        paymentType === 'bankTransfer' && (React.createElement(Box_1.default, { sx: { display: 'flex', flexDirection: 'column', gap: 2 } },
            React.createElement(Alert_1.default, { severity: "warning", icon: React.createElement(WarningRounded_1.default, null) }, "Your order will be processed once we receive the funds."),
            React.createElement(Typography_1.default, { variant: "subtitle1", sx: { fontWeight: 'medium' } }, "Bank account"),
            React.createElement(Typography_1.default, { variant: "body1", gutterBottom: true }, "Please transfer the payment to the bank account details shown below."),
            React.createElement(Box_1.default, { sx: { display: 'flex', gap: 1 } },
                React.createElement(Typography_1.default, { variant: "body1", sx: { color: 'text.secondary' } }, "Bank:"),
                React.createElement(Typography_1.default, { variant: "body1", sx: { fontWeight: 'medium' } }, "Mastercredit")),
            React.createElement(Box_1.default, { sx: { display: 'flex', gap: 1 } },
                React.createElement(Typography_1.default, { variant: "body1", sx: { color: 'text.secondary' } }, "Account number:"),
                React.createElement(Typography_1.default, { variant: "body1", sx: { fontWeight: 'medium' } }, "123456789")),
            React.createElement(Box_1.default, { sx: { display: 'flex', gap: 1 } },
                React.createElement(Typography_1.default, { variant: "body1", sx: { color: 'text.secondary' } }, "Routing number:"),
                React.createElement(Typography_1.default, { variant: "body1", sx: { fontWeight: 'medium' } }, "987654321"))))));
}
