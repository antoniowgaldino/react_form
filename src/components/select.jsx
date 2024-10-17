export const Select = ({ inputSize = 6, label, id, selected }) => {
    return (
        <div className={`col-md-${inputSize}`}>
            <label htmlFor={id} className='form-label'>{label}</label>
            <select id={id} className="form-select">
                <option selected>{selected}</option>
                <option>...</option>
            </select>
        </div>
    )
}