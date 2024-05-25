import { useRef, useState } from "react";
import { Button, Input } from "../components";

const Register = () => {

    const [errors , setErrors] = useState({})

    const usernameRef = useRef(null)
    const nameRef = useRef(null)
    const lastnameRef = useRef(null)
    const passwordRef = useRef(null)


    const handleSubmitForm = (e) => {
        e.preventDefault()
        // alert("submit")
        const data = {
            "username" : usernameRef.current?.value,
            "password" : passwordRef.current?.value,
            "name" : nameRef.current?.value,
            "lastname" : lastnameRef.current?.value
        }


        // validate data
        const errors = {}

        for (let [key , value] of Object.entries(data)) {
            if(!value){
                errors[key] = `${key} is required`
            }
        }

        if(data.password && data.password.length < 8){
            errors["password"] = `Password is weak`
        }


        if (Object.keys(errors).length > 0){
            setErrors(errors)
            return
        }else{
            setErrors({})
        }




        console.log(data)
    }






  return (
    <div
      className="form"
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmitForm} className="form" action="">
        <span>Welcome Back</span>
        <span>Enter your credentials to access your account</span>
        <Input
          ref={usernameRef}          
          lable="Email Address"
          placeholder="Enter your Email"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          }
          error = {errors["username"]}
        />

        <Input
          ref={nameRef}          

          lable="Name"
          placeholder="Enter your first name"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          }
          error = {errors["name"]}

        />

        <Input
          ref={lastnameRef}          

          lable="Last name"
          placeholder="Enter your Last name"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          }
          error = {errors["lastname"]}

        />
        <Input
          ref={passwordRef}          

          lable="Password"
          placeholder="Enter your Password"
          type="password"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          }
          error = {errors["password"]}

        />

        <Button>
          <span>Register</span>
        </Button>
      </form>
    </div>
  );
};

export default Register;
