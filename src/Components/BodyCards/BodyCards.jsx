import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const BodyCards = () => {
    const [bm, setBm] = useState([]);
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    })
    const handleBm = (id) => {
        console.log(id);
        const newBm = [...bm, id];
        setBm(newBm);
    }
    return (
        <div>
            {
                blogs.map(blog => <SingleCard handleBm={handleBm} blog={blog}></SingleCard>)
            }
        </div>
    );
};

export default BodyCards;