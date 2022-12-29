import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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
import { useDispatch } from "react-redux";
import { signUp } from "../../../features/auth";
import { useState } from "react";
import { ImSpinner } from "react-icons/im";

export default function SignupModule() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const signup = async (values, { setSubmitting, setErrors }) => {
    setLoading(true);
    dispatch(
      signUp({
        update: false,
        ...values,
      })
    ).then(() => {
      createUserWithEmailAndPassword(auth, values.email, values.password).then(
        (result) => {
          updateProfile(result.user, {
            displayName: values.name,
            photoURL: values.profilePic,
          });
          dispatch(
            signUp({
              update: true,
              email: result.email,
              provider: result.user.providerId,
              idProvider: result.user.uid,
            })
          );
          setLoading(false);
        }
      );
    });
    // const newUser = await axios.post('/api/auth/signup', { update: false, ...values })

    /*TODO: refactor errors*/
  };

  return (
    <Formik
      initialValues={{
        name: "",
        profilePic: "",
        background: "",
        email: "",
        password: "",
      }}
      onSubmit={signup}
    >
      {({ errors }) => {
        return (
          <>
            <FormStyled>
              <ImageContainer>
                {/* <img src={"/img/login.jpg"} alt="img"></img> */}
              </ImageContainer>
              <FormContainer>
                <FieldsContainer>
                  {loading && <ImSpinner className="text-white animate-spin" />}
                  <Title>Register now!</Title>
                  {errors && (
                    <p className="text-red-500 text-center">
                      {errors.credentials}
                    </p>
                  )}
                  <FieldStyled
                    placeholder="Enter your name..."
                    type="text"
                    name="name"
                  />
                  <FieldStyled
                    placeholder="Enter your profile picture..."
                    type="text"
                    name="profilePic"
                  />
                  <FieldStyled
                    placeholder="Enter your background page..."
                    type="text"
                    name="background"
                  />
                  <FieldStyled
                    placeholder="Enter your email"
                    type="email"
                    name="email"
                  />
                  <FieldStyled
                    placeholder="Enter your password"
                    type="password"
                    name="password"
                  />
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
