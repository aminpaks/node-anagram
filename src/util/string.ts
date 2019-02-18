export const normalizeString = (word: string) => word.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
