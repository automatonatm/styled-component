import React, {useEffect, useState} from 'react';
import {Button, Input, PageLayout, PasswordInput, Spinner} from "components/common";
import styled from "styled-components";

const Form = styled.form`
    width: 100%;
    max-width: 400px;
    background: white;
    border: 1px solid #eee;
    padding: 16px;
    box-sizing: border-box;
    color: black;
    border-radius: 4px;
    .alt-text {
      text-align: center;
      margin: 10px 0;
    }
    
    >${Button}:first-of-type {
      margin-top: 40px;
    }
`


let timeOut;

const Login = () => {

    const [formFields, setFormFields] = useState({username: '', password: ''})

    const [loading, setLoading] = useState(false)

    const inputChangeHandler = (e) => {
        e.persist()
        setFormFields(s => ({
            ...s,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault()

        setLoading(true)
        timeOut = setTimeout(() => {
            setLoading(false)
        }, 3000)
    }


    useEffect(() => {
        return () => {
            if (timeOut) {
                clearTimeout(timeOut)
            }
        }
    }, [])


    return (

        <PageLayout>
            <h1>Login</h1>
            <Form onSubmit={submitHandler}>
                    {loading ? <Spinner/> : (
                        <>
                            <Input
                                name="username"
                                type="text"
                                placeholder="Username"
                                value={formFields.username}
                                onChange={inputChangeHandler}
                            />
                            <PasswordInput name="password" value={formFields.password} onChange={inputChangeHandler}/>
                        </>
                    )
                    }


                <Button large type="submit" disabled={loading}>Login</Button>
                {!loading && (
                    <>
                        <div className="alt-text">
                            or
                        </div>
                        <Button secondary type='button'>Register</Button>
                    </>
                )}

            </Form>
        </PageLayout>
    );
};

export default Login;
