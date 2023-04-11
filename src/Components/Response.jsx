import PropTypes from 'prop-types';
import { FaCircle } from "react-icons/fa";

export default function Response({ time, name, text }) {
    return (      
      <li className="clearfix">
        <div className="message-data align-right">
            <span className="message-data-time">{time}</span> &nbsp; &nbsp;
            <span className="message-data-name">{name}</span>{" "}
            <i>
                <FaCircle className="fa fa-circle me" />
            </i>
        </div>
        <div className="message other-message float-right">{text}</div>
    </li>
    );
}

Response.propTypes = {
    id: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string,
};