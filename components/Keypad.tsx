import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

let numberElements = new Array(), threeCount = 0;

// Number cards from 2 to 10
for(let i=2;i<=10;i++) {
    if(threeCount == 3) {
        threeCount = 0
        numberElements.push(<br/>)
    }

    threeCount++;
    numberElements.push(<button className={"h-20 w-20 m-1 rounded-md border-2 border-gray-400 hover:bg-gray-400 transition duration-300"}>{i}</button>)
}

class Keypad extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return <div>
            <div className={"flex font-bold text-lg"}>
                <div className={"mx-8"}>
                    <button className={"h-20 w-20 m-1 rounded-md border-2 border-green-400 hover:bg-green-400 transition duration-300"}>J</button>
                    <br/>
                    <button className={"h-20 w-20 m-1 rounded-md border-2 border-green-400 hover:bg-green-400 transition duration-300"}>K</button>
                    <br/>
                    <button className={"h-20 w-20 m-1 rounded-md border-2 border-green-400 hover:bg-green-400 transition duration-300"}>Q</button>
                </div>

                <div>
                    {numberElements}
                </div>

                <div className={"mx-8"}>
                    <button className={"h-20 w-20 m-1 rounded-md border-2 border-blue-400 hover:bg-blue-400 transition duration-300"}>A</button>
                    <br/>
                    <button className={"h-20 w-20 m-1 rounded-md border-2 border-blue-400 hover:bg-blue-400 transition duration-300"}>
                        <FontAwesomeIcon icon={faBackspace} />
                    </button>
                    <br/>
                    <button className={"h-20 w-20 m-1 rounded-md border-2 border-blue-400 hover:bg-blue-400 transition duration-300"}>Stand</button>
                </div>
            </div>
        </div>
    }
}

export default Keypad
