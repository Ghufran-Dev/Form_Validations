import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
const schema = Yup.object().shape({
  name: Yup.string().required("Name required"),
  email: Yup.string().email('invalid').required('email required')
})
const FormPage = () => {
  return (
    <div>
      <Formik
        validationSchema={schema}
        initialValues={{
          name: "",
          email: ""
        }}
        onSubmit={values => {
          console.log(values)
        }}
      >
        <Form className="flex flex-col gap-8 max-w-lg mx-auto mt-10">
          <div className="text-[2rem] flex flex-col justify-center gap-6">
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" id="name" placeholder="Name" className="border" />
            <div className="text-red-800 text-2xl">
              <ErrorMessage name="name" />
            </div>
          </div>
          <div className="text-[2rem] flex flex-col justify-center gap-6">
            <label htmlFor="">Email</label>
            <Field name="email" placeholder="Email" className="border" />
            <div className="text-2xl text-red-800">
              <ErrorMessage name="email" />
            </div>
          </div>
          <button type="submit" className="bg-orange-500 p-4 text-[2rem]">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default FormPage