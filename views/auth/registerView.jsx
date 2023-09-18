import React, { useState } from "react";
import Hero from "./partials/Hero";
import { BsAt } from "react-icons/bs";
import { FaFingerprint, FaRegUser } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/router";
import Alert from "@/components/Alert/Alert";
import Link from "next/link";

const RegisterView = () => {
  const { push, pathname } = useRouter();
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [data, setdata] = useState({
    username: "",
    email: "",
    password: "",
    pathname: pathname,
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
      const result = await axios.post("/api/auth/register", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (result.data.status === true) {
        setLoading(false);
        event.target.reset();
        push("/auth/signin");
      } else {
        setLoading(false);
        setErrors(result.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Hero
          img={`https://cdn.rareblocks.xyz/collection/celebration/images/signup/4/girl-working-on-laptop.jpg`}
        />

        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Daftar ke blog saya
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Sudah punya aku?
              <Link
                href="/auth/signin"
                title="signin"
                className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
              >
                Login
              </Link>
            </p>
            {errors && <Alert message={errors} setErrors={setErrors} />}

            <form onSubmit={submit} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="username"
                    className="text-base font-medium text-gray-900"
                  >
                    Nama Lengkap
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaRegUser className="w-5 h-5" />
                    </div>

                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Masukan nama lengkap"
                      value={data.username}
                      onChange={handlerChange}
                      required
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <BsAt className="w-5 h-5" />
                    </div>

                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Masukan email anda"
                      value={data.email}
                      onChange={handlerChange}
                      required
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <button type="button" onClick={() => setShow(!show)}>
                        <FaFingerprint className="w-5 h-5" />
                      </button>
                    </div>

                    <input
                      type={!show ? "password" : "text"}
                      name="password"
                      id="password"
                      placeholder="Masukan password"
                      value={data.password}
                      onChange={handlerChange}
                      required
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
                    {loading ? "Loading..." : "Sign up"}
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

export default RegisterView;
