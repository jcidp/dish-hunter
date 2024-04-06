import { useEffect, useState } from "react"
import fakeRecipes from "../API/recipes-example.json"

const options = {
  method: 'GET',
	headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
		'X-RapidAPI-Host': import.meta.env.VITE_API_HOST
	}
};

export const useRecipes = (from: number = 0, ingredients:string = "", realData: boolean = false) => {
  const [recipes, setRecipes] = useState(fakeRecipes);
  const [error, setError] = useState<Error|null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const url = `https://tasty.p.rapidapi.com/recipes/list?from=${from}&size=20&q=${ingredients}`;
    const getRecipes = async () => {
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
        setRecipes(result);
      } catch (error) {
        if (error instanceof Error) setError(error);
        else throw Error("Unknown error");
      } finally {
        setLoading(false);
      }
    };

    getRecipes();
  }, [from, ingredients, realData]);

  return { recipes, error, loading };
};