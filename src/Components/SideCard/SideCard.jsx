import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SideCard = ({ bm, readTime }) => {
    // console.log(readTime);
    return (
        <div>
            <div className='text-center rounded-lg p-5 font-bold bg-purple-400'>
                <p>Spent time on read : {readTime}</p>
            </div>
            <div className='rounded-lg p-5 font-bold bg-base-200 h-full mt-5'>
                <h1 className='test-xl text-left ml-2 font-bold'>Bookmarked Blogs: { }</h1>
                <div>
                    {bm.map(data => <p className='text-center rounded-lg p-5 font-bold bg-base-100 mt-5'>{data}</p>)}
                </div>
            </div>
        </div>
    );
};

export default SideCard;