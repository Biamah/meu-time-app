import React, { FC } from 'react'
import { Header } from '../../components/Header/Header'
import './Home.scss'
import { ModalLogin } from '../../components/ModalLogin/ModalLogin'

interface IProps {}

/**
* @author
* @function @Home
**/

export const Home:FC<IProps> = (props) => {
  return (
    <div className='home'>
        <Header />
        <ModalLogin />
    </div>
   )
 }
