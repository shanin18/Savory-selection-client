import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error} = useRouteError();
    console.log(error)

    return (
        <div className='flex items-center justify-center h-screen'>
            <div>
            <img className='mx-auto' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?size=626&ext=jpg&ga=GA1.1.1013549767.1673752415&semt=robertav1_2_sidr" alt="image" />
            
            <p className='text-2xl font-bold font-montserrat text-center'>{error.message}</p>
            <div className='flex justify-center'>
            <Link to="/"><button className='md:text-lg my-5 font-bold uppercase font-montserrat btn btn-warning md:px-10'>Go to Home</button></Link>
            </div>
            </div>
        </div>
    );
};

export default ErrorPage;