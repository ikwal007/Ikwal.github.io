export async function fetchDataPagination<T>(link: string): Promise<T> {
  const res = await fetch(link);

  const data = await res.json();

  return data as T;
}
