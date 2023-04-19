import { useState, useEffect } from "react";
import Axios from 'axios'

const Login = () => {
    const [token, setToken] = useState([]);
    const [usernameCreate, setUsernameCreate] = useState("");
    const [passwordCreate, setPasswordCreate] = useState("");
    const [succesLogin, setSuccesLogin] = useState("");


    useEffect(() => {
        Axios({
            method:'get',
            url: 'https://api.themoviedb.org/3/authentication/token/new?api_key=6ad9653522f4ab6c534be1f083172557',
        })
            .then(function (response) {
                console.log(response)
                setToken(response.data.request_token)
            });
    }, []);

    useEffect(() => {
            Axios({
                method:'post',
                url: 'https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=6ad9653522f4ab6c534be1f083172557',
                data: {
                    username: {usernameCreate},
                    password: {passwordCreate},
                    request_token:{token}
                }
            })
                .then(function (response) {
                    console.log(response)
                   setSuccesLogin(response.data.status_message)
                }); 
        }, []);

    const handleUsernameChange = (e) => {
        setUsernameCreate(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPasswordCreate(e.target.value)
    }

    return (
        <div>
            <form>
                <label for="fname">username:</label><br />
                <input type="text" id="fname" name="fname" value={usernameCreate} onChange={handleUsernameChange} /><br />
                <label for="lname">Last name:</label><br />
                <input type="text" id="lname" name="lname" value={passwordCreate} onChange={handlePasswordChange}/><br />
                <button type="submit" onClick={step2}>Login</button>
            </form>
        <p>{succesLogin}</p>
        </div>
    )
}

export default Login