import * as Yup from "yup";

const checkoutValidatonSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email().required("Email is required"),
  phone: Yup.string()
    .matches(/^\d+$/, "Phone number must contain only digits")
    .required("Phone number is required"),
  cardName: Yup.string().required("Name on card is required"),
  cardNumber: Yup.string()
    .matches(/^\d{16}$/, "Card number must be 16 digits")
    .required("Card number is required"),
  expiry: Yup.string()
    .matches(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      "Expiration date must be in MM/YY format"
    )
    .required("Expiration date is required"),
  cvc: Yup.string()
    .matches(/^\d{3}$/, "CVC must be 3 digits")
    .required("CVC is required"),
  company: Yup.string(),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  postalCode: Yup.string()
    .matches(/^\d{5}$/, "Postal code must be 5 digits")
    .required("Postal code is required"),
});

export default checkoutValidatonSchema;
