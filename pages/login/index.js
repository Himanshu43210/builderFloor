import React, { useEffect, useState } from "react";
import { auth, provider } from "../../functions/firebase";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";
import Head from "next/head";
import { FaGoogle } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdLockOutline } from "react-icons/md";
import { async } from "@firebase/util";

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onGooglePress = async () => {
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log({ res });
        router.replace("home");
      })
      .catch((err) => {
        console.log({ err }, err["message"]);
      });
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((res) => {
    //     console.log({ res });
    //     router.push("home");
    //   })
    //   .catch((err) => {
    //     console.log({ err }, err["message"]);
    //   });
  };

  const signupPhone = () => {
    auth.settings.appVerificationDisabledForTesting = false;
    var recaptchaVerifier = new RecaptchaVerifier("recaptcha", {
      size: "normal",
      theme: "light",
      callback: function (response) {
        console.log("Response", response);
      },
      "error-callback": function (error) {
        console.log("Error", error);
      },
      "expired-callback": function () {
        console.log("Expired");
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Login Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-3/3 max-w-4xl">
          <div className="w-5/5 p-8">
            {/* <div className="text-left font-bold">Company Name</div> */}
            <div className="py-3">
              <h2 className="text-3xl font-bold text-green-500 mb-2">
                Sign In to Account
              </h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-96 p-2 flex items-center mb-3">
                  <FiPhone className="text-gray-400 m-2" />
                  <input
                    type="tel"
                    name="tel"
                    placeholder="Mobile Number"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-96 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="text"
                    name="otp"
                    placeholder="OTP"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                {/* <div className="flex justify-between w-64 mb-5">
                  <label className="flex items-center text-xs mb-5">
                    <input type="checkbox" name="remember" className="mr-1" />
                    Remember Me
                  </label>
                  <a href="#" className="text-xs">
                    Forget Password ?
                  </a>
                </div> */}
                <a
                  href="#"
                  className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 font-semibold hover:bg-green-500 hover:text-white"
                >
                  Sign In
                </a>
                <p className="text-gray-400 my-3">or</p>
              </div>
              <div className="flex justify-center my-2">
                {/* <div
                  href=""
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                > */}
                <button onClick={onGooglePress}>
                  <FaGoogle className="text-xl inline-block m-2" />
                  Sign In With Google
                </button>
                {/* </div> */}
              </div>
              {/* Social Login Section */}
            </div>
          </div>
        </div>
        {/*Sign In Section*/}
        {/* <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-2">
              Fill up information and start journey with us
            </p>
            <a
              href="#"
              className="border-2 border-white rounded-full px-12 py-2 font-semibold hover:bg-white hover:text-green-500"
            >
              Sign Up
            </a>
          </div> */}
        {/*Sign Up Section*/}
      </main>
    </div>
  );

  // return (
  //   <section className="section-box">
  //     {/* <GoogleLogin
  //       clientId="658838976300-g620i2bp8eqdaq0254lbmaj1trc2coa7.apps.googleusercontent.com"
  //       buttonText="Login with google"
  //       onScriptLoadFailure={(e) => console.log("script>>>", e)}
  //       onSuccess={responseGoogle}
  //       onFailure={(err) => {
  //         console.log(2, err);
  //       }}
  //     /> */}
  //     {/* <p>Click here to sign up:</p> */}
  //     {/* <p>Email</p>
  //     <input
  //       onChange={(e) => {
  //         setEmail(e.target.value);
  //       }}
  //     />
  //     <p>Password</p>
  //     <input onChange={(e) => setPassword(e.target.value)} /> */}

  //     <button onClick={onSignup}>Sign in with Google</button>
  //     <button onClick={signupPhone}>Phone</button>
  //   </section>
  // );
}

export default Login;
