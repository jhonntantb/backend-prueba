import { useHistory } from "react-router";

export default function NotFound() {
  var history = useHistory();

  function handleClick() {
    history.push("/");
  }
  return (
    <div className="not-found text-center">
      <img
        className="not-found"
        src="https://sabuss.com/404.png"
        alt="404 - No se encontró la Página solicitada"
      />
      {/* <Link to='/Home' style={{ textDecoration: 'none' }}> */}
      <button
        className="btn btn-block btn-black rm-border"
        onClick={handleClick}
      >
        Volver al Inicio!
      </button>
      {/* </Link> */}
    </div>
  );
}
