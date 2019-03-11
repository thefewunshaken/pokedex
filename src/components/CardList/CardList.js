import React from 'react';
import Card from '../Card/Card';
import './CardList.css';

const CardList = ({ pokemon }) => {
	return (
		<div className="card-list">
			{
				pokemon.map((robot, i) => {
					return (
						<Card
							key={pokemon[i].id}
							id={pokemon[i].id}
							name={pokemon[i].name}
							picture={pokemon[i].picture}
							/>
					);
				})
			}
			</div>
	);
}

export default CardList;