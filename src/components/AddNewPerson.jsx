import "../styles/addnewperson.css";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPerson, setPersonError, toggleClick } from "../actions/action";
import { addPersonToFirestore } from "../api/firebaseMethods";

function AddNewPerson() {
	const { companies, clicked, person_error } = useSelector((state) => state);
	const dispatch = useDispatch();
	const inputRef = useRef({
		name: "",
		address: "",
		company: null,
	});

	const savehandler = () => {
		if (!inputRef.current.name.value) {
			dispatch(setPersonError("name can't be empty."));
			return;
		}
		if (!inputRef.current.address.value) {
			dispatch(setPersonError("address can't be empty."));
			return;
		}
		if (!inputRef.current.company) {
			dispatch(setPersonError("please select a company."));
			return;
		}

		dispatch(setPersonError(null));

		const data = {
			name: inputRef.current.name.value,
			address: inputRef.current.address.value,
			company: inputRef.current.company,
		};

		dispatch(addNewPerson(data));

		addPersonToFirestore(data);

		inputRef.current.name.value = "";
		inputRef.current.address.value = "";
		inputRef.current.company = "";
	};

	return (
		<div className="add-new-person">
			<h1>Add new person</h1>
			<label htmlFor="name">Name:</label>
			<input type="text" ref={(value) => (inputRef.current.name = value)} />

			<label htmlFor="address">Address:</label>
			<input type="text" ref={(value) => (inputRef.current.address = value)} />

			<div className="drop-down" onClick={() => dispatch(toggleClick())}>
				Select Employer <span>{">"}</span>
				<div className={clicked ? "list" : "hide"}>
					{companies.map((company, index) => (
						<div
							className="list-item"
							onClick={() => (inputRef.current.company = company.name)}
							key={"emp" + index}
						>
							{company.name}
						</div>
					))}
				</div>
			</div>

			<button onClick={savehandler}>Save</button>

			{person_error && <p>{person_error}</p>}
		</div>
	);
}

export default AddNewPerson;
