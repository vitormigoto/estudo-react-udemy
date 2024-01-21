import './styles.css';

export const Button = ({text, onClick, disabled}) =>{
    // const {text, onClick, disabled} = this.props; 
    return (
        <button 
            disabled={disabled} 
            className='button' 
            onClick={onClick}
        >
            {text}
        </button>
    );        
}