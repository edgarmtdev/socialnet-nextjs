import { useState } from "react";
import { useDispatch } from 'react-redux'
import { Field, Form, Formik } from 'formik'
import { Button } from './styles'
import dynamic from "next/dynamic";
import { newPost } from "../../../features/posts";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { storage } from "../../../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const MDEditor = dynamic(
    () => import('@uiw/react-md-editor'),
    { ssr: false }
)

export default function FormComponent({ handlePost }) {

    const [value, setValue] = useState('')
    const [image, setImage] = useState(null)
    const dispatch = useDispatch()

    const changeImage = e => setImage(e.target.files[0]);

    const createPost = (values, { setSubmitting }) => {
        const storageRef = ref(storage, `images/${image.name}`)
        uploadBytes(storageRef, image)
            .then(snapshot => {
                getDownloadURL(snapshot.ref)
                    .then(url => {
                        dispatch(newPost({
                            image: url,
                            content: value
                        }))
                    })
            })
        setValue('')
        setImage(null)
    }

    return (
        <Formik
            onSubmit={createPost}
            initialValues={{
                content: '',
                image: ''
            }}>
            <Form className='flex flex-col'>
                <MDEditor value={value} onChange={(data, event, editor) => {
                    setValue(data)
                }} />
                    <Field name='image' type='file' placeholder='Image URL'
                        className='p-2 bg-slate-700'
                        onChange={changeImage}
                    />
                <Button type='submit'>POST</Button>
            </Form>
        </Formik>
    )
}
