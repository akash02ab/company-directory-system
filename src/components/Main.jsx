import "../styles/main.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDataFromFirestore } from "../api/firebaseMethods";
import AddNewPerson from "./AddNewPerson";
import Company from "./Company";
import CreateNewCompany from "./CreateNewCompany";

export default function Main() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getDataFromFirestore());
		// eslint-disable-next-line
	}, []);

	return (
		<div className="container">
			<div className="view-side">
				<Company />
			</div>
			<div className="input-side">
				<CreateNewCompany />
				<AddNewPerson />
			</div>
		</div>
	);
}
