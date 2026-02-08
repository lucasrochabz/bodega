<!-- fix: i18n -->

add erros:

```json
{
  "errors": {
    "PRODUCT_NOT_FOUND": "Product not found"
  }
}
```

<!-- fix: hooks -->

add useAsync:

```js
import { useEffect, useState } from 'react';

const useAsync = (asyncFunction, deps = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const run = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await asyncFunction();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    run();
  }, deps);

  return { data, loading, error };

  export default useAsync;

  // uso:
  const useProducts = ({ page, pageSize }) => {
    return useAsync(
      () => productsService.getAllProducts({ page, pageSize }),
      [page, pageSize],
    );
  };
};
```
