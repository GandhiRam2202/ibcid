import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
        .required("Phone number is required"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    message: Yup.string().optional(),
});

const ContactForm = () => {
    return (
        <div className="container mt-4 p-0">

            <Formik
                initialValues={{ name: "", phone: "", email: "", message: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    const data = {
                        ...values,
                        message: values.message.replace(/\n/g, " ")
                    };
                    console.log(data);
                    
                    alert("Form Submitted Successfully!");
                    resetForm();
                }}
            >
                {() => (
                    <Form className="border p-2 shadow">
                        <h3 className="mb-3 fw-bold font text-center">Send Us E-Mail</h3>

                        {/* Name */}
                        <div className="mb-3">
                            <label className="form-label fw-bold">Name <span className="font">*</span></label>
                            <Field name="name" className="form-control" />
                            <ErrorMessage
                                name="name"
                                component="small"
                                className="text-danger"
                            />
                        </div>

                        {/* Phone */}
                        <div className="mb-3">
                            <label className="form-label fw-bold">Phone Number <span className="font">*</span></label>
                            <Field name="phone" className="form-control" />
                            <ErrorMessage
                                name="phone"
                                component="small"
                                className="text-danger"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-3">
                            <label className="form-label fw-bold">Email <span className="font">*</span></label>
                            <Field name="email" type="email" className="form-control" />
                            <ErrorMessage
                                name="email"
                                component="small"
                                className="text-danger"
                            />
                        </div>

                        {/* Message */}
                        <div className="mb-3">
                            <label className="form-label fw-bold">Message</label>
                            <Field
                                as="textarea"
                                name="message"
                                className="form-control"
                                rows="3"
                            />
                        </div>

                        {/* Submit */}
                        <button type="submit" className="fnt fw-bold bg btn w-100">
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ContactForm;
