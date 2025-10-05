import { useCallback, useState } from 'react';


/**
 * Minimal reusable form hook
 * @param {object} options
 * @param {object} options.initialValues - initial field values
 * @param {(values:object)=>object} [options.validate] - returns { field: message }
 * @param {(values:object)=>void|Promise<void>} [options.onSubmit]
 */
export default function useForm({ initialValues = {}, validate, onSubmit } = {}) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});


    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setValues((v) => ({...v, [name]: value }));
    }, []);


    const handleSubmit = useCallback(async(e) => {
        e.preventDefault(); 
        const nextErrors = validate ? validate(values) : {};
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length === 0) {
            await onSubmit(values); 
        }
    }, [validate, values, onSubmit]);



    const reset = useCallback(() => setValues(initialValues), [initialValues]);


    return { values, errors, setValues, setErrors, handleChange, handleSubmit, reset };
}