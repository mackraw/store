import propTypes from 'prop-types';

export default function Hero({
  title = '',
  subtitle = '',
  heroStyles = '',
  textStyles = '',
  titleStyles = '',
  subtitleStyles = '',
  children,
}) {
  return (
    <div className={`hero ${heroStyles}`}>
      <div className={`text container-inner ${textStyles}`}>
        <h2 className={`title ${titleStyles}`}>{title}</h2>
        <p className={`subtitle ${subtitleStyles}`}>{subtitle}</p>
        {children}
      </div>
    </div>
  );
}

Hero.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
  textStyles: propTypes.string,
  heroStyles: propTypes.string,
  titleStyles: propTypes.string,
  subtitleStyles: propTypes.string,
  children: propTypes.object,
};
