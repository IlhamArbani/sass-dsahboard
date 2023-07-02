import { Link } from "react-router-dom";
import { ICFacebook, ICGoogle, ILLogin, mainLogo } from "../../assets";
import { Input, Button, CheckBox } from "../../components";

const Login = () => {
  return(
    <div className="flex">
      <div className="w-1/3 h-screen flex flex-col items-center justify-center">
        <img src={mainLogo} alt="logo sass dashboard" />
        <p className="font-bold text-2xl mt-10">Log In</p>
        <div className="w-4/5 mt-10">
          <div className="flex gap-x-2">
            <Button icon={ICGoogle}>
              Google
            </Button>
            <Button icon={ICFacebook}>
              Facebook
            </Button>
          </div>
          <div className="flex w-full bg-mainGray h-[2px] items-center justify-center mt-8">
            <p className="bg-white px-3">Or</p>
          </div>
          <div className="mb-6 mt-10 flex flex-col gap-y-5">
            <Input label='Email' type='text'/>
            <Input label='Password' type='password'/>
          </div>
          <div className="flex justify-between mb-10">
            <CheckBox label='Remember me'/>
            <p className="text-mainColor">Reset Password?</p>
          </div>
          <Button color='bg-mainColor' textColor='text-white'>
            Login
          </Button>
        </div>
        <p className="mt-7">Don’t have account yet? <Link to={'/signup'} className="text-mainColor">New Account</Link></p>
      </div>
      <div className="flex-grow h-screen bg-mainGray flex justify-center items-center">
        <img src={ILLogin} alt="" />
      </div>
    </div>
  )
}

export default Login;