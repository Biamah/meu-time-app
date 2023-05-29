import React, { FC } from "react";
import './LeagueList.scss';

interface IProps {
  results: League[];
}

interface League {
  league: any;
  id: number;
  name: string;
  country: any;
}

export const LeagueList: FC<IProps> = (props) => {
  return (
    <ul className="league-list">
      {props.results.map((league) => (
        <li className="league-list__item">
          <div key={league.league.id} className="league-list__link">
            <p>Nome da liga: {league.league.name}</p>
            <p>País: {league.country.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
