import MoviePage from "./MoviePage";
import checkAuth from "../../AuthHOC/AuthHOC"

export default checkAuth(MoviePage);