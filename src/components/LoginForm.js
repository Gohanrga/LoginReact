import React, {useState} from 'react'

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ name: '', email: '', password: '' });
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    const setName = e => {
        setDetails({ ...details, name: e.target.value });
    }

    const setEmail = e => {
        setDetails({ ...details, email: e.target.value });
    }

    const setPassword = e => {
        setDetails({ ...details, password: e.target.value });
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error !== "") ? (<div className="error">{error}</div>):""}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={setName} value={details.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={setEmail} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={setPassword} value={details.password}/>
                </div>
                <input type="submit" value="LOGIN"/>
            </div>
        </form>
    )
}

export default LoginForm
