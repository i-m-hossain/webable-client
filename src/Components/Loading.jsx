import React from 'react';
import Loader from '../img/22.gif'
const Loading = () => {
    return (
        <div className='w-3/4 flex justify-center items-center '>
            <img src={Loader} alt="loading" />
        </div>
    );
};

export default Loading;