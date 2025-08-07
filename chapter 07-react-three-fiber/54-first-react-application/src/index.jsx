import App from './app.jsx'
import './style.css'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))


root.render
(
    <>
        <App>Where i am?</App>
    </>  
)