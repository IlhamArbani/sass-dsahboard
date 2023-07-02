/* eslint-disable react/prop-types */
const CheckBox = (props) => {
  return (
    <div className="flex gap-x-2 items-baseline">
      <input type="checkbox"/>
      {
        props.children ?? <p>{props.label}</p>
      }
    </div>
  )
}

export default CheckBox;