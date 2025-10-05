export function isEmail(str = '') {
    return /\S+@\S+\.\S+/.test(String(str).trim());
}
export function isNonEmpty(str = '') {
    return String(str).trim().length > 0;
}

export function minLength(str = '', n = 1) {
    return String(str).length >= n;
}


export function validateLogin({ email, password }) {
    const errors = {};
    if (!isEmail(email)) errors.email = 'Enter a valid email';
    if (!isNonEmpty(password)) errors.password = 'Password is required';
    else if (!minLength(password, 4)) errors.password = 'Password must be at least 4 chars';
    return errors;
}