import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";
import store from "./app/store";
import "./styles/index.scss";
import App from "./App";

const root = ReactDom.createRoot(document.getElementById("root")!);
const theme = createTheme({
    palette: {
        primary: {
            main: "#FCC312"
        }
    },
    components: {
        MuiSlider: {
            styleOverrides: {
                thumb: {
                    color: "#fff"
                }
            }
        }
    }
})

root.render(
    <Router>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    </Router>
)

