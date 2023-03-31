import React from 'react';

const SideCard = ({ bm, readTime }) => {
    return (
        <div className='sticky'>
            <div className='text-center border rounded-lg border-purple-700 p-5'style={{backgroundColor : "rgba(115, 96, 236, 0.1)"}}>
                <p className='text-purple-500'>Spent time on read : {readTime} min</p>
            </div>
            <div className='rounded-lg p-5 font-bold bg-base-200 h-full mt-5'>
                <h1 className='text-xl text-left ml-2 font-bold'>Bookmarked Blogs: {bm.length}</h1>
                <div>
                    {bm.map(data => <p className='text-center rounded-lg p-5 font-bold bg-base-100 mt-5'>{data}</p>)}
                </div>
            </div>
        </div>
    );
};

export default SideCard;