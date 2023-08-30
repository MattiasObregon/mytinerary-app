import { useRef } from "react"
import { Link as Anchor } from "react-router-dom"
import axios from "axios"
import apiUrl from "../apiUrl"


export default function FormSignUp() {
    const name = useRef()
    const lastName = useRef()
    const country = useRef()
    const photo = useRef()
    const mail = useRef()
    const password = useRef()

    async function handleSignup() {
        try {
            let data = {
                name: name.current.value,
                lastName: lastName.current.value,
                country: country.current.value,
                photo: photo.current.value,
                mail: mail.current.value,
                password: password.current.value
            }
            await axios.post(
                apiUrl + 'users/signup',
                data
            )
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        (<form>
            <input ref={name} type="text" name='name' id='name' defaultValue="" placeholder='First Name'/>
            <input ref={lastName} type="text" name='lastName' id='lastName' defaultValue="" placeholder='Last Name'/>
            <input ref={country} type="text" name='country' id='country' defaultValue="" placeholder='Country'/>
            <input ref={photo} type="text" name='photo' id='photo' defaultValue="" placeholder='Photo'/>
            <input ref={mail} type="text" name='mail' id='mail' defaultValue="" placeholder='Mail'/>
            <input ref={password} type="password" name='password' id='password' defaultValue="" placeholder='Password'/>
            <input type="button" value="Sign Up!" onClick={handleSignup} />
            <p>Already have an account?</p>
            <Anchor
                to='/auth/signIn'
            >
                <p>Sign in</p>
            </Anchor>
        </form>) 
  )
}
