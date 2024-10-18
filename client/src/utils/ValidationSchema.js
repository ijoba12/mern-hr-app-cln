import * as yup from "yup";

// for sign in
export const signInSchema = yup
  .object({
    email: yup
      .string()
      .required("email is required")
      .email("Invalid email format"),
    password: yup
      .string()
      .required("password is required")
      .min(8, "min lenght of password should be at least 8 chrs"),
  })
  .required();


  // for forgot password
export const forgotPasswordSchema = yup
.object({
  email: yup
    .string()
    .required("email is required")
    .email("Invalid email format"),
})
.required();

// for resetpasswordlink
export const resetPwdLinkSchema = yup
  .object({
    password: yup
      .string()
      .required("password is required")
      .min(8, "min lenght of password should be at least 8 chrs"),

    confirmPassword: yup
      .string()
      .required("confirm password is required")
      .min(8, "min lenght of password should be at least 8 chrs")
      .oneOf([yup.ref("password")], "Password do not match"),
  })
  .required();