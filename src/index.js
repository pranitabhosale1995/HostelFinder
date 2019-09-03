import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";

//M-UI
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: { main: orange[700] },
    },
});


//-> App START
import App from "appRoot/app.js";



render(
    <ThemeProvider theme={theme}>
        <HashRouter>
            <App />
        </HashRouter>
    </ThemeProvider>,
    document.getElementById("aiRoot")
);



if ('serviceWorker' in navigator) {
    //navigator.serviceWorker.register('/service-worker.js');
}