import React from 'react';
import ProfileImage from '../../assets/images/profile-image.jpg';
import './homepage.styles.css';

const HomePage = () => (
    <div className='homepage'>
        <img className='profile-image' src={ProfileImage} alt='profile' />
        <div className='info'>
        <span className='name'>
            <h1>Sayak Dutta</h1>
        </span>
        <span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ipsa, dolores sit nostrum molestias rerum
                quos at illo dolor dicta molestiae inventore vero culpa temporibus, repellendus earum laborum, architecto 
                a?
            </p>
        </span>
         </div>
    </div>
);

export default HomePage;