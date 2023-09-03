import { useRef } from "react";
import { Link as Anchor } from "react-router-dom";
import axios from "axios";
import apiUrl from "../apiUrl";

export default function FormSignIn() {
  const mail = useRef();
  const password = useRef();

  async function handleSignin() {
    try {
      let data = {
        mail: mail.current.value,
        password: password.current.value,
      };
      await axios.post(apiUrl + "users/signin", data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex items-center justify-center">
      <form className="bg-white p-6 rounded shadow-md w-[400px]">
        <input
          ref={mail}
          type="text"
          name="mail"
          id="mail"
          placeholder="Mail"
          className="mb-4 px-3 py-2 border rounded w-full"
        />
        <input
          ref={password}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="mb-4 px-3 py-2 border rounded w-full"
        />
        <button
          type="button"
          onClick={handleSignin}
          className="bg-indigo-600 text-white px-3 py-2 rounded w-full"
        >
          Continue
        </button>
        <p className="mt-4">New user?</p>
        <Anchor to="/auth/signup" className="text-indigo-600">
          <p>Sign up</p>
        </Anchor>
      </form>
    </div>
  );
}
