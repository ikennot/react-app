import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Profile from "./picname";

createRoot(document.querySelector('.picture')).render(
    <StrictMode>
        <Profile/>
    </StrictMode>
)