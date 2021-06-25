import Head from 'next/head'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'

import Logo from '../public/logo.svg'

import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

import NewPlayerInput from './../components/NewPlayerInput'
import Keypad from './../components/Keypad'

export default function Home() {
  return (
	<div>
		<Head>
			<title>Blackjack Helper | dealer.5x.wtf</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		</Head>
		<div className={"flex justify-center items-center w-screen h-screen"}>
			<div>
				<div>
					<div className={"flex justify-center"}>
						<Image src={Logo} width={128} height={128} alt={"Logo"}></Image>
					</div>
					<h1 className={"font-semibold text-4xl text-center"}>Blackjack</h1>
				</div>
				<div>
					<div className={"mt-8"}></div>
					<div className={"text-center border-0 py-4 px-2 rounded-lg"}>
						<FontAwesomeIcon icon={faUserTie} size={"2x"} className={"text-gray-600"} />
						<br/>
						<span className={"font-bold text-xl"}>Dealer</span>
						<br/>
						<span>You</span>
					</div>

				
					<NewPlayerInput gameStarted={false} />
					
				</div>
			</div>
		</div>
	</div>
  )
}
