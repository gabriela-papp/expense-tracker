import { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.style.css'

const ExpenseItem=(props)=>{
    const {title,date,amount,id}=props.items
    const [item, setItem]= useState()
    
    return(
               <div>
        {props.items.map(expense=>(
             <div className='expense-item' key={expense.id}>
               <ExpenseDate date={expense.date}/>
               <div className='expense-item__description '>
                   <h2>{expense.title}</h2>
                   <div className='expense-item__price'>£ {expense.amount}</div>
               </div>
               
           </div>
           ))}
            </div>
                    
                
    )
}

export default ExpenseItem