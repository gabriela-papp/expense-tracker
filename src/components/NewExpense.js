import ExpenseForm from './ExpenseForm'
import './NewExpense.css'


const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.addExpense(expenseData)
        console.log(expenseData)
    }
 return <div className='new-expense'>
    <ExpenseForm saveExpenseData={saveExpenseDataHandler}/>
 </div>
}

export default NewExpense