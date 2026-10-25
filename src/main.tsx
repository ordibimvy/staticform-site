import { createRoot } from 'react-dom/client'
import './tokens.css'
import './index.css'
import App from './App.tsx'

// No StrictMode: the Framer runtime is not idempotent across double-mounts
createRoot(document.getElementById('root')!).render(<App />)
