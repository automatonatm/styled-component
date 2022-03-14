import  React, {useState} from "react";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "components/pages/Home";
import Login from "components/pages/Login";

import LightTheme from 'themes/light'
import DarkTheme from 'themes/dark'


const GlobalStyle = createGlobalStyle`
  body {
    background: ${p => p.theme.bodyBackgroundColor};
    min-height: 100vh;
    margin: 0;
    color: ${p => p.theme.bodyFontColor};
    font-family: 'Kaushan Script';
  }
`


function App() {


    const [theme, setTheme] = useState(LightTheme)

    return (
        <ThemeProvider theme={{...theme, setTheme: () => {
            setTheme(state => state.id === 'light' ? DarkTheme : LightTheme)
            }}}>
            <Router>
            <GlobalStyle/>

            <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path="/login"  element={<Login/>}/>
            </Routes>

            </Router>
        </ThemeProvider>


    );
}

export default App;
