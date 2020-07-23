import * as yup from 'yup'

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
  first_name: yup
    .string()
    .min(3, "Enter your full name")
    .required("Name is Required"),
  password: yup
    .string()
    .min(8, "Password must be 8 character long")
    .required("Password is Required")
})

export default formSchema
