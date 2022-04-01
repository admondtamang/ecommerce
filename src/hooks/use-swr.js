import { useEffect, useState } from 'react';
import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function useCustomSwr(url) {
  const { data, ...rest } = useSWR(url, fetcher);

  // useEffect(() => {
  //     if (data) {
  //         setResult(data);
  //     }
  // }, [url]);

  return { data, ...rest };
}
