export default function SubmitButton(props:{text:string}){
    return(
        <button className='submit-button' type="submit">
            <p>{props.text}</p>
        </button>
    );    
};