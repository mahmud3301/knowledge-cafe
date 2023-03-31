import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleCard = ({ blog, handleBm, handleReadTime}) => {
    return (
        <div>
            <div className="card card-compact max-w-full bg-base-100 shadow-xl mt-5">
                <figure><img className='w-full h-96' src={blog.images.blog_cover_image} /></figure><br />
                <div className='flex justify-between'>
                    <div className='flex'>
                        <div className='text-start ml-3'>
                            <label className="btn-circle avatar">
                                <div className="btn-circle avatar w-10 rounded-full">
                                    <img src={blog.images.author_image} />
                                </div>
                            </label>
                        </div>
                        <div className='text-start'>
                            <h5 className='text-xl font-bold'>{blog.author_name}</h5>
                            <p className='text-slate-400'>{blog.publish_date}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <p className='text-slate-400'>{blog.read_time} read</p>
                        <button className='btn-sm'><FontAwesomeIcon className='ml-3' onClick={() => handleBm(blog.blog_title)} icon={faBookmark} /></button>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title font-bold">{blog.blog_title}</h2>
                    <div className='text-start text-slate-400'>
                        <p>#beginners <span className='ml-3'>#programming</span></p>
                    </div>
                    <div className='text-start'>
                        <a onClick={() => handleReadTime(blog.read_time)} className="link link-accent">Mark as read</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;