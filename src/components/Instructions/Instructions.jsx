import "./Instructions.css"

export function Instructions(props) {
  console.log(props)

  return (
    <aside className="instructions">
      <p>{props.instruction}</p>

    </aside>
  )
}

export default Instructions
