import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";

export default function Login() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    history.push("/");
  };
  const logState = useContext(UserContext);
  const setAuth = () => {
    logState.setIsLogged(true);
  };

  return (
    <>
      <div>
        <h1>Login</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="password"
          {...register("userName", { required: true, maxLength: 15 })}
        />
        <span>{errors.userName && <p>Username is required</p>}</span>
        <input
          type="password"
          {...register("password", { required: true, minLength: 6 })}
        />
        <span>{errors.password && <p>Enter your password</p>}</span>
      </form>
    </>
  );
}
