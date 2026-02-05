const Button = ({
    type,
    text,
    className,
    onClick
}) => (
    <button type={type} className={className} onClick={onClick}>{text}</button>
)

export default Button;