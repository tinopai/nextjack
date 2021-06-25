import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Keypad from './Keypad';

import Player from './Player'

interface INewPlayerInput {
	gameStarted: boolean,
	input: string,
	lastId: number,
	PlayerList: Array<JSX.Element>,
	startingMoney: number,
}

interface IProps {
	gameStarted: boolean,
}

class NewPlayerInput extends React.Component<IProps, INewPlayerInput> {
	constructor(props: any) {
		super(props);

		this.state = {
			input: "Juan",
			lastId: 0,
			PlayerList: [],
			startingMoney: 5000,
			gameStarted: props.gameStarted
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.isGameStarted = this.isGameStarted.bind(this);
		this.startGame = this.startGame.bind(this);
	}

	handleKeyDown(event: any) {
		if(event.key === "Enter") {
			this.addPlayer(this.getNewPlayerName())
			event.target.value = ""
		}
	}

	handleChange(event: any) {
		this.setState({
			input: event.target.value
		})
	}
	getNewPlayerName(): string {
		if(this.state.input)
			return this.state.input
		else
			return "Juan"
	}
	addPlayer(name=`Usuario${this.state.lastId}`, money=this.state.startingMoney) {
		let _players = this.state.PlayerList
		_players.push(<Player name={name} money={money} id={this.state.lastId} key={this.state.lastId} />)

		this.setState({
			PlayerList: _players,
			lastId: this.state.lastId+1,
		})
		
	}

	startGame() {
		this.setState({
			gameStarted: true
		})
	}

	isGameStarted() {
		if (this.state.gameStarted) {
			return <div>
				<div id={"playerList"} className={"flex justify-center gap-6"}>
					{this.state.PlayerList}
				</div>
				<Keypad />
			</div>
		}

		return <div>
			<div id={"playerList"} className={"flex justify-center gap-6"}>
				{this.state.PlayerList}
			</div>
			<div className={"flex justify-center"}>
				<input
					id="playerName"
					type="text"
					placeholder={"Player name"}
					className={"border-2 p-1 border-gray-300 rounded-md"}
					onChange={this.handleChange}
					onKeyDown={this.handleKeyDown}
				/>
				<button
					className={"ml-1 bg-green-500 text-gray-100 rounded-md px-4 h-9"}
					onClick={()=>this.addPlayer(this.getNewPlayerName())}
				>
					<FontAwesomeIcon icon={faUserPlus} size={"1x"} />
				</button>
			</div>
			<div className={"flex justify-center"}>
				<button
						className={"mt-1 text-gray-100 font-semibold bg-blue-500 rounded-md px-4 h-9"}
						onClick={this.startGame}
					>
					Start game
				</button>
			</div>
		</div>
		
	}

	render() {
		return <this.isGameStarted/>
	}
}

export default NewPlayerInput
