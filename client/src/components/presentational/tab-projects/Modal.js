import React from 'react';

const Modal = (props) => (
    <article className='modal-box'>
        <section className='modal-out' onClick={() => props.toggleModal()}>
            <div className='modal-out__top'></div>
            <div className='modal-out__right'></div>
            <div className='modal-out__bottom'></div>
            <div className='modal-out__left'></div>
        </section>
        <section className='modal'>
            <div className='modal__header'>{props.title}</div>
            <figure className='modal__img'><img src={process.env.PUBLIC_URL + '/img/' + props.img} alt='project image' /></figure>
            <p className='modal__desc'>{props.desc}</p>
            <div className='modal__keywords'>
                <div className='modal__keywords__header'>Keywords</div>
                {
                    props.keywords.map((keyword, index) => (
                        <div className='keyword' key={index}>{keyword}</div>
                    ))
                }
            </div>
            <div className='modal__links'>
                <a href={props.deployed} target='_blank' rel='noopener noreferrer'>Deployed Site</a>
                <a href={props.github} target='_blank' rel='noopener noreferrer'>Github Link</a>
            </div>
        </section>
    </article>
);

export default Modal;