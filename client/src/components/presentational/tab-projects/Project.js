import React from 'react';
import './Project.css';

class Project extends React.Component {
    // Local state for modal control
    state = {
        modal: false
    };

    toggleModal = () => {
        this.setState({ modal: !this.state.modal });
    };
    
    render() {
        return (
            <div className='proj-box'>
                <div className='proj'>
                    <div className='proj__title'>{this.props.proj.title}</div>
                </div>
            </div>
        );
    };
};

export default Project;