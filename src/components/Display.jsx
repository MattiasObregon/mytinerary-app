import { Link as Anchor }  from 'react-router-dom'

export default function Display({ options }) {
  return (
    <div className="hidden md:flex space-x-4">
          {options.map(each => (
            <Anchor
              key={each.to}
              to={each.to}
              className={`flex items-center font-bold text-lg ${each.title === 'Login' ? 'text-white bg-blue-600 rounded-md px-4 py-2' : 'text-black'}`}
            >
              {each.title === 'Login' && (
                <>
                  <img src="/user.svg" alt="User Icon" className="mr-2 h-4 w-4" />
                </>
              )}
              {each.title}
            </Anchor>
            ))}
        </div>
  )
}