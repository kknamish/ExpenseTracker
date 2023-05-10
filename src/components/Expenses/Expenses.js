import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear().toString();

  const [filteredYear, setFilteredYear] = useState(currentYear);
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.items.filter((expense) => (expense.date.getFullYear().toString() === filteredYear));

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={ filterChangeHandler } />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
