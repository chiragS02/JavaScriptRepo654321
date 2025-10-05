import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
    const [active, setActive] = useState('home');

    return (
        <div style={{display: 'flex', minHeight: '100vh'}}>
            <Sidebar active={active} onSelect={setActive} />
            <main style={{ flex: 1,padding:24}}>
                {active === 'home' && <EmptyState title="Home" />}
                {active === 'reports' && <EmptyState title="Reports" />}
                {active === 'settings' && <EmptyState title="Settings" />}
            </main>
        </div>
    )
};

function EmptyState({title}) {
    return (
        <div aria-label="empty-tab" style={{
        border: '2px dashed #cbd5e1',
        borderRadius: 16,
        padding: 24,
        display: 'grid',
        placeItems: 'center',
        minHeight: 240,
        }}
        >
            <div>
                <h1 style={{margin : 0}}>{title}</h1>
                <p style={{ color: '#64748b' }}>Nothing here yet</p> 
            </div>
        </div>
    );
}