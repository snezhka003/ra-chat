import PropTypes from 'prop-types';
import { FaCircle } from "react-icons/fa";

export default function Message({ time, name, text }) {
    return (
        <li>
            <div className="message-data">
            <span className="message-data-name">
                {" "}
                <FaCircle className="fa fa-circle online" /> {name}
            </span>
            <span className="message-data-time">{time}</span>
            </div>
            <div className="message my-message">{text}</div>
        </li>
    );
}

Message.propTypes = {
    id: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string,
};