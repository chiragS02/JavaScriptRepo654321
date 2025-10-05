import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import LoginForm from './components/LoginForm';

export default function App() {
    const [authed, setAuthed] = useState(false);

    return authed ? (
        <Dashboard /> 
    ): (
        <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#f5f6f8' }}>
<LoginForm onSuccess={() => setAuthed(true)} />
</div>
        )
    
}