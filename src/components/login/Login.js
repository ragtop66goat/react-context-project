import { useRef } from "react";

export function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">email</label>
        <input type="email" id="email" ref={emailRef} />
        <label htmlFor="password">password</label>
        <input type="password" id="password" ref={passwordRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
