import React from 'react';

const SideCard = ({ bm,readTime }) => {
    // console.log(readTime);
    return (
        <div>
            <div className='text-center rounded-lg p-5 font-bold bg-purple-400'>
                <p>Spent time on read : {readTime}</p>
            </div>
            <div className='text-center rounded-lg p-5 font-bold bg-base-200 h-full mt-5'>
                <div>
                    {bm.map(data => <p className='text-center rounded-lg p-5 font-bold bg-base-100 mt-5'>{data}</p>)}
                </div>
            </div>
        </div>
    );
};

export default SideCard;