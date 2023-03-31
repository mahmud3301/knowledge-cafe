import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-200 rounded-3xl">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQanfoMu0r3kipu4MEE3ihGkPgB1uXAw4uA&usqp=CAU" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li>
                                <a className="justify-between">
                                    Blogs
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;