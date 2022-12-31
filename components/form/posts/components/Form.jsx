import { Form } from "formik";

function FormCustom({ children, className, ...props }) {
  return (
    <Form className={className} {...props}>
      {children}
    </Form>
  );
}

export default FormCustom;