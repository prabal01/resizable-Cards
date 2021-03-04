
import "./stylesheet/style.css"
import { Resizable } from "re-resizable";
import penImg from "./media/pen-solid.svg"
import { useEffect, useState } from "react";
import axios from "axios";
function CardComponent(props) {

    const [addNewMode, setAddNewMode] = useState(false)
    const [textInside, setTextInside] = useState("")
    const [updateMode, setUpdateMode] = useState(false)
    const [tempText, setTempText] = useState("")
    const [modeInfo, setModeInfo] = useState("Display Mode")



    useEffect(() => {
        setTextInside(props.Para)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    })


    // ----------handling the edit mode----------
    // normal Mode

    var para = <p className="contentPara">{textInside}</p>
    var addButton = <button className="addButton" onClick={() => {
        setModeInfo("Type Something")
        setAddNewMode(true)
        setTempText("")
    }}>
        Add
    </button>

    var updateButton = <button className="updateButton" onClick={() => {
        setUpdateMode(true)
        setModeInfo("Update Text")
        setTempText(textInside)


    }}>
        Update
    </button>

    // in add mode
    if (addNewMode === true) {
        para = <input type="text" value={tempText} placeholder="Type something..." onChange={(e) => {
            setTempText(e.target.value)

        }}></input>

        addButton = <button className="saveButton " onClick={() => {

            // updating on the client side
            props.IncAdd()
            setAddNewMode(false)
            setTextInside(tempText)
            var text = tempText
            console.log(text)

            // making post request(updating on the server)
            const url = "http://localhost:9000/card/api/"
            axios.post(url, {
                "card": props.CardNum,
                "text": text
            })
                .then(function (response) {
                    props.UpdateCards(props.CardNum)

                })
                .catch(function (error) {
                    console.log(error);
                });
        }}>
            Save
        </button>

        updateButton = <button className="cancelButton" onClick={() => {
            setAddNewMode(false)
            setModeInfo("Display Mode")
        }}>
            Cancel
        </button>

    }

    // ---------------Handling Update-------------------

    // if update mode is true
    if (updateMode === true) {
        updateButton = <button className="cancelButton" onClick={() => {

            setUpdateMode(false)
        }
        }>
            Cancel
    </button>

        addButton = <button className="saveButton" onClick={() => {
            setTextInside(tempText)
            props.IncUpdate()
            setUpdateMode(false)
            // making update request
            var text = tempText
            axios.patch('http://localhost:9000/card/api/',
                {
                    card: props.CardNum,
                    text: text
                },

            ).then(function (response) {
                props.UpdateCards(props.CardNum)

            })
                .catch(function (error) {
                    console.log(error);
                });



        }}>Update</button>

        para = <input type="text" value={tempText} placeholder="Type something..." onChange={(e) => {
            setTempText(e.target.value)

        }}></input>
    }




    // styling properties of resizable card
    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        border: "solid 1px #ddd",
        background: "#f0f0f0",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",


    };
    return (
        <div className="outerCardBody">
            {/* ----resizable card-------*/}
            <Resizable
                style={style}
                defaultSize={{
                    width: 200,
                    height: 200
                }}
                minWidth="160px"
                minHeight="160px"
            >
                {/* -------cardBody--------- */}
                <div className="cardBody">
                    {/* Note : it is devided into three parts 1-header , 2-content , 3- buttons */}

                    {/* header starts here */}

                    <div className="header cardChild">
                        <div className="logoDiv">
                            <img className="penImg" src={penImg} alt="" />
                        </div>
                        <div className="paraDiv">
                            <p>{modeInfo}</p>
                        </div>
                    </div>

                    {/* content start here */}

                    <div className="content cardChild">
                        {para}
                    </div>

                </div>


            </Resizable>

            {/* ----------buttons starts here-------- */}

            {/* add button */}
            <div className="buttons">
                <div className="addButtonDiv cardChild">
                    {addButton}
                </div>
                <div className="updateButtonDiv">
                    {updateButton}
                </div>
            </div>

        </div>
    );
};

export default CardComponent