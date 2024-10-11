export const Input = ({ inputSize = 6, label, id, type = 'text', placeholder }) => {
    return (
        <div className={`col-md-${inputSize}`}>
            <label htmlFor={id} className='form-label'>{label}</label>
            <input type={type} className='form-control' id={id} placeholder={placeholder} />
        </div>
    )
}