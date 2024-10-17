export const Button = ({ inputSize = 12, label, type, cor }) => {
    return (
        <div className={`d-grid gap-2 col-${inputSize} form-label`}>
            <button type={type} className={`btn ${cor}`}>{label}</button>
        </div>
    )
}