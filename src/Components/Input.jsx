import React from "react";
import { twMerge } from "tailwind-merge";
const Input = ({className, value, ...rest }) => {
    const classes = twMerge(` relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${className ?? ""}`)

    return (
        <input
            className={classes}
            value={rest.type !== "file"? value: undefined}
            {...rest}
            
        />
    );
};

export default Input;
