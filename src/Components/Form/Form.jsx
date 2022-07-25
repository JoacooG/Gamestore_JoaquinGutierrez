import React, { useEffect, useState } from "react";

const Form = () =>{

const [user, setUser] = useState({
    nombre: '',
    apellido: '',
    email: '',
});
const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

const handleChangeUser = ({nombre, apellido, email, value}) =>
    setUser({ ...user, [nombre]: value, [apellido]: value, [email]: value});

const handleSubmitUser = (e) =>{
    e.PreventDefault();
};

useEffect(() =>{
    const userKeys = Object.keys(user);
    const isSomeUserPropEmpty = userKeys.some((key)=> user[key] === '');
    setIsSubmitDisabled(isSomeUserPropEmpty);
}, [user]);

return(
    <div style={{display: 'flex', border: '2px solid black', margin: '50px', padding:'10px', alignItems:'center', justifyContent:'space-between'}}>
    <form className='form' onSubmit={handleSubmitUser} onChange={({ target })=> handleChangeUser(target)}>
        <label className='label'>
            Nombre
            <input className='input' name='nombre' type='text' value={user.nombre} />
        </label>
        <label className='label'>
            Apellido
            <input className='input' name='apellido' type='text' value={user.apellido} />
        </label>
        <label className='label'>
            Email
            <input className='input' name='email' type='text' value={user.email} />
        </label>
        <input className='btn green' type='submit' disabled={isSubmitDisabled} value='Comprar' />
    </form>
    </div>
)}

export default Form
