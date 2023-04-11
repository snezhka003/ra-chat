import Message from "./Message";
import Response from "./Response";
import TypingResponse, { TypingMessage } from "./Typing";

export default function MessageHistory({list = []}) {
    if (list.length === 0) {
        return null;
    }

    return (
        <ul>
            {list.map(({ id, from, type, text, time }) => {
                const { name } = from;

                switch (type) {
                case "message":
                    return (
                    <Message id={id} name={name} text={text} time={time} key={id} />
                    );
                case "response":
                    return (
                    <Response id={id} name={name} text={text} time={time} key={id} />
                    );
                case "typing":
                    return name === list[0].from.name ? 
                    <TypingMessage id={id} name={name} text={text} time={time} key={id} /> : <TypingResponse id={id} name={name} text={text} time={time} key={id} /> ;
                default:
                    return null;
                }
            })}
        </ul>
    );
}