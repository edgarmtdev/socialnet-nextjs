import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import {
  Button,
  FieldStyled,
  FormContainer,
  ContainerInputFile,
} from "./styles";
import { newPost } from "../../../features/posts";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { storage } from "../../../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function FormComponent({ handlePost }) {
  const [value, setValue] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const changeImage = (e) => setImage(e.target.files[0]);

  const createPost = (values, { setSubmitting }) => {
    const storageRef = ref(storage, `images/${image.name}`);
    uploadBytes(storageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        dispatch(
          newPost({
            image: url,
            content: value,
          })
        );
      });
    });
    setValue("");
    setImage(null);
  };

  return (
    <Formik
      onSubmit={createPost}
      initialValues={{
        content: "",
        image: "",
      }}
    >
      <FormContainer>
        <FieldStyled name="post" placeholder="Write" as={"textarea"} />

        <ContainerInputFile>
          <input type="file" name="src-file1" aria-label="Archivo" />
        </ContainerInputFile>
        <Button type="submit">POST</Button>
      </FormContainer>
    </Formik>
  );
}
