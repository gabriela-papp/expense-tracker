import {useState} from 'react'
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense";
 
const initialExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    
  },
  { id: 'e2', title: 'New TV', amount: 799.49, },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    
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
