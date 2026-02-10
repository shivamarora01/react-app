import { useEffect, useRef, useState } from "react";

export default function ControlledInput(){
    const[name, setname] = useState("Hi");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();

  function handleSubmit(e) {
    //form submission
    e.preventDefault(); // 🔥 stop page refresh

    //validation
    // if(password.length != 8){
    //   alert(`password length must be 8`);
    //   return;
    // }
    console.log("Email:", email);
    console.log("Password:", password);
  }

  function handleSubmitUncontrolled(e) {
    e.preventDefault(); // 🔥 stop page refresh

    console.log("Uncontrollled Email:", emailRef.current.value);
    console.log("Uncontrollled Password:", passwordRef.current.value);
  }
    return (
        <>
        <input type="text" value={name} onChange={(e)=> setname(e.target.value)} />
        <p></p>
        <p>"InputValue": {name}</p>
        {/* //uncontrolled input */}
        <br />
        <h3 className="text-underline">Uncontrolled formData</h3>
        <form onSubmit={handleSubmitUncontrolled}>
          <label htmlFor="Email">eMail</label>
          <br />
          <input type="email" ref={emailRef}/>
          <br />
          <label htmlFor="Email">password</label>
          <br />
          <input type="password" ref={passwordRef}/>
          <br />
          <button type="submit">Login</button>
        </form>
        <br />
        {/* //controlled input */}
                <br />
        <h3 className="text-underline">Controlled formData</h3>
        <br />
          <form onSubmit={handleSubmit}>
            <label htmlFor="Email">eMail</label>
            <br />
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="password">password</label>
            <br />
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            //inline validation
            {
              password.length < 6 && (<p>password should be more than 7</p>)
            }
            <button type="submit">Login</button>
          </form>
        </>
    )
}