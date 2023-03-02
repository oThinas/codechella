/**
 * Recebe um objeto array-like e retorna um array de objetos.
 * @param {IBandList} object - IBandList - objeto a ser convertido.
 * @returns Array de objetos.
 */
export function convertObjectToArray(object: { [key: number]: object }): any[] {
  const array: any[] = [];
  if (!object) return array;

  for (const key in object) {
    array.push(object[key]);
  }

  return array;
}
