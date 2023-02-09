import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// deprecated way of rendering the application
// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById("root"),
// );

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
