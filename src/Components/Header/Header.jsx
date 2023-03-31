import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-200 shadow-lg rounded-lg">
                <div className="flex-1">
                    <a className="font-bold ml-4 normal-case text-xl">Knowledge Cafe</a>
                </div>
                <div className='font-medium text-xl p-5 g-5'>
                    <a href="">
                        <ul className='p-2'>Home</ul>

                    </a><a href="">
                        <ul className='p-2'>Blogs</ul>

                    </a><a href="">
                        <ul className='p-2'>About</ul>
                    </a>
                </div>
                <div className="flex-none gap-2">
                    <label tabIndex={0} className="btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQanfoMu0r3kipu4MEE3ihGkPgB1uXAw4uA&usqp=CAU" />
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;