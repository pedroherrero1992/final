// utils/sort.ts

type SortDirection = 'ascending' | 'descending';

export function sortData<T extends { [key: string]: any }>(
  data: T[], 
  key: string, 
  direction: SortDirection = 'ascending'
): T[] {
  return [...data].sort((a, b) => {
    const getValue = (obj: T, path: string) => {
      return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    };

    const valueA = getValue(a, key);
    const valueB = getValue(b, key);

    if (valueA < valueB) {
      return direction === 'ascending' ? -1 : 1;
    }
    if (valueA > valueB) {
      return direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });
}
