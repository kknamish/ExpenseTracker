import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Footer from './components/Footer';

const DUMMY_EXPENSES = [
  {
    id: '1',
    title: 'Car Insurance',
    amount: 23.99,
    date: new Date(2021, 5, 12)
  },
  {
    id: '2',
    title: 'Travel',
    amount: 50,
    date: new Date(2022, 1, 23)
  },
  {
    id: '3',
    title: 'Snacks',
    amount: 12.49,
    date: new Date(2023, 11 , 12)
  }
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  console.log(expenses);

  return (
    <>
      <header><h2><center>Expense Tracker.</center></h2></header>

      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <Footer />
    </>
  );
}

export default App;