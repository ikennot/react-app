import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Profile from "./picname";
import Greetings from "./Greet";
import Packs from "./PracticeAssets/CheckList";
import App from "./PracticeAssets/listing";
createRoot(document.querySelector('.picture')).render(
    <StrictMode>
        <Profile/>
        <Greetings/>
    </StrictMode>
)


createRoot(document.querySelector('.listing')).render(
    <StrictMode>
        <Packs/>
    </StrictMode>
)


createRoot(document.querySelector('.taskings')).render(
    <StrictMode>
        <App/>
    </StrictMode>
)