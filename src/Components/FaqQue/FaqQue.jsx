import React from 'react';

const FaqQue = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold text-center'>Faq <span className='text-purple-400'>Que</span>..</h1><br /><br />
            <div className='text-left font-bold'>
                <div tabIndex={0} className="collapse collapse-plus  border border-base-300 bg-base-200 rounded-box mb-5">
                    <div className="collapse-title text-xl font-medium">
                        Props vs state
                    </div>
                    <div className="collapse-content">
                        <p>Props are used to pass data down the component hierarchy, while state is used to manage data within a component. Props are read-only, while state can be modified using the setState method.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus  border border-base-300 bg-base-200 rounded-box mb-5">
                    <div className="collapse-title text-xl font-medium">
                        How does useState work?
                    </div>
                    <div className="collapse-content">
                        <p>It shows how the useState hook is used to declare the count state variable and how the setCount function is used to update it. Finally, it demonstrates how the count state variable is displayed in the component's output.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus  border border-base-300 bg-base-200 rounded-box mb-5">
                    <div className="collapse-title text-xl font-medium">
                        Purpose of useEffect other than fetching data.
                    </div>
                    <div className="collapse-content">
                        <p>The useEffect hook is used to perform side effects in functional components, which can include updating the document title, adding event listeners, and much more.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus  border border-base-300 bg-base-200 rounded-box mb-5">
                    <div className="collapse-title text-xl font-medium">
                        How Does React work?
                    </div>
                    <div className="collapse-content">
                        <p>React is a JavaScript library used for building user interfaces. React provides a powerful and efficient way to build complex user interfaces by breaking them down into reusable components and using a virtual DOM to efficiently update the actual DOM.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqQue;