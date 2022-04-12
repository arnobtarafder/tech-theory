import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogo from "../../Image/google.svg";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import app from "../../Firebase/Firebase.init";
import { auth } from "../../Firebase/Firebase.init";

const provider = new GoogleAuthProvider();

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState({value: "", error: ""});
  const [password, setPassword] = useState({value: "", error: ""});
  const [confirmPassword, setConfirmPassword] = useState({value: "", error: ""});
  // console.log(email);

      // const auth = getAuth(app);

      const googleAuth = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
        const user = result.user;
        // console.log(user);
        navigate("/")
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        console.log(errorMessage);
        // ...
    });
      }

      const handleEmail = (event) => {
        const emailInput = event.target.value;
        if (/\S+@\S+\.\S+/.test(emailInput)) {
          setEmail({ value: emailInput, error: "" });
        } else {
          setEmail({ value: "", error: "Please Provide a valid Email" });
        }
      };
      const handlePassword = (event) => {
        const passwordInput = event.target.value;
    
        if (passwordInput.length < 7) {
          setPassword({ value: "", error: "Password too short" });
        } else if (!/(?=.*[A-Z])/.test(passwordInput)) {
          setPassword({
            value: "",
            error: "Password must contain a capital letter",
          });
        } else {
          setPassword({ value: passwordInput, error: "" });
        }
      };
      const handleConfirmPassword = (confirmPasswordInput) => {
        const confirmationInput = confirmPasswordInput.target.value;
    
        if (confirmationInput === password.value) {
          setConfirmPassword({ value: "", confirmPasswordInput: "" });
        } else {
          setConfirmPassword({ value: "", error: "password dismatched" });
        }
      };

      const handleSignUp = (event) => {
        event.preventDefault();
        // const email = event.target.email.value;
        // const password = event.target.password.value;

        if(email.value === "") {
          setEmail({value: "", error: "Email is required"})
        }
        
        if(password.value === "") {
          setPassword({value: "", error: "Password is required"})
        }


        if(email.value && password.value && confirmPassword.value === password.value ) {
          createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        })

        }
        // console.log(email);
        // console.log(password);
        // console.log("Signup successful");
      }


  return (
    <div className='auth-form-container '>
      <div className='auth-form'>
        <h1>Sign Up</h1>

        <form onSubmit={handleSignUp}>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <div className='input-wrapper'>
              <input 
                type='email' 
                name='email' 
                id='email' 
                onBlur={handleEmail} />
            </div>
            {
                  email?.error && <p>{email.error}</p>
            }

          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <div className='input-wrapper'>
              <input 
                type='password' 
                name='password' 
                id='password' 
                onBlur={handlePassword}/>
            </div>
            {
              password.error && <p className="error">{password.error}</p>
            }
          </div>
          <div className='input-field'>
            <label htmlFor='confirm-password'>Confirm Password</label>
            <div className='input-wrapper'>
              <input
                type='password'
                name='confirmPassword'
                id='confirm-password'
                onBlur={handleConfirmPassword}
              />
            </div>
            {
              confirmPassword.error && <p>{confirmPassword.error}</p>
            }
          </div>
          <button type='submit' className='auth-form-submit'>
            Sign Up
          </button>
        </form>


        <p className='redirect'>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
        <div className='horizontal-divider'>
          <div className='line-left' />
          <p>or</p>
          <div className='line-right' />
        </div>
        <div className='input-wrapper'>
          <button className='google-auth' onClick={googleAuth}>
            <img src={GoogleLogo} alt='' />
            <p className="my-auto"> Continue with Google </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;