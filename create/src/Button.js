import PropTypes from 'prop-types';         // PropTypes 
import styles from "./Button.module.css";   // 독립적 css 모듈

function Button({ text, onClick }){
    return (
        <button className={styles.btn} onClick={onClick}>
            {text}
        </button>
    );
}

Button.propTypes = {
    text : PropTypes.string.isRequired,
}

export default Button;