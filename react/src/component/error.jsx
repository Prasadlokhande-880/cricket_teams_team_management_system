import React from 'react';
import './ErrorPage.css'; // You can define your own CSS styles

const ErrorPage = () => {
    return (
        <div className="error-container">
            <h1>Oops, something went wrong!</h1>
            <p>We're sorry, but an error occurred while processing your request.</p>
            <p>Please try again later or contact support for assistance.</p>
        </div>
    );
};

export default ErrorPage;
