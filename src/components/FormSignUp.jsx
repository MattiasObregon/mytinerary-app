import { useRef } from "react";
import { Link as Anchor } from "react-router-dom";
import axios from "axios";
import apiUrl from "../apiUrl";

export default function FormSignUp() {
  const name = useRef();
  const lastName = useRef();
  const country = useRef();
  const photo = useRef();
  const mail = useRef();
  const password = useRef();

  async function handleSignup() {
    try {
      let data = {
        name: name.current.value,
        lastName: lastName.current.value,
        country: country.current.value,
        photo: photo.current.value,
        mail: mail.current.value,
        password: password.current.value,
      };
      await axios.post(apiUrl + "users/signup", data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex items-center justify-center">
      <form className="bg-white p-6 rounded shadow-md w-[400px]">
        <input
          ref={name}
          type="text"
          name="name"
          id="name"
          defaultValue=""
          placeholder="First Name"
          className="mb-4 px-3 py-2 border rounded w-full"
        />
        <input
          ref={lastName}
          type="text"
          name="lastName"
          id="lastName"
          defaultValue=""
          placeholder="Last Name"
          className="mb-4 px-3 py-2 border rounded w-full"
        />
        <input
          ref={country}
          type="text"
          name="country"
          id="country"
          defaultValue=""
          placeholder="Country"
          className="mb-4 px-3 py-2 border rounded w-full"
        />
        <input
          ref={photo}
          type="text"
          name="photo"
          id="photo"
          defaultValue=""
          placeholder="Photo"
          className="mb-4 px-3 py-2 border rounded w-full"
        />
        <input
          ref={mail}
          type="text"
          name="mail"
          id="mail"
          defaultValue=""
          placeholder="Mail"
          className="mb-4 px-3 py-2 border rounded w-full"
        />
        <input
          ref={password}
          type="password"
          name="password"
          id="password"
          defaultValue=""
          placeholder="Password"
          className="mb-4 px-3 py-2 border rounded w-full"
        />
        <button
          type="button"
          onClick={handleSignup}
          className="bg-indigo-600 text-white px-3 py-2 rounded w-full"
        >
          Sign Up!
        </button>
        <p className="mt-4">Already have an account?</p>
        <Anchor to="/auth/signIn" className="text-indigo-600">
          <p>Sign in</p>
        </Anchor>
      </form>
    </div>
  );
}
