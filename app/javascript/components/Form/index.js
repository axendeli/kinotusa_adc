import React, { useState, useCallback } from 'react';
import './index.scss'
import FormControl from "../FormControl";
import Button from "../Button";

const initState = {
    email: '',
    password: '',
    city: '',
};

const Form = () => {
    const [data, setData] = useState(initState);

    const handleSelect = useCallback(option => {
        setData({ ...data, city: option });
    }, [data])

    const handleInput = useCallback(name => e => {
        setData({
            ...data,
            [name]: e.target.value
        });
    }, [data]);

    const showDataInConsole = useCallback(() => {
        console.log(data)
    }, [data]);

    const getCity = () => {
        return [
            { value: 'moscow', label: 'Moscow' },
            { value: 'saint-petersburg', label: 'Saint-Petersburg' },
            { value: 'kazan', label: 'Kazan' }
        ];
    };
    return (
        <div className="example">
            <div className='example__components'>
                <div className="example__item example__inputs">
                    <div className='example__title'>
                        <h3>Input</h3>
                    </div>
                    <FormControl
                        placeholder='Email'
                        className='formItem'
                        type='email'
                        required
                        value={data.email}
                        onChange={handleInput('email')}
                        min='3'
                        max='60'
                    />
                    <FormControl
                        placeholder='Password disabled'
                        className='formItem'
                        type='password'
                        disabled
                        required
                        value={data.password}
                        onChange={handleInput('password')}
                        min='3'
                        max='60'
                    />
                </div>
                <div className="example__item example__selects">
                    <div className='example__title'>
                        <h3>Select</h3>
                    </div>
                    <FormControl
                        label='City'
                        className='formItem'
                        options={getCity()}
                        onChange={handleSelect}
                        select
                    />
                </div>
                <div className="example__item example__buttons">
                    <div className='example__title'>
                        <h3>Button</h3>
                    </div>
                    <div className='example__actions'>
                        <Button type='submit' variant='large'>Button</Button>
                    </div>
                    <div className='example__actions'>
                        <Button type='submit' variant='large' icon>Button with icon</Button>
                    </div>
                    <div className='example__actions'>
                        <Button type='submit' className='secondary' variant='large'>Button secondary</Button>
                    </div>
                    <div className='example__actions'>
                        <Button type='submit' variant='text'>Button text</Button>
                    </div>
                    <div className='example__actions'>
                        <Button type='submit' variant='large' disabled>Button disabled</Button>
                    </div>
                </div>
            </div>
            <div className='example__actions'>
                <Button type='submit' variant='large' onClick={showDataInConsole}>Show data in console</Button>
            </div>
        </div>
    );
};

export default Form;
ss
