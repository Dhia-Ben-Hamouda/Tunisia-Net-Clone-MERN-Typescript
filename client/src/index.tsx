import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";
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
        },
        MuiRating:{
            styleOverrides:{
                iconFilled:{
                    color:"#FCC312"
                }
            }
        }
    }
})

root.render(
    <Router>
        <ThemeProvider theme={theme}>
            <StoreProvider store={store}>
                <App />
            </StoreProvider>
        </ThemeProvider>
    </Router>
)

