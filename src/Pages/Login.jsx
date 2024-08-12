import Templete from "../components/Templete";
import loginImg from "../assets/login.png";

function Login({ setIsLoggedIn }) {
  return (
    <Templete
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Login;