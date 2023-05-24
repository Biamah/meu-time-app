import React, { FC } from 'react'
import './ModalLogin.scss'

interface IProps {}

/**
* @author
* @function @ModalLogin
**/

export const ModalLogin:FC<IProps> = (props) => {
  const placeholder = 'Informe a KEY da API';

  return (
    <div className='modal-login'>
      <span className='modal-login__icon-close'>X</span>

      <div className='modal-login__form-box'>
        <h2 className="modal-login__title">Login</h2>

        <form className='form' action="#">
          <div className='form__input-box'>
            <input type="text" name='key-api' id='key-api' required className='form__input' placeholder={placeholder} />
          </div>

          <button className='form__button'>Login</button>
        </form>
      </div>
    </div>
   )
 }
