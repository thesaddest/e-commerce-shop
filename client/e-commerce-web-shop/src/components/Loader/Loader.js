import React from 'react';
import cl from './Loader.module.css'

const Loader = () => {
    return (
        <div className={cl.loaderContainer}>
            <div className={cl.controls}></div>
            <div className={`${cl.spinner} ${cl.windcatcher}`} id="windcatcher">
                <div className={cl.blade}></div>
                <div className={cl.blade}></div>
                <div className={cl.blade}></div>
                <div className={cl.blade}></div>
                <div className={cl.blade}></div>
                <div className={cl.blade}></div>
                <div className={cl.blade}></div>
                <div className={cl.blade}></div>
            </div>
        </div>
    );
};

export default Loader;