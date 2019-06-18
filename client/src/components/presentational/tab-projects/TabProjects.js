import React from 'react';
import Project from './Project';
import { PROJECTS_ARR } from '../../../data/data-projects';
import './TabProjects.css';

const TabProjects = () => (
    <div id='tab-projects'>
        {
            PROJECTS_ARR.map((proj, index) => (
                <Project proj={proj} key={index} />
            ))
        }
    </div>
);

export default TabProjects;