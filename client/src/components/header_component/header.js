import "./stylesheet/style.css"
function Header(props) {
    return (
        // parent div of header component
        <div className="headerComponentParentDiv">
            <div className="headerTitleDiv">
                <h3 className="headerTitle">
                    Add: {props.AddCount} | Update: {props.UpdateCount}
                    </h3>
            </div>

        </div>
    )
}

export default Header