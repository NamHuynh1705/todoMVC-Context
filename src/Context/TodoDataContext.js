import React, { createContext, useState, useEffect } from 'react'

export const dataContext = createContext()


export default function TodoDataContext({ children }) {
    const todoLocal = JSON.parse(localStorage.getItem('todo')) ?? []
    const [todo, setTodo] = useState([...todoLocal])
    const [arrFilter, setArrFilter] = useState([])
    const [type, setType] = useState('All')
    const [editText, setEditText] = useState('')

    const handleCreate = (addName) => {
        if (addName.name.trim() !== "") {
            setTodo([...todo, addName])
        }
    }

    const handleCheck = (item) => {
        let arrActive = [...todo]
        let location = todo.indexOf(item)
        arrActive[location].status = !arrActive[location].status
        setTodo(arrActive)
    }

    const handleCheckAll = () => {
        let arrActive = [...todo]
        let arrStatus = []
        arrActive.forEach((item) => {
            arrStatus.push(item.status)
        })
        if (arrStatus.indexOf(false) !== -1) {
            arrStatus.fill(true)
        }
        else if (arrStatus.indexOf(false) === -1) {
            arrStatus.fill(false)
        }
        for (let i = 0; i < arrActive.length; i++) {
            for (let j = 0; j < arrStatus.length; j++) {
                arrActive[i].status = arrStatus[j]
            }
        }
        setTodo(arrActive)
    }

    // khi type hoặc todo có thay đổi thì Filter
    useEffect(() => {
        let arrFilter = []
        if (type === '' || type === 'All') {
            arrFilter = todo
        }
        else if (type === 'Active') {
            let arrActive = todo.filter(item => item.status !== true)
            arrFilter = arrActive
        }
        else if (type === 'Completed') {
            let arrCompleted = todo.filter(item => item.status === true)
            arrFilter = arrCompleted
        }
        setArrFilter(arrFilter)
    }, [type, todo])

    const handleDelete = (item) => {
        let newArr = [...todo]
        let location = todo.indexOf(item)
        newArr.splice(location, 1)
        setTodo(newArr)
    }

    const handleDeleteMany = () => {
        let newArr = todo.filter(item => item.status !== true)
        setTodo(newArr)
    }

    const handleGetValueEdit = (value) => {
        setEditText(value)
    }
    const handleEdit = (item) => {
        if (editText !== '') {
            let newArr = [...todo]
            let location = todo.indexOf(item)
            newArr[location].name = editText
            setTodo(newArr)
        }
    }

    // Context data để sử dụng
    const todoContextData = {
        todo,
        handleCreate,
        handleCheck,
        handleCheckAll,
        handleDelete,
        handleDeleteMany,
        handleGetValueEdit,
        handleEdit,
        arrFilter,
        setType,
        editText,
        setEditText
    }

    return (
        <div>
            <dataContext.Provider value={todoContextData}>
                {children}
            </dataContext.Provider>
        </div>
    )
}
