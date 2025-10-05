
const TABS = [
    { key: 'home', label: 'Home'},
    { key: 'reports', label: 'Reports'},
    { key: 'settings', label: 'Settings'},
];

export default function Sidebar({ active, onSelect}) {
    return (
        <aside 
        aria-label="sidebar"
        style={{width:220, background: '#0f172a', color: 'white', padding:12 , minHeight: '100vh'}}
        >
            <h2 style={{ fontSize: 18, margin: '8px 6px 16px' }}>My App</h2>
            <nav>
                {TABS.map((t) => (
                    <button 
                    key={t.key}
                    onClick={() => onSelect?.(t.key)}
                    aria-current={active === t.key ? 'page': undefined}
                    style={{
                        display: 'block', width: '100%', textAlign: 'left', padding: '10px 12px',
                        marginBottom: 6, borderRadius: 8,
                        background: active === t.key ? '#1f2937' : 'transparent', color: 'inherit',
                        border: '1px solid rgba(255,255,255,0.08)'
                        }}>
                        {t.label}
                    </button>
                ))}
            </nav>
        </aside>
    );
}