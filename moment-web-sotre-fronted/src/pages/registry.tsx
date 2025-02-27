import { Navigate, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { LoginForm, ProFormInstance } from '@ant-design/pro-components';
import React from "react";

const Registry = () => {
    const navigate = useNavigate();
    const formRef = useRef<ProFormInstance>(null);

    const backToLogin = () => {
        navigate('/login');
    }


    return (
        <div style={{ backgroundColor: 'white', height: '100vh' }}>
            <LoginForm

            ></LoginForm>
        </div>
    )


}