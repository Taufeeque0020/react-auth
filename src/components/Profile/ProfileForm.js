import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const authCtx = useContext(AuthContext)
const passwordRef = useRef()
const history = useHistory()

  const submitHandler=(e)=>{
e.preventDefault()

const token = authCtx.token
const password = passwordRef.current.value

fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDW2V-IWOx4GO9rM2bB-0tFWAAeZY4WZ1o',{
  method:'POST',
  body:JSON.stringify({
    idToken:token,
    password:password,
    returnSecureToken:true
  }),
  headers:{
    'Content-Type':'application/json'
  }
})
.then(res=>{
history.replace('/')
})
.catch(err=>{
  console.log(err.message);
})


  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={passwordRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
