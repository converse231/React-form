import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required"),
    email: yup.string().email().required("A valid email is required"),
    age: yup
      .number()
      .positive()
      .integer()
      .min(18)
      .required("You must be 18 years old or above"),
    password: yup
      .string()
      .min(4)
      .max(20)
      .required("Password must be between 4 and 20 characters"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Full Name..."
          {...register("fullName")}
        />
        {errors.fullName && <p>{errors.fullName.message}</p>}
        <input type="text" placeholder="Email..." {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
        <input type="number" placeholder="Age..." {...register("age")} />
        {errors.age && <p>{errors.age.message}</p>}
        <input
          type="password"
          placeholder="Password..."
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          type="password"
          placeholder="Confirm mo Password mo 123..."
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
