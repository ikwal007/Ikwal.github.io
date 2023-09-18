import React, { useState } from "react";
import Hero from "./partials/Hero";
import { FaFingerprint } from "react-icons/fa";
import { BsAt } from "react-icons/bs";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import Alert from "@/components/Alert/Alert";

const LoginView = () => {
  const { push, query } = useRouter();
  const callbackUrl = query.callbackUrl || "/";
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setdata({
      ...data,
      [name]: value,
    });
  };

  const submit = async (event) => {
    event.preventDefault();
    setLoading(!loading);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl,
      });
      if (!res?.error) {
        setLoading(false);
        push(callbackUrl);
      } else {
        setLoading(false);
        setErrors("Login failed. Please check your email and password.");
      }
    } catch (error) {
      setLoading(false);
      setErrors(error);
    }
  };

  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Hero
          img={`https://cdn.rareblocks.xyz/collection/celebration/images/signin/4/girl-thinking.jpg`}
        />

        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign in to Celebration
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Don’t have an account?{" "}
              <Link
                href="/auth/signup"
                title="signup"
                className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
              >
                Create a free account
              </Link>
            </p>
            {errors && (
              <Alert
                message={errors}
                setErrors={setErrors}
                className={"mt-3"}
              />
            )}

            <form onSubmit={submit} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <BsAt className="w-5 h-5" />
                    </div>

                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={data.email}
                      onChange={handlerChange}
                      placeholder="Enter email to get started"
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      Password
                    </label>

                    <Link
                      href="#"
                      title=""
                      className="text-sm font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaFingerprint className="w-5 h-5" />
                    </div>

                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={data.password}
                      onChange={handlerChange}
                      placeholder="Enter your password"
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                  >
                    {loading ? 'Loading' : "Log in"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginView;
