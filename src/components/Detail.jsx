import "../styles/detail.css";
import { useSelector } from "react-redux";

function Detail() {
	const { companies, persons, selectedCompany } = useSelector((state) => state);
	const company = companies[selectedCompany];
	const employers = persons.filter((person) => person.company === company.name);

	return (
		<div className="details">
			<div className="profile-overview">
				<h1>Profile Overview</h1>
				<h2>Address:</h2>
				<p>{company.address}</p>
				<h2>Revenue:</h2>
				<p>{company.revenue}</p>
				<h2>Phone:</h2>
				<p>{company.phone}</p>
				<h2>Total Employees:</h2>
				<p>{employers.length}</p>
			</div>

			<div className="employees">
				<h1>Employees</h1>
				{employers.map((employee, index) => {
					return (
						<div className="employee" key={index}>
							<h2>{employee.name}</h2>
							<h3>Address:</h3>
							<p>{employee.address}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Detail;
