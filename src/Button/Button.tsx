import icon from '../Images/cat-svgrepo-com.svg';
import './Button.modules.css'
import sprite from '../Images/sprite.svg'

type ButtonPropsType = {
    style: {
        backgroundColor?: string
    },
    iconId: string;
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button style={props.style}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${sprite}#${props.iconId}`} />
            </svg>
        </button>
    )
}

