import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GiffApp } from './GiffApp';
//import { MyCounterApp } from './Counter/components/MyCounterApp';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GiffApp />
    {/* <MyCounterApp /> */}
  </StrictMode>,
)
