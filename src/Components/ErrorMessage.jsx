import React from 'react';
import { twMerge } from 'tailwind-merge';

const ErrorMessage = ({children, className}) => {
   
    return (
        <h4 className={`${className} text-red-500 text-center `}>{children}</h4>
    );
};

export default ErrorMessage;