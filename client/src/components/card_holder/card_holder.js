import { useState, useEffect } from "react";
import CardComponent from "../cards_component/card_component";
import axios from "axios";
import "./stylesheet/style.css"
function CardHolder(props) {
    const [card1Text, setCard1Text] = useState("text loading...");
    const [card2Text, setCard2Text] = useState("text loading...");
    const [card3Text, setCard3Text] = useState("text loading...");



    // fetch the data from the server
    const getText = (cardNumber) => {
        axios.get("http://localhost:9000/card/api/?card=" + cardNumber).then((doc) => {
            // eslint-disable-next-line
            if (cardNumber == 1) {
                setCard1Text(doc.data.text)
                // eslint-disable-next-line
            } else if (cardNumber == 2) {
                setCard2Text(doc.data.text)
            } else {
                setCard3Text(doc.data.text)
            }

        }).catch((err) => {
            console.log(err)
        })

    }

    useEffect(() => {
        getText(1)
        getText(2)
        getText(3)


    });


    return (
        <div className="cardHolder">
            <CardComponent Para={card1Text} UpdateCards={getText} IncAdd={props.IncAdd} IncUpdate={props.IncUpdate} CardNum={1} />
            <CardComponent Para={card2Text} UpdateCards={getText} IncAdd={props.IncAdd} IncUpdate={props.IncUpdate} CardNum={2} />
            <CardComponent Para={card3Text} UpdateCards={getText} IncAdd={props.IncAdd} IncUpdate={props.IncUpdate} CardNum={3} />
        </div>
    )
}
export default CardHolder