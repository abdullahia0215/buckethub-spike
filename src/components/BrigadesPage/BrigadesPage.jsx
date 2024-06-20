import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import '../BrigadesPage/BrigadesPage.css'
export default function BrigadesPage() {
  const history = useHistory();
  return (
    <>
      <h1>Brigades</h1>
      <button onClick={() => history.push("/adventure")} id="adventure-button" className="btn">
        Adventure/Travel
      </button>
      <button onClick={() => history.push("/culture")} id="culture-button" className="btn">
        Cultural/Artistic Experiences
      </button>
      <button onClick={() => history.push("/service")} id="service-button" className="btn">
        Service/Contribution
      </button>
      <button onClick={() => history.push("/growth")} id="growth-button" className="btn">
        Personal Growth/Learning
      </button>
    </>
  );
}
