import React from 'react';

import './projects.styles.css';
import PROJECT_DATA from './projects.data';

import ProjectItem from '../../components/project-item/project-item.component';

const Projects = () => {
    console.log(PROJECT_DATA);
    return (
    <div className='projects'>
        {
            PROJECT_DATA.map(({id, ...otherProjectProps}) => (
                <ProjectItem key={id} {...otherProjectProps} />
            ))
        }
    </div>
    );
};

export default Projects;