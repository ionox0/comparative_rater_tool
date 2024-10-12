"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackCustomizations = void 0;
const styles_1 = require("@mui/material/styles");
const themePrimitives_1 = require("../themePrimitives");
/* eslint-disable import/prefer-default-export */
exports.feedbackCustomizations = {
    MuiAlert: {
        styleOverrides: {
            root: ({ theme }) => (Object.assign({ borderRadius: 10, backgroundColor: themePrimitives_1.orange[100], color: theme.palette.text.primary, border: `1px solid ${(0, styles_1.alpha)(themePrimitives_1.orange[300], 0.5)}`, '& .MuiAlert-icon': {
                    color: themePrimitives_1.orange[500],
                } }, theme.applyStyles('dark', {
                backgroundColor: `${(0, styles_1.alpha)(themePrimitives_1.orange[900], 0.5)}`,
                border: `1px solid ${(0, styles_1.alpha)(themePrimitives_1.orange[800], 0.5)}`,
            }))),
        },
    },
    MuiDialog: {
        styleOverrides: {
            root: ({ theme }) => ({
                '& .MuiDialog-paper': {
                    borderRadius: '10px',
                    border: '1px solid',
                    borderColor: theme.palette.divider,
                },
            }),
        },
    },
    MuiLinearProgress: {
        styleOverrides: {
            root: ({ theme }) => (Object.assign({ height: 8, borderRadius: 8, backgroundColor: themePrimitives_1.gray[200] }, theme.applyStyles('dark', {
                backgroundColor: themePrimitives_1.gray[800],
            }))),
        },
    },
};
