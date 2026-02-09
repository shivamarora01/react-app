import { useEffect, useState } from "react";

export default function ControlledInput(){
    const[name, setname] = useState("Hi");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  function handleSubmit(e) {
    // e.preventDefault(); // 🔥 stop page refresh

    console.log("Email:", email);
    console.log("Password:", password);
  }

    return (
        <>
        <input type="text" value={name} onChange={(e)=> setname(e.target.value)} />
        <p></p>
        <p>"InputValue": {name}</p>

            <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
        </>
    )
}