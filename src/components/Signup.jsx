import React from 'react';
import {useNavigate} from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const onSingup = () => {
        navigate("/signin");
    };

    return (
        <div>
            <form onSubmit={onSingup}>
                <input type="email" /><br />
                <input type="password" /><br />
                <button type='submit'>회원가입</button>
            </form>
        </div>
    );
};

export default Signup;