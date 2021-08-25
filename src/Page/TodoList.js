import React, { useContext, useEffect } from 'react'
import Actions from '../Components/TodoList/Actions'
import Create from '../Components/TodoList/Create'
import List from '../Components/TodoList/List'
import '../style/TodoList.css'
import { dataContext } from '../Context/TodoDataContext'

export default function TodoList() {
    const { todo } = useContext(dataContext)

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo));
    }, [todo])

    let lengthTodo = todo.length
    return (
        <div>
            <h1 className="label-todo">todos context</h1>
            <div className='group-todo'>
                <div className="header">
                    <Create />
                </div>
                {lengthTodo > 0
                    ?
                    <>
                        <div className="main">
                            <List />
                        </div>
                        <div className="footer">
                            <Actions />
                        </div>
                    </>
                    :
                    ''
                }
            </div>
        </div>
    )
}
