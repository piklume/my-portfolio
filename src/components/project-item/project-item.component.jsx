import React from 'react';

import './project-item.styles.css';

const ProjectItem = ({ imageUrl, name, description }) => {
    console.log(imageUrl);
    return (
        <div className='project-item'> 
            <img className='image' src={`${process.env.PUBLIC_URL}/assets/images/${imageUrl}`} alt='project item' />
            <div className='project-text'>
                <h2 className='name'>{name}</h2>
                <h3 className='description'>{description}</h3>
            </div>
        </div>
    )
};

export default ProjectItem;