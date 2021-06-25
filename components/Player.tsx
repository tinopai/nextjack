import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface IPlayer {
	id: number,
	name: string,
	money: number,
}

class Player extends React.Component<IPlayer> {
	render() {
	  return <div id={`bj_player${this.props.id}`} className={"text-center border-0 py-4 px-2 rounded-lg"}>
				<FontAwesomeIcon icon={faUser} size={"2x"} className={"text-gray-600"} />
				<br/>
				<span className={"font-bold text-xl"}>{this.props.name}</span>
				<br/>
				<span>${this.props.money}</span>
			</div>
	}
  }


export default Player