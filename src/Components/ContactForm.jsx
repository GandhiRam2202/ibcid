import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "./Contact";
import { toast } from "react-toastify";
import axios from "axios";

const ContactForm = () => {

  const toastCooldown = useRef(false);

  // Show toast only once per second
  const showMailToast = (type = "success", msg = "") => {
    if (toastCooldown.current) return;
    toastCooldown.current = true;

    type === "success"
      ? toast.success(msg || "Mail Sent Successfully", { autoClose: 1000 })
      : toast.error(msg || "Failed to send mail", { autoClose: 1000 });

    setTimeout(() => {
      toastCooldown.current = false;
    }, 1200);
  };

  return (
    <div className="container p-0">
      <Formik
        initialValues={{ name: "", phone: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm, setSubmitting }) => {

          const data = {
            ...values,
            message: values.message.replace(/\n/g, " ")
          };

          try {
            const res = await axios.post(
              "https://ibcidmail.onrender.com/api/contact",
              data,
              {
                headers: {
                  "Content-Type": "application/json"
                }
              }
            );

            if (res.data?.success) {
              showMailToast("success", "Mail Sent Successfully");
              resetForm();
            } else {
              showMailToast("error", "Something went wrong");
            }

          } catch (error) {
            console.error(error);
            showMailToast("error", "Server Error");
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="border m-2 p-2 shadow">

            <h3 className="mb-3 fw-bold font text-center">
              Send Us E-Mail
            </h3>

            {/* Name */}
            <div className="mb-3">
              <label className="form-label fw-bold">
                Name <span className="font">*</span>
              </label>
              <Field
                name="name"
                className="form-control"
                placeholder="Enter Your Name"
                autoComplete="name"
              />
              <ErrorMessage name="name" component="small" className="text-danger" />
            </div>

            {/* Phone */}
            <div className="mb-3">
              <label className="form-label fw-bold">
                Phone Number <span className="font">*</span>
              </label>
              <Field
                name="phone"
                className="form-control"
                placeholder="Enter Your Phone Number"
                autoComplete="phone"
              />
              <ErrorMessage name="phone" component="small" className="text-danger" />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label fw-bold">
                Email <span className="font">*</span>
              </label>
              <Field
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
                autoComplete="email"
              />
              <ErrorMessage name="email" component="small" className="text-danger" />
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
            <button
              type="submit"
              className="fnt fw-bold bg btn w-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>

          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
