import PropTypes from 'prop-types';
import { FaCircle } from "react-icons/fa";

export default function TypingResponse({ time, name }) {
    return (
      <li>
        <div className="message-data">
          <span className="message-data-name">
            {" "}
            <FaCircle className="fa fa-circle online" /> {name}
          </span>
          <span className="message-data-time">{time}</span>
        </div>
        {" "}
        <FaCircle className="fa fa-circle online" />
        <FaCircle className="fa fa-circle online" style={{ opacity: 0.5 }} />
        <FaCircle className="fa fa-circle online" style={{ opacity: 0.25 }} />
    </li>
    );
}

TypingResponse.propTypes = {
  id: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export function TypingMessage({ time, name }) {
  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{name}</span>{" "}
          <i>
            <FaCircle className="fa fa-circle me" />
          </i>
        <p>
          {" "}
          <FaCircle className="fa fa-circle me" />
          <FaCircle className="fa fa-circle me" style={{ opacity: 0.5 }} />
          <FaCircle className="fa fa-circle me" style={{ opacity: 0.25 }} />
        </p>
      </div>
    </li>
  );
}

TypingMessage.propTypes = {
id: PropTypes.string.isRequired,
time: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
};