import * as yup from "yup";

export const ContactSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone is required"),

  message: yup.string().required("Message is required"),
});
