import React from 'react';

const Label = ({content, name}) => {
    return (
        <label htmlFor={name} className="sr-only">
            {content}
        </label>
    );
};

export default Label;