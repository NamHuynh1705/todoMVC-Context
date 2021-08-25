import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { dataContext } from '../../Context/TodoDataContext'

export default function ItemList(props) {
    const { handleCheck, handleDelete, handleGetValueEdit, handleEdit, editText, setEditText } = useContext(dataContext)
    const { item, edit, editing } = props

    const onCheck = (item) => {
        handleCheck(item)
    }

    const onDoubleClick = (item) => {
        editing(item.id)
        setEditText(item.name)
    }

    const getValue = (e) => {
        handleGetValueEdit(e.target.value)
    }

    const handleSubmit = (e, item) => {
        if (e.key === 'Enter' || e.key === 'Escape') {
            handleEdit(item)
            editing(null)
        }
    }

    const changeInputEdit = (item) => {
        if (edit === item.id) {
            return (
                <input className='edit' value={editText} onChange={(e) => getValue(e)} onKeyDown={(e) => handleSubmit(e, item)} autoFocus />
            )
        } else return (<div className={!item.status ? 'name' : 'name-active'}>{item.name}</div>)
    }

    const onBlurHandler = (item) => {
        handleEdit(item)
        editing(null)
    }

    return (
        <div>
            <li className={edit === item.id ? 'editing li-todo' : 'li-todo'}
                onDoubleClick={() => onDoubleClick(item)}
                onBlur={() => onBlurHandler(item)}
            >
                <div className='round'>
                    <input type="checkbox" checked={item.status} id={`checkbox_${item.id}`} onChange={() => onCheck(item)} />
                    <label htmlFor={`checkbox_${item.id}`}></label>
                    {changeInputEdit(item)}
                    <FaTimes className='button-delete' onClick={() => handleDelete(item)} />
                </div>
            </li>
        </div>
    )
}
