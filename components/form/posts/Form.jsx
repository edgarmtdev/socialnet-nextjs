import { useState } from "react"; 
import { useDispatch } from 'react-redux'
import { Field, Form, Formik } from 'formik'
import { Button } from './styles'
import dynamic from "next/dynamic";
import { newPost } from "../../../features/posts";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MDEditor = dynamic(
    () => import('@uiw/react-md-editor'),
    { ssr: false }
)

export default function FormComponent({ handlePost }) {

    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const createPost = (values, { setSubmitting }) => {
        dispatch(newPost({
            image: values.image,
            content: value
        }))
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
                <Field name='image' type='text' placeholder='Image URL' 
                    className=' bg-[#212E36] p-2 rounded-md outline-none my-2 text-gray-200'/>
                <Button type='submit'>POST</Button>
            </Form>
        </Formik>
    )
}
