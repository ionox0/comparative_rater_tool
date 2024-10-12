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
exports.inputsCustomizations = void 0;
const React = __importStar(require("react"));
const styles_1 = require("@mui/material/styles");
const OutlinedInput_1 = require("@mui/material/OutlinedInput");
const SvgIcon_1 = require("@mui/material/SvgIcon");
const ToggleButtonGroup_1 = require("@mui/material/ToggleButtonGroup");
const ToggleButton_1 = require("@mui/material/ToggleButton");
const CheckBoxOutlineBlankRounded_1 = __importDefault(require("@mui/icons-material/CheckBoxOutlineBlankRounded"));
const CheckRounded_1 = __importDefault(require("@mui/icons-material/CheckRounded"));
const RemoveRounded_1 = __importDefault(require("@mui/icons-material/RemoveRounded"));
const themePrimitives_1 = require("../themePrimitives");
/* eslint-disable import/prefer-default-export */
exports.inputsCustomizations = {
    MuiButtonBase: {
        defaultProps: {
            disableTouchRipple: true,
            disableRipple: true,
        },
        styleOverrides: {
            root: ({ theme }) => ({
                boxSizing: 'border-box',
                transition: 'all 100ms ease-in',
                '&:focus-visible': {
                    outline: `3px solid ${(0, styles_1.alpha)(theme.palette.primary.main, 0.5)}`,
                    outlineOffset: '2px',
                },
            }),
        },
    },
    MuiButton: {
        styleOverrides: {
            root: ({ theme }) => ({
                boxShadow: 'none',
                borderRadius: theme.shape.borderRadius,
                textTransform: 'none',
                variants: [
                    {
                        props: {
                            size: 'small',
                        },
                        style: {
                            height: '2.25rem',
                            padding: '8px 12px',
                        },
                    },
                    {
                        props: {
                            size: 'medium',
                        },
                        style: {
                            height: '2.5rem', // 40px
                        },
                    },
                    {
                        props: {
                            color: 'primary',
                            variant: 'contained',
                        },
                        style: Object.assign({ color: 'white', backgroundColor: themePrimitives_1.gray[900], backgroundImage: `linear-gradient(to bottom, ${themePrimitives_1.gray[700]}, ${themePrimitives_1.gray[800]})`, boxShadow: `inset 0 1px 0 ${themePrimitives_1.gray[600]}, inset 0 -1px 0 1px hsl(220, 0%, 0%)`, border: `1px solid ${themePrimitives_1.gray[700]}`, '&:hover': {
                                backgroundImage: 'none',
                                backgroundColor: themePrimitives_1.gray[700],
                                boxShadow: 'none',
                            }, '&:active': {
                                backgroundColor: themePrimitives_1.gray[800],
                            } }, theme.applyStyles('dark', {
                            color: 'black',
                            backgroundColor: themePrimitives_1.gray[50],
                            backgroundImage: `linear-gradient(to bottom, ${themePrimitives_1.gray[100]}, ${themePrimitives_1.gray[50]})`,
                            boxShadow: 'inset 0 -1px 0  hsl(220, 30%, 80%)',
                            border: `1px solid ${themePrimitives_1.gray[50]}`,
                            '&:hover': {
                                backgroundImage: 'none',
                                backgroundColor: themePrimitives_1.gray[300],
                                boxShadow: 'none',
                            },
                            '&:active': {
                                backgroundColor: themePrimitives_1.gray[400],
                            },
                        })),
                    },
                    {
                        props: {
                            color: 'secondary',
                            variant: 'contained',
                        },
                        style: {
                            color: 'white',
                            backgroundColor: themePrimitives_1.brand[300],
                            backgroundImage: `linear-gradient(to bottom, ${(0, styles_1.alpha)(themePrimitives_1.brand[400], 0.8)}, ${themePrimitives_1.brand[500]})`,
                            boxShadow: `inset 0 2px 0 ${(0, styles_1.alpha)(themePrimitives_1.brand[200], 0.2)}, inset 0 -2px 0 ${(0, styles_1.alpha)(themePrimitives_1.brand[700], 0.4)}`,
                            border: `1px solid ${themePrimitives_1.brand[500]}`,
                            '&:hover': {
                                backgroundColor: themePrimitives_1.brand[700],
                                boxShadow: 'none',
                            },
                            '&:active': {
                                backgroundColor: themePrimitives_1.brand[700],
                                backgroundImage: 'none',
                            },
                        },
                    },
                    {
                        props: {
                            variant: 'outlined',
                        },
                        style: Object.assign({ color: theme.palette.text.primary, border: '1px solid', borderColor: themePrimitives_1.gray[200], backgroundColor: (0, styles_1.alpha)(themePrimitives_1.gray[50], 0.3), '&:hover': {
                                backgroundColor: themePrimitives_1.gray[100],
                                borderColor: themePrimitives_1.gray[300],
                            }, '&:active': {
                                backgroundColor: themePrimitives_1.gray[200],
                            } }, theme.applyStyles('dark', {
                            backgroundColor: themePrimitives_1.gray[800],
                            borderColor: themePrimitives_1.gray[700],
                            '&:hover': {
                                backgroundColor: themePrimitives_1.gray[900],
                                borderColor: themePrimitives_1.gray[600],
                            },
                            '&:active': {
                                backgroundColor: themePrimitives_1.gray[900],
                            },
                        })),
                    },
                    {
                        props: {
                            color: 'secondary',
                            variant: 'outlined',
                        },
                        style: Object.assign({ color: themePrimitives_1.brand[700], border: '1px solid', borderColor: themePrimitives_1.brand[200], backgroundColor: themePrimitives_1.brand[50], '&:hover': {
                                backgroundColor: themePrimitives_1.brand[100],
                                borderColor: themePrimitives_1.brand[400],
                            }, '&:active': {
                                backgroundColor: (0, styles_1.alpha)(themePrimitives_1.brand[200], 0.7),
                            } }, theme.applyStyles('dark', {
                            color: themePrimitives_1.brand[50],
                            border: '1px solid',
                            borderColor: themePrimitives_1.brand[900],
                            backgroundColor: (0, styles_1.alpha)(themePrimitives_1.brand[900], 0.3),
                            '&:hover': {
                                borderColor: themePrimitives_1.brand[700],
                                backgroundColor: (0, styles_1.alpha)(themePrimitives_1.brand[900], 0.6),
                            },
                            '&:active': {
                                backgroundColor: (0, styles_1.alpha)(themePrimitives_1.brand[900], 0.5),
                            },
                        })),
                    },
                    {
                        props: {
                            variant: 'text',
                        },
                        style: Object.assign({ color: themePrimitives_1.gray[600], '&:hover': {
                                backgroundColor: themePrimitives_1.gray[100],
                            }, '&:active': {
                                backgroundColor: themePrimitives_1.gray[200],
                            } }, theme.applyStyles('dark', {
                            color: themePrimitives_1.gray[50],
                            '&:hover': {
                                backgroundColor: themePrimitives_1.gray[700],
                            },
                            '&:active': {
                                backgroundColor: (0, styles_1.alpha)(themePrimitives_1.gray[700], 0.7),
                            },
                        })),
                    },
                    {
                        props: {
                            color: 'secondary',
                            variant: 'text',
                        },
                        style: Object.assign({ color: themePrimitives_1.brand[700], '&:hover': {
                                backgroundColor: (0, styles_1.alpha)(themePrimitives_1.brand[100], 0.5),
                            }, '&:active': {
                                backgroundColor: (0, styles_1.alpha)(themePrimitives_1.brand[200], 0.7),
                            } }, theme.applyStyles('dark', {
                            color: themePrimitives_1.brand[100],
                            '&:hover': {
                                backgroundColor: (0, styles_1.alpha)(themePrimitives_1.brand[900], 0.5),
                            },
                            '&:active': {
                                backgroundColor: (0, styles_1.alpha)(themePrimitives_1.brand[900], 0.3),
                            },
                        })),
                    },
                ],
            }),
        },
    },
    MuiIconButton: {
        styleOverrides: {
            root: ({ theme }) => (Object.assign(Object.assign({ boxShadow: 'none', borderRadius: theme.shape.borderRadius, textTransform: 'none', fontWeight: theme.typography.fontWeightMedium, letterSpacing: 0, color: theme.palette.text.primary, border: '1px solid ', borderColor: themePrimitives_1.gray[200], backgroundColor: (0, styles_1.alpha)(themePrimitives_1.gray[50], 0.3), '&:hover': {
                    backgroundColor: themePrimitives_1.gray[100],
                    borderColor: themePrimitives_1.gray[300],
                }, '&:active': {
                    backgroundColor: themePrimitives_1.gray[200],
                } }, theme.applyStyles('dark', {
                backgroundColor: themePrimitives_1.gray[800],
                borderColor: themePrimitives_1.gray[700],
                '&:hover': {
                    backgroundColor: themePrimitives_1.gray[900],
                    borderColor: themePrimitives_1.gray[600],
                },
                '&:active': {
                    backgroundColor: themePrimitives_1.gray[900],
                },
            })), { variants: [
                    {
                        props: {
                            size: 'small',
                        },
                        style: {
                            width: '2.25rem',
                            height: '2.25rem',
                            padding: '0.25rem',
                            [`& .${SvgIcon_1.svgIconClasses.root}`]: { fontSize: '1rem' },
                        },
                    },
                    {
                        props: {
                            size: 'medium',
                        },
                        style: {
                            width: '2.5rem',
                            height: '2.5rem',
                        },
                    },
                ] })),
        },
    },
    MuiToggleButtonGroup: {
        styleOverrides: {
            root: ({ theme }) => (Object.assign({ borderRadius: '10px', boxShadow: `0 4px 16px ${(0, styles_1.alpha)(themePrimitives_1.gray[400], 0.2)}`, [`& .${ToggleButtonGroup_1.toggleButtonGroupClasses.selected}`]: {
                    color: themePrimitives_1.brand[500],
                } }, theme.applyStyles('dark', {
                [`& .${ToggleButtonGroup_1.toggleButtonGroupClasses.selected}`]: {
                    color: '#fff',
                },
                boxShadow: `0 4px 16px ${(0, styles_1.alpha)(themePrimitives_1.brand[700], 0.5)}`,
            }))),
        },
    },
    MuiToggleButton: {
        styleOverrides: {
            root: ({ theme }) => (Object.assign({ padding: '12px 16px', textTransform: 'none', borderRadius: '10px', fontWeight: 500 }, theme.applyStyles('dark', {
                color: themePrimitives_1.gray[400],
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
                [`&.${ToggleButton_1.toggleButtonClasses.selected}`]: {
                    color: themePrimitives_1.brand[300],
                },
            }))),
        },
    },
    MuiCheckbox: {
        defaultProps: {
            disableRipple: true,
            icon: (React.createElement(CheckBoxOutlineBlankRounded_1.default, { sx: { color: 'hsla(210, 0%, 0%, 0.0)' } })),
            checkedIcon: React.createElement(CheckRounded_1.default, { sx: { height: 14, width: 14 } }),
            indeterminateIcon: React.createElement(RemoveRounded_1.default, { sx: { height: 14, width: 14 } }),
        },
        styleOverrides: {
            root: ({ theme }) => (Object.assign({ margin: 10, height: 16, width: 16, borderRadius: 5, border: '1px solid ', borderColor: (0, styles_1.alpha)(themePrimitives_1.gray[300], 0.8), boxShadow: '0 0 0 1.5px hsla(210, 0%, 0%, 0.04) inset', backgroundColor: (0, styles_1.alpha)(themePrimitives_1.gray[100], 0.4), transition: 'border-color, background-color, 120ms ease-in', '&:hover': {
                    borderColor: themePrimitives_1.brand[300],
                }, '&.Mui-focusVisible': {
                    outline: `3px solid ${(0, styles_1.alpha)(themePrimitives_1.brand[500], 0.5)}`,
                    outlineOffset: '2px',
                    borderColor: themePrimitives_1.brand[400],
                }, '&.Mui-checked': {
                    color: 'white',
                    backgroundColor: themePrimitives_1.brand[500],
                    borderColor: themePrimitives_1.brand[500],
                    boxShadow: `none`,
                    '&:hover': {
                        backgroundColor: themePrimitives_1.brand[600],
                    },
                } }, theme.applyStyles('dark', {
                borderColor: (0, styles_1.alpha)(themePrimitives_1.gray[700], 0.8),
                boxShadow: '0 0 0 1.5px hsl(210, 0%, 0%) inset',
                backgroundColor: (0, styles_1.alpha)(themePrimitives_1.gray[900], 0.8),
                '&:hover': {
                    borderColor: themePrimitives_1.brand[300],
                },
                '&.Mui-focusVisible': {
                    borderColor: themePrimitives_1.brand[400],
                    outline: `3px solid ${(0, styles_1.alpha)(themePrimitives_1.brand[500], 0.5)}`,
                    outlineOffset: '2px',
                },
            }))),
        },
    },
    MuiInputBase: {
        styleOverrides: {
            root: {
                border: 'none',
            },
            input: {
                '&::placeholder': {
                    opacity: 0.7,
                    color: themePrimitives_1.gray[500],
                },
            },
        },
    },
    MuiOutlinedInput: {
        styleOverrides: {
            input: {
                padding: 0,
            },
            root: ({ theme }) => (Object.assign(Object.assign({ padding: '8px 12px', color: theme.palette.text.primary, borderRadius: theme.shape.borderRadius, border: `1px solid ${theme.palette.divider}`, backgroundColor: theme.palette.background.default, transition: 'border 120ms ease-in', '&:hover': {
                    borderColor: themePrimitives_1.gray[400],
                }, [`&.${OutlinedInput_1.outlinedInputClasses.focused}`]: {
                    outline: `3px solid ${(0, styles_1.alpha)(themePrimitives_1.brand[500], 0.5)}`,
                    borderColor: themePrimitives_1.brand[400],
                } }, theme.applyStyles('dark', {
                '&:hover': {
                    borderColor: themePrimitives_1.gray[500],
                },
            })), { variants: [
                    {
                        props: {
                            size: 'small',
                        },
                        style: {
                            height: '2.25rem',
                        },
                    },
                    {
                        props: {
                            size: 'medium',
                        },
                        style: {
                            height: '2.5rem',
                        },
                    },
                ] })),
            notchedOutline: {
                border: 'none',
            },
        },
    },
    MuiInputAdornment: {
        styleOverrides: {
            root: ({ theme }) => (Object.assign({ color: theme.palette.grey[500] }, theme.applyStyles('dark', {
                color: theme.palette.grey[400],
            }))),
        },
    },
    MuiFormLabel: {
        styleOverrides: {
            root: ({ theme }) => ({
                typography: theme.typography.caption,
                marginBottom: 8,
            }),
        },
    },
};
