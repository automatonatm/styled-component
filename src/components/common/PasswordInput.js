import React, {useState} from 'react';
import styled from 'styled-components'
import {Input} from "./Input";

const PasswordInputStyled = styled(Input).attrs(() => ({
    type: 'password',
    placeholder: "Password"
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`


const PasswordInputWrapper = styled.div`
  display: flex;
  ~div {
  margin-bottom: 8px;
  }
`

const ButtonToggle = styled.button`
  background: white;
  height: 40px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-left: 0;
  display: flex;
  padding: 8px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px; 
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  color: black;
`


export const PasswordInput = (props) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <>
            <PasswordInputWrapper>
                <PasswordInputStyled  {...props}/>
                <ButtonToggle type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</ButtonToggle>

            </PasswordInputWrapper>
                <div>
                    {showPassword ? props.value : ''}
                </div>


        </>
    );
};


