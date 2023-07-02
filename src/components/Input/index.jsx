/* eslint-disable react/prop-types */
const Input = (props) => {
  return (
    <div>
      <p className="mb-2">{props.label}</p>
      <input
        className="bg-mainGray w-full py-2 px-3 rounded-md focus:outline-none"
        type={props.type}
        name=""
        id=""
      />
    </div>
  )
}

export default Input;