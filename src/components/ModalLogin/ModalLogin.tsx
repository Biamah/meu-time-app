import React, { FC, useState } from 'react'
import './ModalLogin.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

interface IProps {}

/**
* @author
* @function @ModalLogin
**/

export const ModalLogin:FC<IProps> = (props) => {
  const placeholder = 'Informe a KEY da API';
  const [isKeyValid, setIsKeyValid] = useState(false)
  const [key, setKey] = useState('')
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault()

    try {
      const response = await axios.get(`http://localhost:8000/api/endpoint?api_key=${key}`)

      if (response.status === 200) {
        setIsKeyValid(true);
        console.log('A chave informada está correta', response);
        navigate('/dashboard');
      } else {
        setIsKeyValid(false);
        console.log('A chave está incorreta');
      }
    } catch(error) {
      setIsKeyValid(false)
      console.error('ocorreu um erro ao fazer a solicitação', error)
    }
  }

  return (
    <div className='modal-login'>
      <span className='modal-login__icon-close'>X</span>

      <div className='modal-login__form-box'>
        <h2 className="modal-login__title">Login</h2>

        <form className='form' action="#" onSubmit={handleLogin}>
          <div className='form__input-box'>
            <input type="text" name='key-api' id='key-api' onChange={(event) => setKey(event.target.value)} required className='form__input' placeholder={placeholder} />
          </div>

          <button className='form__button' type='submit'>Login</button>
        </form>
      </div>
    </div>
   )
 }
