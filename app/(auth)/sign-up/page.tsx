"use client";

import { PATH } from "@/app/constants/path";
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from "@/app/constants/trading_view_widget";
import CountrySelectField from "@/components/Forms/CountrySelectField";
import FooterLink from "@/components/Forms/FooterLink";
import InputField from "@/components/Forms/InputField";
import SelectField from "@/components/Forms/SelectField";
import { Button } from "@/components/ui/button";
import { emailRegex } from "@/lib/Regexes/email";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology",
    },
    mode: "onBlur",
  });

  const onSignUpSubmit = async (data: SignUpFormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h1 className="form-title">Sign Up & Personalize</h1>
      <form onSubmit={handleSubmit(onSignUpSubmit)} className="space-y-5">
        <InputField
          name="fullName"
          label="Full Name"
          type="text"
          placeholder="John Doe"
          register={register}
          error={errors.fullName}
          validation={{ required: "Full name is required", minLength: 4 }}
        />
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
        <CountrySelectField
          name="country"
          label="Country"
          control={control}
          error={errors.country}
          required
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
        <SelectField
          name="investmentGoals"
          label="Investment Goals"
          placeholder="Select your investment goal"
          options={INVESTMENT_GOALS}
          error={errors.investmentGoals}
          control={control}
          required
        />
        <SelectField
          name="riskTolerance"
          label="Risk Tolerance"
          placeholder="Select your risk level"
          options={RISK_TOLERANCE_OPTIONS}
          error={errors.riskTolerance}
          control={control}
          required
        />
        <SelectField
          name="preferredIndustry"
          label="Preferred Industry"
          placeholder="Select your preferred industry"
          options={PREFERRED_INDUSTRIES}
          error={errors.preferredIndustry}
          control={control}
          required
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Creating Account" : "Start Your Investing Journey"}
        </Button>
        <FooterLink
          text="Already have an account ?"
          linkText="Sign in"
          href={PATH.SIGN_IN}
        />
      </form>
    </>
  );
};

export default SignUpPage;
