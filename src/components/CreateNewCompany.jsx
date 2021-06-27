import "../styles/createnewcompany.css";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewCompany, setCompanyError } from "../actions/action";
import { addCompanyToFirestore } from "../api/firebaseMethods";

function CreateNewCompany() {
	const inputRef = useRef({
		name: "",
		address: "",
		revenue: 0,
		phone: null,
	});

	const { company_error } = useSelector((state) => state);
	const dispatch = useDispatch();

	const clickhandler = () => {
		for (let input in inputRef.current) {
			if (!inputRef.current[input].value) {
				dispatch(setCompanyError(`${input} can't be empty.`));
				return;
			}
		}

		dispatch(setCompanyError(null));

		const data = {
			name: inputRef.current.name.value,
			address: inputRef.current.address.value,
			revenue: inputRef.current.revenue.value,
			phone: inputRef.current.phone.value,
		};

		dispatch(addNewCompany(data));

		addCompanyToFirestore(data);

		for (let input in inputRef.current) {
			inputRef.current[input].value = "";
		}
	};

	return (
		<div className="create-new-company">
			<h1>Create new company</h1>
			<label htmlFor="Name">Name:</label>
			<input type="text" ref={(value) => (inputRef.current.name = value)} />

			<label htmlFor="Address">Address:</label>
			<input type="text" ref={(value) => (inputRef.current.address = value)} />

			<label htmlFor="Revenue">Revenue:</label>
			<input type="text" ref={(value) => (inputRef.current.revenue = value)} />

			<label htmlFor="Phone">Phone:</label>
			<input type="text" ref={(value) => (inputRef.current.phone = value)} />

			<button onClick={clickhandler}>Save</button>

			{company_error && <p>{company_error}</p>}
		</div>
	);
}

export default CreateNewCompany;
