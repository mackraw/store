import propTypes from 'prop-types';

export default function Error({ error }) {
  let content = (
    <div className="message error">
      <div className="content">
        <div>
          <h3 className="title">Oops! </h3>
          <p>{error.message.replace('GraphQL error: ', '')}</p>
        </div>
      </div>
    </div>
  );
  if (!error || !error.message) content = null;
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    content = (
      <div className="message error">
        <div className="content">
          {error.networkError.result.errors.map((error, i) => (
            <div key={i}>
              <h3 className="title">Oops! </h3>
              <p>{error.message.replace('GraphQL error: ', '')}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return content;
}

Error.propTypes = {
  error: propTypes.object,
};
