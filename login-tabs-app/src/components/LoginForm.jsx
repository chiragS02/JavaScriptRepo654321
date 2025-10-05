import { useState } from "react";
import { validateLogin } from '../utils/validators';
import { login } from '../utils/auth';
import useForm from '../hooks/useForm';

export default function LoginForm({ onSuccess}) {
    const [authError, setAuthError] = useState('');

    const{values, errors, handleChange, handleSubmit} = useForm({
        initialValues: {emaail:'', password:''},
        validate: validateLogin,
        onSubmit: async (vals) => {
            setAuthError('');
            try {
                await login(vals);
                onSuccess?.();
            } catch (error) {
                setAuthError(error.message || 'Login Failed');
            }
        },
    });

    return (
        <form
            onSubmit={handleSubmit}
            aria-label="login-form"
            style={{
            width: 360,
            padding: 24,
            borderRadius: 16,
            background: '#ffffff',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
            }}>
                <h1 style={{ margin: '0 0 16px', fontSize: 22 }}>Login</h1>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="test@example.com"
                    style={{ width: '100%', padding: '10px 12px', marginTop: 6, marginBottom: 6 }} 
                    />
                    {errors.email ? (
                      <div role="alert" style={{ color: '#c0392b', marginBottom: 8 }}>{errors.email}</div>
                    ) : null}

                    <label htmlFor="password">Password</label>
                    <input
                    id="password"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    style={{ width: '100%', padding: '10px 12px', marginTop: 6, marginBottom: 6 }}
                    />
                    {errors.password ? (
                    <div role="alert" style={{ color: '#c0392b', marginBottom: 8 }}>{errors.password}</div>
                    ) : null}


                    <button type="submit" style={{ width: '100%', padding: '10px 12px', marginTop: 12 }}>
                    Sign In
                    </button>


                    {authError ? (
                    <div role="alert" style={{ color: '#c0392b', marginTop: 10 }}>{authError}</div>
                    ) : null}


                    <p style={{ color: '#666', marginTop: 16, fontSize: 12 }}>
                    Demo creds: <code>test@example.com</code> / <code>password</code>
                    </p>
            </form>
        );
}