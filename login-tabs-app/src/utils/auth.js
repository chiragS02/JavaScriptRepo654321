export async function login({ email, password }) {
    // Simulate async latency without slowing tests (0ms)
    await new Promise((r) => setTimeout(r, 0));
    if (email === 'test@example.com' && password === 'password') {
        const token = 'fake-token';
        try {
            localStorage.setItem('token', token);
        } catch {}
        return { token, user: { email } };
    }
    throw new Error('Invalid credentials');
}