import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  comment: "",
};

const validationSchema = yup.object({
  name: yup
    .string()
    .required("this field required.")
    .min(6, "your name most more than 6 character")
    .max(16, "your name most maximum 16 character"),

  email: yup
    .string()
    .email("email is wrong.")
    .required("this field required.")
    .min(8, "your name most more than 6 character"),

  comment: yup
    .string()
    .required("this field required.")
    .min(25, "your comment most more than 25 character"),
});

const Form = () => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    toast.success("your comment successfully sended",{position:"top-center"});
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 1000);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <section className="container m-auto flex justify-center px-2 mt-28">
      <form
        onSubmit={formik.handleSubmit}
        className="flex w-full gap-4 max-w-[450px]  flex-col"
      >
        <div className="w-full py-2 px-4   relative">
          <span className="absolute top-0  font-bold text-lg">name</span>
          <input
            type="text"
            onChange={formik.handleChange}
            name="name"
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="w-full bg-transparent text-orange-700 border-b-4 border-zinc-900 focus:border-orange-500 focus:border-r-4 rounded-br-full placeholder:text-lg placeholder:text-orange-300 px-14 pt-4 pb-1 duration-300 outline-none  "
          />
          {formik.errors.name && formik.touched.name && (
            <span className="text-red-700">{formik.errors.name}</span>
          )}
        </div>

        <div className="w-full py-2 px-4   relative">
          <span className="absolute top-0  font-bold text-lg">email</span>
          <input
            type="email"
            onChange={formik.handleChange}
            name="email"
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full bg-transparent text-orange-700 border-b-4 border-zinc-900 focus:border-orange-500 focus:border-r-4 rounded-br-full placeholder:text-lg placeholder:text-orange-300 px-14 pt-4 pb-1 duration-300 outline-none  "
          />

          {formik.errors.email && formik.touched.email && (
            <span className="text-red-700">{formik.errors.email}</span>
          )}
        </div>

        <div className="w-full py-2 px-4   relative">
          <span className="absolute top-0  font-bold text-lg">comment</span>
          <textarea
            onChange={formik.handleChange}
            name="comment"
            onBlur={formik.handleBlur}
            value={formik.values.comment}
            className="w-full bg-transparent text-orange-700 border-b-4 border-zinc-900 focus:border-orange-500 focus:border-r-4 rounded-br-full placeholder:text-lg placeholder:text-orange-300 px-14 pt-4 pb-1 duration-300 outline-none  max-h-48 min-h-[65px]"
          ></textarea>
          {formik.errors.comment && formik.touched.comment && (
            <span className="text-red-700">{formik.errors.comment}</span>
          )}
        </div>

        <button
          type="submit"
          className={`${
            !formik.isValid && " cursor-not-allowed bg-gray-400 text-zinc-700 "
          }  py-2 px-4 rounded-lg font-bold text-lg  bg-orange-500 text-zinc-800`}
          disabled={!formik.isValid}
        >
          send comment
        </button>
      </form>
    </section>
  );
};

export default Form;
