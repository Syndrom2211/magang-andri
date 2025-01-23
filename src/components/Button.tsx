

interface ButtonProps {
    label: string;
    id?: string;
}

function Button ({label, id}: ButtonProps) {
    return (
        <div className="container-button">
            <button id={id}>{label}</button>
        </div>
    )
}

export default Button;