import { BASE_URL } from '../constants/api';

export const fetchBookfromApi = async (isbn: string) => {
  try {
    const fetchData = await fetch(`${BASE_URL}${isbn}`);
    if (!fetchData.ok) throw new Error('取得に失敗しました。');
    return await fetchData.json();
  } catch (error: unknown) {
    console.error(`Error:${error}`);
  }
};
