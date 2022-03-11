import React, { useState, useEffect } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1 >= people.length ? 0 : index + 1);
        }, 3000);
        return () => clearInterval(slider)
    }, [index])
    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return newIndex >= people.length ? 0 : newIndex
        })
    }
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return newIndex < 0 ? people.length - 1 : newIndex
        })
    }
    const randomPerson = () => {
        let random = Math.random() * people.length;
        random = Math.floor(random)
        if (random === index) {
            random = index - 1 < 0 ? people.length - 1 : index - 1
        }
        setIndex(random)
    }
    return <article className="review">
        <div className="img-container">
            <img src={image} alt={name} className='person-img' />
            <span className='quote-icon'><FaQuoteRight /></span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
            <button className='prev-btn' onClick={prevPerson}>
                <FaChevronLeft />
            </button>
            <button className='next-btn' onClick={nextPerson}>
                <FaChevronRight />
            </button>
        </div>
        <button className='random-btn' onClick={randomPerson}>
            Suprise Me
            </button>
    </article>;
};

export default Review;