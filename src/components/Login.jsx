import React from 'react';
import {useNavigate} from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const onSingin = () => {
        navigate("/todo");
    };

    return (
        <div>
            <form onSubmit={onSingin}>
                <input type="email" /><br />
                <input type="password" /><br />
                <button type='submit'>로그인</button>
            </form>
        </div>
    );
};

export default Login;