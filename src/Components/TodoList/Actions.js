import React, { useContext } from 'react'
import '../../style/Actions.css'
import { dataContext } from '../../Context/TodoDataContext'

export default function Actions() {
    const { setType, todo, type, handleDeleteMany } = useContext(dataContext)

    let arrActive = todo.filter(item => item.status !== true)
    let arrCompleted = todo.filter(item => item.status === true)

    return (

        <div className='group-actions'>
            <p>{`${arrActive.length} items left`}</p>
            <ul className='filter'>
                <li className={type === 'All' ? 'active-filter' : ''} onClick={() => setType('All')}>All</li>
                <li className={type === 'Active' ? 'active-filter' : ''} onClick={() => setType('Active')}>Active</li>
                <li className={type === 'Completed' ? 'active-filter' : ''} onClick={() => setType('Completed')}>Completed</li>
            </ul>
            <p className='clear-all' onClick={() => handleDeleteMany()} style={arrCompleted.length > 0 ? { visibility: 'visible' } : { visibility: 'hidden' }}>Clear Completed</p>
        </div>
    )
}

