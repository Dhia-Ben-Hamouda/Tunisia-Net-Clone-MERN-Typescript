import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "./app/store";
import { createTheme, ThemeProvider } from "@mui/material";
import "./styles/index.scss";
import App from "./App";

const root = ReactDom.createRoot(document.getElementById("root")!);
const theme = createTheme({
    palette:{
        primary:{
            main:"#FCC312"
        }
    }
})
const client = new QueryClient();

root.render(
    <QueryClientProvider client={client}>
        <Router>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <App />
                </Provider>
            </ThemeProvider>
        </Router>
    </QueryClientProvider>
)

