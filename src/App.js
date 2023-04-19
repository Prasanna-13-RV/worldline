import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Register from "./Pages/Register";
import Details from "./Pages/Details";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Register />}></Route>
					<Route path="/details" element={<Details />}></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
