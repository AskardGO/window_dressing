// @flow
import * as React from 'react';
import Background from "../../components/Background/Background";

export const LandingPage = () => {
    return (
        <>
            <div className='flex justify-center items-center h-full'>
                <div className="inline-flex uppercase font-bold text-7xl mix-blend-difference bg-transparent border text-white px-5 rounded-full">
                    Welcome
                </div>
            </div>
            <Background mode='sunrise'/>
        </>
    );
};