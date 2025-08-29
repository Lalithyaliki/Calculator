import React, { useState } from 'react';
import './styles/style.css';

function App() {

  const [formname, setname] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, seterror] = useState({
    name: false,
    email: false,
    password: false,
  });
  const [popup, setpopup] = useState(false);
  const [showpassword, setpassword] = useState(false);

  const onchange = (e) => {

    const { name, value } = e.target;

    setname((prev) => ({ ...prev, [name]: value }));

    if (value.trim() !== '') {
      seterror((prev) => ({ ...prev, [name]: false }));
    }

  }

  const onlink = (e) => {
    e.preventDefault();

    const l = ({
      name: formname.name.trim() === "",
      email: formname.email.trim() === "",
      password: formname.password.trim() === "",
    })

    seterror(l);

    if (Object.values(l).some((err) => err)) {
      return;
    }

    setpopup(true);

    setTimeout(() => {
      setpopup(false)
    }, 3000);

    const z = {
      name: formname.name,
      email: formname.email,
      password: formname.password
    }
    console.log(z);

    setname({
      name: '',
      email: '',
      password: '',
    })

  }

  return (

    <div className='outside'>
      <p id='pop'
        className={popup ? "right" : ""}
      >you lodded successfully</p>
      <form onSubmit={onlink} autoComplete='off' >
        <label htmlFor='name'>Name *</label>
        <input type='text'
          name='name'
          value={formname.name}
          onChange={onchange}
          className={error.name ? "error" : ""}
          placeholder='Name'
          id='name'
        ></input>
        <label htmlFor='email'>Email *</label>
        <input type='email'
          name='email'
          value={formname.email}
          onChange={onchange}
          className={error.email ? "error" : ""}
          placeholder='Email'
          id='email'
        ></input>
        <label htmlFor='password'>Password *</label>
        <input type={showpassword ? "text" : "password"}
          name='password'
          value={formname.password}
          onChange={onchange}
          className={error.password ? "error" : ""}
          placeholder='Password'
          id='password'
        ></input>
        <button type='button'
          aria-label='Show password'
          onClick={() => setpassword((prev) => (!prev))}
        >{showpassword ? "👁️" : "🙈"}</button>
        <button
          type='submit'>submit</button>
      </form>

    </div >
  )
}

export default App;





