
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense";
 
function App() {
  const expenses = [
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
  return (
    <div>
      <h2 className="title">Expense Tracker</h2>
      <NewExpense/>
      {expenses.map((expense)=>{
        return <ExpenseItem key={expense.id} expense={expense}> 
        </ExpenseItem>
      })}
      </div>
  );
}

export default App;
