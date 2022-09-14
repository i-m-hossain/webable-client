import React from 'react';
import { twMerge } from 'tailwind-merge';

const ErrorMessage = ({children, className}) => {
    const classes =twMerge(`${className ?? ""} text-red-500 mb-2 pl-2`)
    return (
        <p className={classes}>{children}</p>
    );
};

export default ErrorMessage;