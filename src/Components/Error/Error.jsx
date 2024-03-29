import { useRouteError } from "react-router-dom";
import Header from '../Header/Header.jsx';
import Footer from "../Footer/Footer.jsx";
import './Error.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <>
    <Header/>
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    <Footer/>
    </>
  );
}