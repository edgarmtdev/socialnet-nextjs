import { useState } from "react";
import { useDispatch } from 'react-redux'
import { Field, Form, Formik } from 'formik'
import { Button } from './styles'
import dynamic from "next/dynamic";
import { newPost } from "../../../features/posts";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { storage } from "../../../config/firebase";
import { ref, uploadBytes } from "firebase/storage";

const MDEditor = dynamic(
    () => import('@uiw/react-md-editor'),
    { ssr: false }
)

export default function FormComponent({ handlePost }) {

    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const [image, setImage] = useState();

    const changeImage = e => {
        console.log(e);
        setImage(e.target.files[0]);
        console.log(image);
    }

    const createPost = async (values, { setSubmitting }) => {

        const storageRef = ref(storage, `images/${image.name}`)

        uploadBytes(storageRef, image)
            .then(snapshot => {
                console.log(snapshot);
            })
        
        console.log(storageRef);

        // storageRef.put(image).then(data => {
        //     console.log(data);
        // })

        // if (url) {

        //     dispatch(newPost({
        //         image: url,
        //         content: value
        //     }))
        // }
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
                    console.log(data)
                    setValue(data)
                }} />
                <Field name='image' type='file' placeholder='Image URL'
                    className=' bg-[#212E36] p-2 rounded-md outline-none my-2 text-gray-200'
                    onChange={changeImage}
                />
                <Button type='submit'>POST</Button>
            </Form>
        </Formik>
    )
}
