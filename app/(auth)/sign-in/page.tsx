"use client"

import { PATH } from "@/app/constants/path";
import FooterLink from "@/components/Forms/FooterLink";
import InputField from "@/components/Forms/InputField";
import { Button } from "@/components/ui/button";
import { emailRegex } from "@/lib/Regexes/email";
import { useForm } from "react-hook-form";

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSignInSubmit = async (data: SignInFormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="form-title">Login In Your Account</h1>
      <form onSubmit={handleSubmit(onSignInSubmit)} className="space-y-5">
        <InputField
          name="email"
          label="Email"
          type="email"
          placeholder="contact@gmail.com"
          register={register}
          error={errors.email}
          validation={{
            required: "Email is required",
            pattern: emailRegex,
            message: "Valid email address is required",
          }}
        />
        <InputField
          name="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          register={register}
          error={errors.password}
          validation={{ required: "password is required", minLength: 8 }}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Signing Into Your Account" : "Sign In "}
        </Button>
        <FooterLink
          text="Don't have an account ?"
          linkText="Register"
          href={PATH.SIGN_UP}
        />
      </form>
    </>
  );
};

export default SignInPage;
