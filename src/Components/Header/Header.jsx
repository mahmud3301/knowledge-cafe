import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-200 shadow-lg rounded-lg">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Girls Corner</a>
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
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRprSbMgAg-Va_XPJdbKOuo4rVBiRsK-rHSVQ&usqp=CAU" />
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;