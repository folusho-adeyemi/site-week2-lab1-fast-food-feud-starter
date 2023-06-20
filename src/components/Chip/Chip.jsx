import "./Chip.css"

export function Chip({ label = "", isActive = true }) {
  let buttonClassName;
  if (isActive === false){
    buttonClassName = "chip";
    return (
      <button className= {buttonClassName}>
        <p className="label">{label}</p>
        <span className="close" role="button">{`X`}</span>
      </button>
    )
  }
  else{
    buttonClassName = "chipactive";
    return (
      <button className= {buttonClassName}>
        <p className="label">{label}</p>
        <span className="close" role="button">{`X`}</span>
      </button>
    )
  }
}

export default Chip
