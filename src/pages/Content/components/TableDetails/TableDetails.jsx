import styles from './TableDetails.module.scss';

import { dateTable } from '../../../../components/helpers/filterConfig';

export function TableDetails({ movie, actorList, isCompact }) {
  return (
    <div className={styles.wrapperDetails}>
      {!isCompact && <h3 className={styles.detailsTitle}>О фильме</h3>}
      <table>
        <tbody>
          {dateTable(movie)
            .filter((el) => el.description !== '-')
            .slice(0, isCompact ? 1 : movie.length)
            .map((el) => (
              <tr key={el.title}>
                <td>{el.title}:</td>
                <td>{el.description}</td>
              </tr>
            ))}
          {!isCompact &&
            actorList.map((el) => (
              <tr key={el.title}>
                <td>{el.title}:</td>
                <td>{el.actors.map((el) => el.nameRu).join(', ')}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
