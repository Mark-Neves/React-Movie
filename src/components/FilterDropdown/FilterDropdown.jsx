import styles from './FilterDropdown.module.scss';

export function FilterDropdown({ changeLabelFilters, dataDropdown }) {
  return (
    <div className={styles.dropDown}>
      <ul className={styles.dropDownList}>
        {dataDropdown.map((value) => (
          <li
            key={value.label}
            className={styles.dropDownItem}
            onClick={() => changeLabelFilters(value.label, value.id)}
          >
            {value.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
