"use client";

import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { registerUser } from "@/utils";
import { IUser } from "@/models";
import { useParams, useRouter } from "next/navigation";
import { error } from "console";
import appConfig from "@/config/appConfig";
import { Locale } from "@/i18n/routing";

interface SignUpValues {
  phone: string;
  password: string;
}

function SignUpPage() {
  const router = useRouter();
  const { locale } = useParams();

  const validationSchema = Yup.object({
    phone: Yup.string()
      .required("Vui lòng nhập số điện thoại")
      .matches(/^[0-9]+$/, "Số điện thoại không hợp lệ")
      .min(10, "Số điện thoại phải có ít nhất 10 chữ số"),
    password: Yup.string()
      .required("Vui lòng nhập mật khẩu")
      .min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
    repassword: Yup.string()
      .required("Vui lòng xác nhận mật khẩu")
      .oneOf([Yup.ref("password")], "Mật khẩu không khớp"),
  });

  const handleCheckSignup = async (values: SignUpValues) => {
    console.log("values", values);

    const response = registerUser({
      phoneNumber: values.phone,
      password: values.password,
    });

    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success(response.message);
      router.push(`/${locale}/${appConfig.path.signIn}`);
    }

    // try {
    //     const response = await fetch('/api/signup', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(values),
    //     });

    //     if (response.ok) {
    //         toast.success('Đăng kí thành công!');
    //         window.location.href = '/signin';
    //     } else {
    //         const errorData = await response.json();
    //         toast.error(errorData.message || 'Đăng kí thất bại! Vui lòng thử lại.');
    //     }
    // } catch (error) {
    //     toast.error('Đăng kí thất bại! Vui lòng thử lại.');
    // }
  };

  return (
    <div className="my-20 max-w-screen-xl mx-auto px-4 h-auto">
      <div className="flex lg:flex-row flex-col lg:h-[680px] gap-10">
        <div className="lg:w-1/2 w-full">
          <img
            src={"/images/si-3.png"}
            alt=""
            className="h-auto w-auto object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-4xl font-medium mb-5">Đăng kí</div>
          <div className="text-base font-normal mb-6">
            Vui lòng nhập đầy đủ thông tin đăng kí!
          </div>
          <div>
            <Formik
              initialValues={{ phone: "", password: "", repassword: "" }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                handleCheckSignup(values);
              }}
            >
              {() => (
                <Form className="flex flex-col gap-10">
                  <div>
                    <Field
                      type="text"
                      name="phone"
                      placeholder="Số điện thoại"
                      className="border-b border-black py-2 text-base font-normal focus:outline-none w-full"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Mật khẩu"
                      className="border-b border-black py-2 text-base font-normal focus:outline-none w-full"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <Field
                      type="password"
                      name="repassword"
                      placeholder="Xác nhận lại mật khẩu"
                      className="border-b border-black py-2 text-base font-normal focus:outline-none w-full"
                    />
                    <ErrorMessage
                      name="repassword"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-main text-white py-4 rounded mb-4"
                  >
                    Đăng kí ngay
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div className="text-center text-base font-normal">
            <Link href={`/${locale}/${appConfig.path.forgotPassword}`}>
              <div className="mb-2">Quên mật khẩu?</div>
            </Link>
            <div>
              <Link href={`/${locale}/${appConfig.path.signIn}`}>Trở về</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;