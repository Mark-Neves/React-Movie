import styles from './CategorySectionBar.module.scss';

import { FilterDropdown } from '../FilterDropdown/FilterDropdown';
import { FilterButton } from '../../ui/CategoryButtons/FilterButton';
import { ClearFilterButton } from '../../ui/CategoryButtons/ClearFilterButton';
import { SortButton } from '../../ui/CategoryButtons/SortButton';
import { useState } from 'react';
import { useMemo } from 'react';
import { defoltFilter, getDropdownData } from '../helpers/filterConfig';
import { useFetcher } from '../../hooks/useFetcher';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../helpers/GlobalContext';
import { useCallback } from 'react';

export function CategorySectionBar() {
  const { filters, setFilter } = useContext(CategoryContext);
  const filtersArr = Object.entries(filters);

  //Указывает какой фильтр открыт
  const [openFilter, setOpenFilter] = useState(null);

  // Ref на кнопки фильтров
  const refDropdownButton = useRef(null);

  //Флаг для очистки фильтров
  const noFilters = filtersArr.every(([key, value]) =>
    key !== 'typeCollection' && key !== 'sortCollectionFilter'
      ? typeof value.id === 'object'
        ? value.id.from === '' && value.id.to === ''
        : value.id === ''
      : true,
  );

  // Тогл на фильтры
  const toggleFilter = useCallback((filter) => {
    setOpenFilter((prev) => (prev === filter ? null : filter));
  }, []);

  // Закрываем список открытых фильтров
  useEffect(() => {
    if (openFilter === null) return;
    const handleClick = (e) => {
      if (refDropdownButton.current && !refDropdownButton.current.contains(e.target)) {
        setOpenFilter(null);
      }
    };
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [openFilter]);

  //Изменение текста кнопки при выборе фильтра
  const changeLabelFilters = (label, id) => {
    if (!openFilter || id === undefined) return;

    setFilter((prev) => ({
      ...prev,
      [openFilter]: {
        ...prev[openFilter],
        label: `${label.at(0).toUpperCase() + label.slice(1)}`,
        id: typeof id === 'object' ? { from: id.from, to: id.to } : id,
      },
    }));
    setOpenFilter(null);
  };

  // ЖАНРЫ и СТРАНЫ
  const { data: filterValue } = useFetcher({
    url: 'https://kinopoiskapiunofficial.tech/api/v2.2/films/filters',
  });

  // Очистка фильтров
  const filtersClear = () => {
    setFilter({ ...defoltFilter });
  };
  // Передает в дропдаун конкретный фильтр
  const dataDropdown = useMemo(
    () => getDropdownData(openFilter, filterValue),
    [openFilter, filterValue],
  );
  return (
    <>
      <div className={styles.searchOptions} ref={refDropdownButton}>
        {filtersArr &&
          filtersArr.map(([key, value]) => {
            const isActive = openFilter === key;
            return (
              <div key={key} className={styles.filterItem}>
                {value.mode === 'sort' ? (
                  <SortButton
                    activeFilter={key}
                    value={value.label}
                    isActive={isActive}
                    toggleFilter={toggleFilter}
                  />
                ) : (
                  <FilterButton
                    activeFilter={key}
                    value={value.label}
                    isActive={isActive}
                    toggleFilter={toggleFilter}
                  />
                )}

                {isActive && (
                  <FilterDropdown
                    changeLabelFilters={changeLabelFilters}
                    dataDropdown={dataDropdown}
                  />
                )}
              </div>
            );
          })}
      </div>
      {!noFilters && <ClearFilterButton filtersClear={filtersClear} />}
    </>
  );
}
