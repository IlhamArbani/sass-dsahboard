import { Link } from "react-router-dom";
import { ICFacebook, ICGoogle, ILLogin, mainLogo } from "../../assets";
import { Input, Button, CheckBox } from "../../components";

const SignUp = () => {
  return (
    <div className="flex">
      <div className="w-1/3 min-h-screen flex flex-col items-center py-4">
        <img src={mainLogo} alt="logo sass dashboard" />
        <p className="font-bold text-2xl mt-10">Sign Up</p>
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
            <Input label='Full Name' type='text'/>
            <Input label='Email' type='text'/>
            <Input label='Username' type='text'/>
            <Input label='Password' type='password'/>
          </div>
          <div className="flex items-start mb-10">
            <CheckBox>
              <p>By creating an account you agree to the <Link className="text-mainColor underline">terms of use</Link> and our <Link className="text-mainColor underline">privacy policy.</Link></p>
            </CheckBox>
          </div>
          <Button color='bg-mainColor' textColor='text-white'>
            Create account
          </Button>
        </div>
        <p className="mt-7">Already have an account? <Link to={'/login'} className="text-mainColor">Log in</Link></p>
      </div>
      <div className="flex-grow bg-mainGray flex justify-center items-center">
        <img src={ILLogin} alt="" />
      </div>
    </div>
  )
}

export default SignUp;