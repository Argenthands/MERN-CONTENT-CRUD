import { useNavigate } from "react-router-dom"
import { usePosts } from "../context/postContext"
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
} from 'formik'
import * as Yup from "yup"

export function PostForm() {

    const { createPost } = usePosts()
    const navigate = useNavigate()

    return (
        <>
            <Formik
                initialValues={{
                    title: '',
                    description: ''
                }}
                validationSchema={Yup.object({
                    title: Yup.string().required('Title is Required'),
                    description: Yup.string().required('Descritpion is Required')
                })}
                onSubmit={ async (values, actions ) => {
                    await createPost(values)
                    navigate('/')
                }}
            >
                {({ handleSubmit }) => (
                    
                    <Form onSubmit={ handleSubmit }>
                        <Field placeholder="Title" name="title" />
                        <ErrorMessage name="title" component="p" />
                        <Field placeholder="Description" name="description" />
                        <ErrorMessage name="description" component="p" />
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}
