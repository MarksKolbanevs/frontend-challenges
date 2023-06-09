export default function DateInput(props:{placeholder:string,name:string,errorMessage:string,onInputChange: (value: string) => void}){
    const handleChange = (event : any) => {
        const value = event.target.value;
        props.onInputChange(value);
    };
    return(
        <div className="date-input-container">
        <label className={props.errorMessage ? "red" : ""} htmlFor={props.name}>{props.name}</label>
        <input className={props.errorMessage ? "date-input red-border" : "date-input"} name={props.name} placeholder={props.placeholder} onChange={handleChange}/>
        <p className="error-message" style = {props.errorMessage ? {visibility:"visible"} : {visibility:"hidden"}}>{props.errorMessage ? props.errorMessage : "Error"}</p>
        </div>
    )
}
