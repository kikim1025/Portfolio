import React from 'react';
import Project from './Project';
import { PROJECTS_ARR } from '../../assets/data/data-projects';

const Projects = () => (
    <section id='projects'>
        {
            PROJECTS_ARR.map((proj, index) => (
                <Project proj={proj} key={index} />
            ))
        }
    </section>
);

export default Projects;