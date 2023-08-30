import NavBar from '../components/NavBar';
import FormSignIn from '../components/FormSignIn';
import backgroundImage from '../../public/img/backgroundLog.jpg';

export default function SignIn() {
  return (
    <div className="min-h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <NavBar />
      <div className="flex flex-col items-center justify-center h-full">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <FormSignIn />
        </div>
      </div>
    </div>
  );
}