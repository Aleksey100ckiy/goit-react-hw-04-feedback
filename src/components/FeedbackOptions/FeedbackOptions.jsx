import React from 'react';
import PropTypes from 'prop-types';
import { List } from './FeedbackOptions.styled';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <List>
            {options.map(option => (< li key ={option}>
                <Button type='button' option={option} onClick={onLeaveFeedback} name={option}>{option}</Button>
            </li>
            ))}
                    
        </List>)
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
        

export default FeedbackOptions; 