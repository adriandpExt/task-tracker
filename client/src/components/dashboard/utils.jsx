import * as yup from "yup";

export const validationSchema = yup.object({
  todo: yup.string().required("Description is required"),
  
  status: yup.string().required("Status type is required"),
});

export const initialState = {
  userId: "",
  todo: "",
  // calendarDate: "",
  // status: "",
};

export const emoji = [
  "emojione:red-circle",
  "twemoji:yellow-circle",
  "twemoji:green-circle",
];
