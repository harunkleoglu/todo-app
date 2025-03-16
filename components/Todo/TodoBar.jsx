'use client'
import React, { useEffect, useState } from 'react';
import { getAPI } from '@/services/fetchAPI';
import TodoItem from './TodoItem';

function TodoBar() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAPI('/Todo')
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Todo verileri alınırken hata oluştu:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p className="flex justify-center items-center p-5 rounded-md text-sm font-mono">
        Yükleniyor...
      </p>
    );
  }

  if (!data || data.length === 0 && !loading) {
    return (
      <p className="flex justify-center items-center p-5 rounded-md text-sm font-mono">
        Veri bulunamadı.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-5 py-5">
      {data.map((item) => (
        <TodoItem key={item.id} data={item} />
      ))}
    </div>
  );
}

export default TodoBar;
