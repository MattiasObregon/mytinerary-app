import { Link as Anchor }  from 'react-router-dom'

export default function DisplayResponsive({options}) {
  return (
    <div className="md:hidden flex flex-col space-y-2 md:text-center">
            {options.map(each => (
            <Anchor
              key={each.to}
              to={each.to}
              className={`font-bold text-lg font-segoe-ui ${each.title === 'Login' ? 'flex items-center font-bold text-white text-lg bg-blue-600 rounded-md px-4 py-2' : 'text-black'}`}
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
