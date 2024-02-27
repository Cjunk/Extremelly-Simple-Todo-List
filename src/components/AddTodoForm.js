import React, { useState } from 'react';
import './todoItem.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// Define a custom styled button with the desired styles
const StyledButton = styled(Button)({
    marginTop: '0px', // Adjust the top margin as needed
    padding: '0px',
    width: '10%',
});

const AddTodoForm = ({ addTodo, clearList }) => {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleSubmit = (event, isClearButton) => {
        event.preventDefault();
        if (isClearButton) {
            clearList(); // Call clearList function if isClearButton is true
        } else if (!inputValue.trim()) {
            return; // Prevent adding empty todos
        } else {
            addTodo(inputValue);
        }
        setInputValue('');
    };
    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <TextField
                label="Add Todo"
                type="text"
                variant="outlined"
                value={inputValue}
                onChange={handleChange}
            />
            <StyledButton className="buttonclass"
                type="submit"
                variant="contained"
                color="primary"
            >
                Add
            </StyledButton>
            <StyledButton className="buttonclass"
                type="submit"
                variant="contained"
                color="secondary"  
                onClick={(e) => handleSubmit(e, true)} // Pass true to indicate clear button
            >
                Clear All
            </StyledButton>
        </form>
    );
};
export default AddTodoForm;
