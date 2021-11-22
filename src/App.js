import './App.css';
import {AppBar, createTheme, CssBaseline, ThemeProvider, Toolbar} from "@mui/material";
import React from "react";
import {Outlet} from "react-router-dom";

function App() {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#677DB7'
            },
            secondary: {
                main: '#54A3F2'
            },
            error: {
                main: '#F34213'
            },
            warning: {
                main: '#E0CA3C'
            },
            info: {
                main: '#D7D9B1'
            },
            success: {
                main: '#4BC6B9'
            },
            background: {
                default: '#333333',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <CssBaseline/>
                <AppBar position={'static'}>
                    <Toolbar>
                    </Toolbar>
                </AppBar>
                <div style={{marginTop: '20px'}}>
                    <Outlet/>
                </div>
            </React.Fragment>
        </ThemeProvider>
    );
}

export default App;
