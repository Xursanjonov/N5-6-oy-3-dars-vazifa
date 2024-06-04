import React, { memo } from 'react'
import './sign-in.css'

const SignIn = () => {
    return (
        <section className='form-control'>
            <form className='form-group'>
                <h1>Sign in</h1>
                <label className="label-form">
                    <input type="email" placeholder="email" />
                </label>
                <label className="label-form">
                    <input type="password" placeholder="password" />
                </label>
            </form>
        </section>
    )
}

export default memo(SignIn)