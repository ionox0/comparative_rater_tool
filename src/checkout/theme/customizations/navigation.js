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
exports.navigationCustomizations = void 0;
const React = __importStar(require("react"));
const styles_1 = require("@mui/material/styles");
const ButtonBase_1 = require("@mui/material/ButtonBase");
const Divider_1 = require("@mui/material/Divider");
const MenuItem_1 = require("@mui/material/MenuItem");
const Select_1 = require("@mui/material/Select");
const Tab_1 = require("@mui/material/Tab");
const UnfoldMoreRounded_1 = __importDefault(require("@mui/icons-material/UnfoldMoreRounded"));
const themePrimitives_1 = require("../themePrimitives");
/* eslint-disable import/prefer-default-export */
exports.navigationCustomizations = {
    MuiMenuItem: {
        styleOverrides: {
            root: ({ theme }) => ({
                borderRadius: theme.shape.borderRadius,
                padding: '6px 8px',
                [`&.${MenuItem_1.menuItemClasses.focusVisible}`]: {
                    backgroundColor: 'transparent',
                },
                [`&.${MenuItem_1.menuItemClasses.selected}`]: {
                    [`&.${MenuItem_1.menuItemClasses.focusVisible}`]: {
                        backgroundColor: (0, styles_1.alpha)(theme.palette.action.selected, 0.3),
                    },
                },
            }),
        },
    },
    MuiMenu: {
        styleOverrides: {
            list: {
                gap: '0px',
                [`&.${Divider_1.dividerClasses.root}`]: {
                    margin: '0 -8px',
                },
            },
            paper: ({ theme }) => (Object.assign({ marginTop: '4px', borderRadius: theme.shape.borderRadius, border: `1px solid ${theme.palette.divider}`, backgroundImage: 'none', background: 'hsl(0, 0%, 100%)', boxShadow: 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px', [`& .${ButtonBase_1.buttonBaseClasses.root}`]: {
                    '&.Mui-selected': {
                        backgroundColor: (0, styles_1.alpha)(theme.palette.action.selected, 0.3),
                    },
                } }, theme.applyStyles('dark', {
                background: themePrimitives_1.gray[900],
                boxShadow: 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px',
            }))),
        },
    },
    MuiSelect: {
        defaultProps: {
            IconComponent: React.forwardRef((props, ref) => (React.createElement(UnfoldMoreRounded_1.default, Object.assign({ fontSize: "small" }, props, { ref: ref })))),
        },
        styleOverrides: {
            root: ({ theme }) => (Object.assign({ borderRadius: theme.shape.borderRadius, border: '1px solid', borderColor: themePrimitives_1.gray[200], backgroundColor: theme.palette.background.paper, boxShadow: `inset 0 1px 0 1px hsla(220, 0%, 100%, 0.6), inset 0 -1px 0 1px hsla(220, 35%, 90%, 0.5)`, '&:hover': {
                    borderColor: themePrimitives_1.gray[300],
                    backgroundColor: theme.palette.background.paper,
                    boxShadow: 'none',
                }, [`&.${Select_1.selectClasses.focused}`]: {
                    outlineOffset: 0,
                    borderColor: themePrimitives_1.gray[400],
                }, '&:before, &:after': {
                    display: 'none',
                } }, theme.applyStyles('dark', {
                borderRadius: theme.shape.borderRadius,
                borderColor: themePrimitives_1.gray[700],
                backgroundColor: theme.palette.background.paper,
                boxShadow: `inset 0 1px 0 1px ${(0, styles_1.alpha)(themePrimitives_1.gray[700], 0.15)}, inset 0 -1px 0 1px hsla(220, 0%, 0%, 0.7)`,
                '&:hover': {
                    borderColor: (0, styles_1.alpha)(themePrimitives_1.gray[700], 0.7),
                    backgroundColor: theme.palette.background.paper,
                    boxShadow: 'none',
                },
                [`&.${Select_1.selectClasses.focused}`]: {
                    outlineOffset: 0,
                    borderColor: themePrimitives_1.gray[900],
                },
                '&:before, &:after': {
                    display: 'none',
                },
            }))),
            select: ({ theme }) => (Object.assign({ display: 'flex', alignItems: 'center' }, theme.applyStyles('dark', {
                display: 'flex',
                alignItems: 'center',
                '&:focus-visible': {
                    backgroundColor: themePrimitives_1.gray[900],
                },
            }))),
        },
    },
    MuiLink: {
        defaultProps: {
            underline: 'none',
        },
        styleOverrides: {
            root: ({ theme }) => ({
                color: theme.palette.text.primary,
                fontWeight: 500,
                position: 'relative',
                textDecoration: 'none',
                width: 'fit-content',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '1px',
                    bottom: 0,
                    left: 0,
                    backgroundColor: theme.palette.text.secondary,
                    opacity: 0.3,
                    transition: 'width 0.3s ease, opacity 0.3s ease',
                },
                '&:hover::before': {
                    width: 0,
                },
                '&:focus-visible': {
                    outline: `3px solid ${(0, styles_1.alpha)(themePrimitives_1.brand[500], 0.5)}`,
                    outlineOffset: '4px',
                    borderRadius: '2px',
                },
            }),
        },
    },
    MuiDrawer: {
        styleOverrides: {
            paper: ({ theme }) => ({
                backgroundColor: theme.palette.background.default,
            }),
        },
    },
    MuiPaginationItem: {
        styleOverrides: {
            root: ({ theme }) => (Object.assign({ '&.Mui-selected': {
                    color: 'white',
                    backgroundColor: theme.palette.grey[900],
                } }, theme.applyStyles('dark', {
                '&.Mui-selected': {
                    color: 'black',
                    backgroundColor: theme.palette.grey[50],
                },
            }))),
        },
    },
    MuiTabs: {
        styleOverrides: {
            root: { minHeight: 'fit-content' },
            indicator: ({ theme }) => (Object.assign({ backgroundColor: theme.palette.grey[800] }, theme.applyStyles('dark', {
                backgroundColor: theme.palette.grey[200],
            }))),
        },
    },
    MuiTab: {
        styleOverrides: {
            root: ({ theme }) => (Object.assign({ padding: '6px 8px', marginBottom: '8px', textTransform: 'none', minWidth: 'fit-content', minHeight: 'fit-content', color: theme.palette.text.secondary, borderRadius: theme.shape.borderRadius, border: '1px solid', borderColor: 'transparent', ':hover': {
                    color: theme.palette.text.primary,
                    backgroundColor: themePrimitives_1.gray[100],
                    borderColor: themePrimitives_1.gray[200],
                }, [`&.${Tab_1.tabClasses.selected}`]: {
                    color: themePrimitives_1.gray[900],
                } }, theme.applyStyles('dark', {
                ':hover': {
                    color: theme.palette.text.primary,
                    backgroundColor: themePrimitives_1.gray[800],
                    borderColor: themePrimitives_1.gray[700],
                },
                [`&.${Tab_1.tabClasses.selected}`]: {
                    color: '#fff',
                },
            }))),
        },
    },
    MuiStepConnector: {
        styleOverrides: {
            line: ({ theme }) => ({
                borderTop: '1px solid',
                borderColor: theme.palette.divider,
                flex: 1,
                borderRadius: '99px',
            }),
        },
    },
    MuiStepIcon: {
        styleOverrides: {
            root: ({ theme }) => (Object.assign(Object.assign({ color: 'transparent', border: `1px solid ${themePrimitives_1.gray[400]}`, width: 12, height: 12, borderRadius: '50%', '& text': {
                    display: 'none',
                }, '&.Mui-active': {
                    border: 'none',
                    color: theme.palette.primary.main,
                }, '&.Mui-completed': {
                    border: 'none',
                    color: theme.palette.success.main,
                } }, theme.applyStyles('dark', {
                border: `1px solid ${themePrimitives_1.gray[700]}`,
                '&.Mui-active': {
                    border: 'none',
                    color: theme.palette.primary.light,
                },
                '&.Mui-completed': {
                    border: 'none',
                    color: theme.palette.success.light,
                },
            })), { variants: [
                    {
                        props: { completed: true },
                        style: {
                            width: 12,
                            height: 12,
                        },
                    },
                ] })),
        },
    },
    MuiStepLabel: {
        styleOverrides: {
            label: ({ theme }) => ({
                '&.Mui-completed': Object.assign({ opacity: 0.6 }, theme.applyStyles('dark', { opacity: 0.5 })),
            }),
        },
    },
};
