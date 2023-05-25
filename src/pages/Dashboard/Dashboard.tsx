import React, { FC, useEffect, useState } from 'react'
import { Header } from '../../components/Header/Header'
import './Dashboard.scss'
import axios from 'axios'

interface IProps {}

/**
* @author
* @function @Dashboard
**/

export const Dashboard:FC<IProps> = (props) => {
  const placeholder = 'Informe o país'
  const [country, setCountry] = useState('');
  const [seasons, setSeason] = useState<Number[]>([]);

  useEffect(() => {
    fetchSeasons();
  }, []);

  const fetchSeasons = async () => {
    try {
      const response = await axios.get('http://localhost:8000/season');
      const data: Number[] = response.data.response;
      console.log(data)

      if(Array.isArray(data)) {
        setSeason(data);
      } else {
        console.log('as temporadas não foram encontradas');
      }
    } catch(error) {
      console.error('Ocorreu um erro ao buscar as temporadas');
    }
  }

  const handleCountry = async (event: React.FormEvent) => {
    event.preventDefault();
    
    try {
      const response = await axios.get(`http://localhost:8000/country?api_country=${country}`);

      if( response.status === 200 ) {
        console.log('pais encontrado', response);
      } else {
        console.log('pais não encontrado')
      }
    } catch(error) {
      console.error('Ocorreu um erro ao fazer sua solicitação', error);
    }
  }

  return (
    <div className='dashboard'>
      <Header />

      <div className='dashboard__modal'>
        <h2>Bem vindo ao dashboard</h2>

        <form action="#" onSubmit={handleCountry} className='form'>
          <div className='form__input-box'>
            <input type="text" name='country' id='country' onChange={(event) => setCountry(event.target.value)} required className='form__input' placeholder={placeholder} />
          </div>

          <div className="form__input-dropdown">
            <select className='form__input' name='season'>
              <option value="">Selecione</option>
              {seasons.map((season) => (
                <option key={`${season}`} value={`${season}`}>
                  {`${season}`}
                </option>
              ))}
            </select>
          </div>

          <button className='form__button' type='submit'>Buscar</button>
        </form>
      </div>
    </div>
   )
 }
