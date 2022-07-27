import React, { useEffect, useState, useContext } from "react";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "@firebase/firestore";
import { cartContext } from "../../Context/CartContext";

const Form = () => {
  const { productos, calcularTotal, clear } = useContext(cartContext);

  const [checkout, setCheckout] = useState(false)

  const [user, setUser] = useState({
    nombre: '',
    apellido: '',
    email: '',
  });
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleChangeUser = (event) => {
    const { name, value } = event.target
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }))
  }

  const handleSubmitUser = (e) => {
    e.preventDefault();
    setCheckout(true);
    const ventasCollection = collection(db, 'ventas');
    addDoc(ventasCollection, {
      datosComprador: user,
      items: productos,
      date: serverTimestamp(),
      total: calcularTotal(),
    })
      .then((result) => {
        clear();
        // ToDo: navigate(`/congrats?venta=${result.id}`)
      })
  };

  useEffect(() => {
    const userKeys = Object.keys(user);
    const isSomeUserPropEmpty = userKeys.some((key) => user[key] === '');
    setIsSubmitDisabled(!checkout && isSomeUserPropEmpty);
  }, [user, checkout]);

  return (
    <div style={{ display: 'flex', border: '2px solid black', margin: '50px', padding: '10px', alignItems: 'center', justifyContent: 'space-between' }}>
      <form className='form' onSubmit={handleSubmitUser}>
        <label className='label'>
          Nombre
          <input className='input' name='nombre' type='text' onChange={handleChangeUser} value={user.nombre} />
        </label>
        <label className='label'>
          Apellido
          <input className='input' name='apellido' type='text' onChange={handleChangeUser} value={user.apellido} />
        </label>
        <label className='label'>
          Email
          <input className='input' name='email' type='email' onChange={handleChangeUser} value={user.email} />
        </label>
        <input className='btn green' type='submit' disabled={isSubmitDisabled} value='Comprar' />
      </form>
    </div>
  )
}

export default Form