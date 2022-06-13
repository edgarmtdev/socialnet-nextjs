import { Field, Form, Formik } from 'formik'
import { Button } from './styles'

export default function FormComponent({ handlePost }) {
    return (
        <Formik
            onSubmit={handlePost}
            initialValues={{
                content: '',
                image: ''
            }}>
            <Form className=' flex flex-col w-1/2'>
                <Field name='content' type='text' placeholder='Write...' />
                <Field name='image' type='text' placeholder='Image' />
                <Button type='submit'>POST</Button>
            </Form>
        </Formik>
    )
}
