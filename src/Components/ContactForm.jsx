import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "./Contact";
import { toast } from "react-toastify";



const ContactForm = () => {


      const toastCooldown = useRef(false);
    
      // Make toast appear only once per 1 second
      const showMailToast = () => {
        if (toastCooldown.current) return;
        toastCooldown.current = true;
    
        toast.error("Mail Sent Successfully", { autoClose: 1000 });
    
        setTimeout(() => {
          toastCooldown.current = false;
        }, 1200);
      };


    return (
        <div className="container p-0">

            <Formik
                initialValues={{ name: "", phone: "", email: "", message: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    const data = {
                        ...values,
                        message: values.message.replace(/\n/g, " ")
                    };
                    console.log(data);
                    
                    showMailToast()
                    resetForm();
                }}
            >
                {() => (
                    <Form className="border p-2 shadow">
                        <h3 className="mb-3 fw-bold font text-center">Send Us E-Mail</h3>

                        {/* Name */}
                        <div className="mb-3">
                            <label className="form-label fw-bold">Name <span className="font">*</span></label>
                            <Field name="name" id='name' className="form-control" placeholder='Enter Your Name' autoComplete='name'/>
                            <ErrorMessage
                                name="name"
                                component="small"
                                className="text-danger"
                            />
                        </div>

                        {/* Phone */}
                        <div className="mb-3">
                            <label className="form-label fw-bold">Phone Number <span className="font">*</span></label>
                            <Field name="phone" id='phone' className="form-control" placeholder='Enter Your Phone Number' autoComplete='phone'/>
                            <ErrorMessage
                                name="phone"
                                component="small"
                                className="text-danger"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-3">
                            <label className="form-label fw-bold">Email <span className="font">*</span></label>
                            <Field name="email" id='mail' type="email" className="form-control" placeholder="Enter Your Email" autoComplete="email"  />
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
