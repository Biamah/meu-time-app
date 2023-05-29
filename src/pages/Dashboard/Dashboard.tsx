import React, { FC, useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import "./Dashboard.scss";
import axios from "axios";
import { LeagueList } from "../../components/LeagueList/LeagueList";

interface IProps {}

interface League {
  league: any;
  id: number;
  name: string;
  country: any;
}

/**
 * @author
 * @function @Dashboard
 **/

export const Dashboard: FC<IProps> = (props) => {
  const placeholder = "Informe o país";
  const [country, setCountry] = useState("");
  const [seasons, setSeason] = useState<Number[]>([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const [leagues, setLeagues] = useState<League[]>([]);

  useEffect(() => {
    fetchSeasons();
  }, []);

  const fetchSeasons = async () => {
    try {
      const response = await axios.get("http://localhost:8000/season");
      const data: Number[] = response.data.response;

      if (Array.isArray(data)) {
        setSeason(data);
      } else {
        console.log("as temporadas não foram encontradas");
      }
    } catch (error) {
      console.error("Ocorreu um erro ao buscar as temporadas");
    }
  };

  const handleCountry = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8000/leagues`, {
        params: {
          api_country: country,
          api_season: selectedSeason,
        },
      });

      if (response.status === 200) {
        const leagues = response.data.response;
        setLeagues(leagues);
      } else {
        console.log("pais não encontrado");
      }
    } catch (error) {
      console.error("Ocorreu um erro ao fazer sua solicitação", error);
    }
  };

  return (
    <div className="dashboard">
      <Header />

      <div className="dashboard__container">
        <div className="dashboard__modal">
          {/* <h2>Bem vindo ao dashboard</h2> */}
          <form action="#" onSubmit={handleCountry} className="form">
            <div className="form__input-box">
              <input
                type="text"
                name="country"
                id="country"
                onChange={(event) => setCountry(event.target.value)}
                required
                className="form__input"
                placeholder={placeholder}
              />
            </div>

            <div className="form__input-dropdown">
              <select
                className="form__input"
                name="season"
                onChange={(event) => setSelectedSeason(event.target.value)}
                value={selectedSeason}
              >
                <option value="">Selecione</option>
                {seasons.map((season) => (
                  <option key={`${season}`} value={`${season}`}>
                    {`${season}`}
                  </option>
                ))}
              </select>
            </div>

            <button className="form__button" type="submit">
              Buscar
            </button>
          </form>
        </div>
        <div className="dashboard__league-list">
          <h3 className="dashboard__league-title">Lista das ligas</h3>

          {leagues.length > 0 ? <LeagueList results={leagues} /> : ""}
        </div>
      </div>
    </div>
  );
};
