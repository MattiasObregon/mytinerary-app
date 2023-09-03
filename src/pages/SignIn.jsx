import NavBar from '../components/NavBar';
import FormSignIn from '../components/FormSignIn';
import backgroundImage from '../../public/img/backgroundLog.jpg';

export default function SignIn() {
  return (
    <div className="min-h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="pt-10 md:pt-20 lg:pt-[32px] md:pr-10 lg:pr-[218px] md:pl-10 lg:pl-[219px]"> <NavBar/> </div>
      <div className="flex flex-col items-center justify-center h-full mt-[100px]">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <FormSignIn />
        </div>
      </div>
    </div>
  );
}