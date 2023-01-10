import { useState } from 'react'
import './ExpenseItem.style.css'

const ExpenseItem=(props)=>{
    const [item, setItem]= useState()
const clickHandler=()=>{

}
console.log(props.items)
    const {title,date,amount,id}=props.items
    
    return(
               <div>
        {props.items.map(expense=>(
            
            <div className='expense-item'>
               <div>{expense.date}</div>
               <div className='expense-item__description '>
                   <h2>{expense.title}</h2>
                   <div className='expense-item__price'>{expense.amount}</div>
               </div>
               <button onClick={clickHandler}>Change Title</button>
           </div>
           ))}
            </div>
                    
                
    )
}

export default ExpenseItem