import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";
import {
  AuthButtons,
  FieldsContainer,
  FormContainer,
  FormStyled,
  ImageContainer,
} from "../form/styles";
import { FieldStyled } from "../field/styles";
import { ButtonAuth, Title } from "../styles";
import { Formik } from "formik";
import SectionProvider from "../../form/provider";
import BarSignIn from "../bar";
import { useRouter } from "next/router";

export default function LoginModule() {
  const router = useRouter();

  const login = (values, { setSubmitting, setErrors }) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        setSubmitting(false);
        router.replace("/home");
      })
      .catch(() => {
        setSubmitting(false);
        setErrors({
          credentials: "Las credenciales son incorrectas",
        });
      });
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={login}>
      {({ errors }) => {
        return (
          <>
            <FormStyled>
              <ImageContainer>
                {/* <img src={"/img/login.jpg"} alt="img"></img> */}
              </ImageContainer>
              <FormContainer>
                <FieldsContainer>
                  <Title>Welcome again!</Title>
                  {errors && (
                    <span className="text-red-500 text-center">
                      {errors.credentials}
                    </span>
                  )}
                  <FieldStyled placeholder="Email" type="email" name="email" />
                  <FieldStyled
                    placeholder="Password"
                    type="password"
                    name="password"
                  />
                  <p>Forgot password?</p>
                </FieldsContainer>
                <AuthButtons>
                  <ButtonAuth type="submit">Sign In</ButtonAuth>
                  <BarSignIn />
                  <SectionProvider />
                </AuthButtons>
              </FormContainer>
            </FormStyled>
          </>
        );
      }}
    </Formik>
  );
}
