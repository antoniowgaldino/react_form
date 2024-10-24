export const Button = ({ inputSize = 12, label, type, cor, onClick }) => {
    return (
        <div className={`d-grid gap-2 col-${inputSize} form-label`}>
            <button
                type={type}
                className={`btn ${cor}`}
                onClick={onClick}>
                {label}
            </button>
        </div>
    )
}