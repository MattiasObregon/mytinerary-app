import { useRef } from "react"
import { Link as Anchor } from "react-router-dom"
import axios from "axios"
import apiUrl from "../apiUrl"

export default function FormSignIn() {
    const mail = useRef()
    const password = useRef()

    async function handleSignin() {
        try {
            let data = {
                mail: mail.current.value,
                password: password.current.value
            }
            await axios.post(
                apiUrl + 'users/signin',
                data
            )
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <form>
        <input ref={mail} type="text" name='mail' id='mail' placeholder='Mail'/>
        <input ref={password} type="password" name='password' id='password' placeholder='Password'/>
        <input type="button" value="Continue" onClick={handleSignin} />
        <p>New user?</p>
        <Anchor
            to='/auth/signup'
        >
            <p>Sign up</p>
        </Anchor>
    </form>
  )
}