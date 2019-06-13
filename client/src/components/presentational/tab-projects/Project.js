import React from 'react';

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
            <div className='project'>{this.props.project.name}</div>
        );
    };
};

export default Project;