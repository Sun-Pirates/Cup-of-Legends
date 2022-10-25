import { Link } from "react-router-dom"
import Header from "../../Components/Header/Header"

export const Home = () => {
  return (
    <div className="container">
      <Header></Header>

      <div className="flex-center">
        <p>Home <Link to="/teste">Teste</Link></p>
      </div>

    </div>
  )
}
