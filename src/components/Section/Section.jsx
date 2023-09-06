import css from './Section.module.css';
import PropTypes from 'prop-types';

export function Section({ className, title, children }) {
  return (
    <section className={css[className]}>
      <div className="container">
        <h2 className={css.sectionTitle}>{title}</h2>
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
