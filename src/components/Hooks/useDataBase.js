import { useState } from 'react';

export default function useDataBase() {
  const [dataBase, setDataBase] = useState([]);

  return { dataBase, setDataBase };
}
