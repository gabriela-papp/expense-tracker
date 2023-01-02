import { useState } from 'react'
import './ExpenseItem.style.css'

const ExpenseItem=(expense)=>{
    const [item, setItem]= useState()
const clickHandler=()=>{

}

    const {title,date,amount}=expense.expense
    {console.log(expense.expense)}
    return(
        <div className='expense-item'>
            <div>{date}</div>
            <div className='expense-item__description '>
                <h2>{title}hello</h2>
                <div className='expense-item__price'>{amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    )
}

export default ExpenseItem