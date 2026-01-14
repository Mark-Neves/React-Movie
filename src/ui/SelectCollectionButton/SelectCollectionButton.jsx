import styles from './SelectCollectionButton.module.scss';

export function SelectCollectionButton({ element, index, active, handleCollection }) {
  return (
    <button
      className={`${styles.typeCollection} ${active === index ? styles.active : ''}`}
      onClick={() => handleCollection(index)}
    >
      Популярные {element?.label}
    </button>
  );
}
