import { useEffect, useState } from "react"
import fakeRecipe from "../API/recipe-detail.json"

const options = {
  method: 'GET',
	headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
		'X-RapidAPI-Host': import.meta.env.VITE_API_HOST
	}
};

const useRecipeDetail = (id: number|null, realData: boolean = false) => {
  const [recipe, setRecipe] = useState(fakeRecipe);
  const [error, setError] = useState<Error|null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const url = `https://tasty.p.rapidapi.com/recipes/get-more-info?id=${id}`;
    const getRecipe = async () => {
      if (!realData) {
        console.log(`FakeFetch URL: ${url}`)
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(url, options);
        if (response.status >= 400) {
          throw new Error("server error");
        }
        const result = await response.json();
        setRecipe(result);
      } catch (error) {
        if (error instanceof Error) setError(error);
        else throw Error("Unknown error");
      } finally {
        setLoading(false);
      }
    };

    getRecipe();
  }, [id, realData]);

  return { recipe, error, loading };
};

export default useRecipeDetail;
