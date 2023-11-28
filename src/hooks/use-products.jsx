import { useEffect, useState } from "react";

// 커스텀 훅
// 재사용 가능한 훅 만들때, use*** 이렇게 이름 짓는다.
export default function useProducts({salesOnly}) {
  const [_isLoading, setLoading] = useState(false);
  const [_isError, setError] = useState(undefined);
  const [_product, setProject] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);

    // NOTE: 세일(true)/일반(faㅣse) 리스트 호출
    fetch(`datas/${salesOnly ? 'sale_' : ''}products.json`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setProject(data);
    })
    .catch(() => {
      setProject([]);
      setError(true);
    })
    .finally(() => {
      setLoading(false);
    });
    
    return () => {
      console.log('🤮지웠서용🤮');
    }
  }, [salesOnly]); // DependencyList

  return [_isLoading, _isError, _product];
}