import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
        <h1>Login</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("userName", { required: true, maxLength: 15 })} />
        <span>{errors.userName && <p>Username is required</p>}</span>
        <input {...register("password", { required: true, minLength: 20 })} />
        <span>{errors.password && <p>Enter your password</p>}</span>
      </form>
    </>
  );
}
export default Login;
