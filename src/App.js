import {useState} from 'react'
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense";
 
const initialExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date:new Date(2020, 7, 14)
    
  },
  { id: 'e2', title: 'New TV', amount: 799.49,date:new Date(2020,9,1) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date:new Date(2020,10,17)
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021,1,31)
  },
];
function App() {
  const [expenses,setExpenses]=useState(initialExpenses)
  const addExpenseHandler=(expense)=>{
    setExpenses([expense,...expenses])
    console.log(expenses)
  }
  return (
    <div>
      <h2 className="title">Expense Tracker</h2>
      <NewExpense addExpense={addExpenseHandler}/>
      <ExpenseItem items={expenses}/>
      </div>
  );
}

export default App;
