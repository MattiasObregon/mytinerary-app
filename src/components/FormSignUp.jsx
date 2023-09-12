import axios from 'axios';
import { useRef, useState, useEffect } from 'react';
import apiUrl from '../apiUrl';
import { Link as Anchor } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import user_actions from '../store/actions/users';
import Swal from 'sweetalert2';

const { signup } = user_actions;

export default function FormSignUp() {
  const name = useRef('');
  const lastName = useRef('');
  const country = useRef('');
  const photo = useRef('');
  const mail = useRef('');
  const password = useRef('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signup());
  }, []);

  async function handleSignUp() {
    try {
      if (
        !name.current.value ||
        !lastName.current.value ||
        !country.current.value ||
        !photo.current.value ||
        !mail.current.value ||
        !password.current.value
      ) {

        const errorMessages = []
        if (!name.current.value) {
          errorMessages.push('First Name is required');
        }
        if (!lastName.current.value) {
          errorMessages.push('Last Name is required');
        }
        if (!country.current.value) {
          errorMessages.push('Country is required');
        }
        if (!photo.current.value) {
          errorMessages.push('Photo is required');
        }
        if (!mail.current.value) {
          errorMessages.push('Mail is required');
        }
        if (!password.current.value) {
          errorMessages.push('Password is required');
        }
        Swal.fire({
          icon: 'error',
          title: 'Registration Error',
          html: errorMessages.map((message) => `<p>${message}</p>`).join(''),
        });
        return
      }

      let data = {
        name: name.current.value,
        lastName: lastName.current.value,
        country: country.current.value,
        photo: photo.current.value,
        mail: mail.current.value,
        password: password.current.value,
      };

      await axios.post(apiUrl + 'auth/signup', data);
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: 'You have successfully registered.',
      });

      name.current.value = '';
      lastName.current.value = '';
      country.current.value = '';
      photo.current.value = '';
      mail.current.value = '';
      password.current.value = '';
      
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Registration Error',
        text: 'An error occurred during registration. Please try again later.',
      });
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
          onClick={handleSignUp}
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
