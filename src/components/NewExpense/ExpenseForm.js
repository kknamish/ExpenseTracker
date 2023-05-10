import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandler = (event) => { 
        setTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }

    const submitHandler = (event) => {
        // By default JS sends form data as request to Server when submit button is clicked. To avoid it we use below line.
        event.preventDefault();

        const enteredExpenseData = {
            title: title.charAt(0).toUpperCase() + title.slice(1),
            amount: parseFloat(amount),
            date: new Date(date)
        };
        props.onSaveExpenseData(enteredExpenseData);
        props.onCancel();

        setTitle('');
        setAmount('');
        setDate('');
    }

  return (  
        <div>
            <form onSubmit={ submitHandler }>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label htmlFor='title'>Title</label>
                        <input 
                            type='text' 
                            id='title' 
                            value={ title } 
                            onChange={ titleChangeHandler }
                            placeholder='Expense'
                            required
                        />
                    </div>
                    <div className='new-expense__control'>
                        <label htmlFor='amount'>Amount</label>
                        <input 
                            type='number' 
                            id='amount' 
                            min="0.01" 
                            step="0.01" 
                            value={ amount } 
                            onChange={ amountChangeHandler }
                            placeholder='$0.00'
                            required
                        />
                    </div>
                    <div className='new-expense__control'>
                        <label htmlFor='date'>Date</label>
                        <input 
                            type='date' 
                            id='date' 
                            min="2019-01-01" 
                            max="2023-12-31" 
                            value={ date } 
                            onChange={ dateChangeHandler }
                            required
                        />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='button' onClick={props.onCancel}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        </div>
  )
}

export default ExpenseForm;
