// src/components/Modal.js
import React from 'react';

const InfoModal = ({ tagInfo, setIsInfoShow }) => {
    const lines = tagInfo["des"].split('\n');
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative lg:w-1/3 md:w-2/3 w-full my-6 -top-32 mx-auto max-w-3xl bg-white rounded-lg">
                    <div className='text-left text-2xl font-bold bg-gray-50 p-4 rounded-t-lg '>
                        {tagInfo['title']}
                    </div>
                    <div className='min-h-40 text-left p-4'>
                        {lines.map((line) => (
                            <p>{line}</p>
                        ))}
                       
                    </div>

                    <div className='flex justify-end bg-gray-50 p-4 rounded-b-lg'>
                    <button
                        onClick={() => setIsInfoShow(false)}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                        Close
                    </button>
                    </div>
                </div>
            </div>

            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>


        </>
    );
};

export default InfoModal;
