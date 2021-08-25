import React, { useContext, useState } from 'react'
import '../../style/List.css'
import ItemList from './ItemList';
import { dataContext } from '../../Context/TodoDataContext'

export default function List() {
    const { arrFilter } = useContext(dataContext)
    const [edit, editing] = useState()

    return (
        <div className='todo-list'>
            <ul className='ul-todo'>
                {arrFilter && arrFilter.map((item, index) => {
                    return (
                        <ItemList key={index} item={item} edit={edit} editing={editing} />
                    )
                })}
            </ul>
        </div>
    )
}
