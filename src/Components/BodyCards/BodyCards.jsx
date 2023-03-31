import React, { useEffect,useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const BodyCards = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    })
    return (
        <div>
            {
                blogs.map(blog => <SingleCard blog={blog}></SingleCard>)
            }
        </div>
    );
};

export default BodyCards;