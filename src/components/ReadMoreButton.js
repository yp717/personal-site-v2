import React from 'react';

const ReadMoreButton = () => {
    return(
        <>
        <a className="link link--arrowed" href="#">
            Read more <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none" stroke="#2CA4A4" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10"><circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle><path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path></g>
            </svg>
        </a>
        </>
    );
}

export default ReadMoreButton;