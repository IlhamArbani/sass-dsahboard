/* eslint-disable react/prop-types */

const Button = (props) => {
  return (
    <button className={`flex py-3 rounded-md justify-center w-full gap-x-2 ${props.color}`}>
      <img src={props.icon} alt="" />
      <p className={`${props.textColor}`}>{props.children}</p>
    </button>
  )
}

Button.defaultProps = {
  color: 'bg-mainGray',
  textColor: 'text-black'
}

export default Button;