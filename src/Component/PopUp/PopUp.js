import './PopUp.css'
import ImportPopUp from "../PopUp/ImportPopUp/ImportPopUp";
import DeletePopUp from "../PopUp/DeletePopUp/DeletePopUp";
const PopUp = (props)=>{
    console.log(props.trigger.importPopUp,props.trigger.deletePopUp)
    return (props.trigger.importPopUp||props.trigger.deletePopUp) ? (
        <div className="popup-outer">
            <div className="popup-inner">
            <ImportPopUp trigger={props.trigger.importPopUp} setTrigger={props.setTrigger}/>
            <DeletePopUp trigger={props.trigger.deletePopUp} setTrigger={props.setTrigger}/>
            </div>
        </div>
    ) : "";
}
export default PopUp;