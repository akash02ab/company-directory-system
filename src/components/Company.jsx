import "../styles/company.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectCompany } from "../actions/action";

function Company() {
	const { companies } = useSelector((state) => state);
	const dispatch = useDispatch();
	const history = useHistory();

	const clickhandler = (index) => {
		dispatch(selectCompany(index));
		history.push("/details");
	};

	return (
		<div className="companies">
			<h1>Companies</h1>
			{companies.map((company, index) => {
				return (
					<div className="company" key={index}>
						<h1>{company.name}</h1>
						<h2>Address:</h2>
						<p>{company.address}</p>
						<h2>Revenue:</h2>
						<p>{company.revenue}</p>
						<h2>Phone:</h2>
						<p>{company.phone}</p>
						<button onClick={() => clickhandler(index)}>Company Overview</button>
					</div>
				);
			})}
		</div>
	);
}

export default Company;
