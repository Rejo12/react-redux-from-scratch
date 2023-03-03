import React, { useId, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
const Form = () => {
    const [firstName, setFirstName] = useLocalStorage('firstName', '');
    const [lastName, setLastName] = useLocalStorage('lastName', '')

    useEffect(() => {
        return () => {
            localStorage.removeItem('firstName')
            localStorage.removeItem('lastName')
        }
    })
    //  const [localValue, setLocalValue] = useLocalStorage('firstName', '')
    const randomId = useId()

    const handleChange = (type, e) => {
        e.persist()
        console.log(e.target.value)
        if (type === 'firstName') {
            // setFirstName(e.target.value)
            setFirstName(e.target.value)
        }
        else {
            setLastName(e.target.value)
        }
    }

    return (
        <div>
            <label htmlFor={`${randomId}-first-name`}>First name:</label>
            <input type="text" id={`${randomId}-first-name`} value={firstName} onChange={e => handleChange('firstName', e)} />
            <label htmlFor={`${randomId}-last-name`}>Last name:</label>
            <input type="text" id={`${randomId}-last-name`} value={lastName} onChange={e => handleChange('lastName', e)} />
        </div>
    )
}

export default Form;