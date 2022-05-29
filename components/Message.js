import propTypes from 'prop-types';

export default function Message({ messageType, children }) {
  return (
    <div className={`message ${messageType}`}>
      <div className="message-content">{children}</div>
    </div>
  );
}

Message.propTypes = {
  messageType: propTypes.string,
  children: propTypes.string,
};
