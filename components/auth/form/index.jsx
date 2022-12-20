import { Form } from "formik";

export default function FormCustom({ children, className, ...props }) {
  return (
    <Form className={className} {...props}>
      {children}
    </Form>
  );
}
