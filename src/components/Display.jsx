import React from 'react';
import { Link as Anchor } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import users_actions from '../store/actions/users';
const { signout } = users_actions;

export default function Display({ options }) {
  let mail = useSelector(store => store.users.user?.mail);
  let dispatch = useDispatch();

  const handleSignout = () => {
    dispatch(signout());
  };

  return (
    <div className="hidden md:flex space-x-4">
      {options.map(each => (
        <React.Fragment key={each.to}>
          {each.title === 'Login' && mail ? (
            <button
              onClick={handleSignout}
              className="flex items-center font-bold text-lg text-white bg-indigo-600 rounded-md px-4 py-2"
            >
              <img src="/user.svg" alt="User Icon" className="mr-2 h-4 w-4" />
              SignOut
            </button>
          ) : (
            <Anchor
              to={each.to}
              className={`flex items-center font-bold text-lg ${
                each.title === 'Login'
                  ? 'text-white bg-indigo-600 rounded-md px-4 py-2'
                  : 'text-black'
              }`}
            >
              {each.title === 'Login' && (
                <>
                  <img src="/user.svg" alt="User Icon" className="mr-2 h-4 w-4" />
                </>
              )}
              {each.title}
            </Anchor>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
