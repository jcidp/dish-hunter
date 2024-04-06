import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    const getErrorMessage = (error: unknown) => {
      if (isRouteErrorResponse(error)) return `${error.status}: ${error.statusText}`;
      if (error instanceof Error) return error.message;
      return "Unexpected error";
    }

    const errorMessage = getErrorMessage(error);

    return (
        <div>
            <h2>Oh no!</h2>
            <p>An error has occurred.</p>
            <p>
                <i>{errorMessage}</i>
            </p>
            <Link to="/">Return Home</Link>
        </div>
    );
};

export default ErrorPage;
