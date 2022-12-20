import { Field } from "formik";

const FormField = ({ className, ...props }) => (
  <Field className={className} {...props} />
);

export default FormField;
