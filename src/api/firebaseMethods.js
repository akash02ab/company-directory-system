import { fetchCompanies, fetchPersons } from "../actions/action";
import firebase from "../firebaseConfig";
const db = firebase.firestore();

export const addCompanyToFirestore = async (data) => {
	try {
		await db
			.collection("companies")
			.doc(`${data.name.replaceAll(" ", "-")}`)
			.set(data, { merge: true });
	} catch (err) {
		console.error(err);
	}
};

export const addPersonToFirestore = async (data) => {
	try {
		await db.collection("persons").doc(Date.now().toString()).set(data, { merge: true });
	} catch (err) {
		console.error(err);
	}
};

export const getDataFromFirestore = () => {
	return async function (dispatch) {
		try {
			let response = await db.collection("companies").get();
			let companies = [];
			response.forEach((doc) => companies.push(doc.data()));
			dispatch(fetchCompanies(companies));

			response = await db.collection("persons").get();
			let persons = [];
			response.forEach((doc) => persons.push(doc.data()));
			dispatch(fetchPersons(persons));
		} catch (err) {
			console.error(err);
		}
	};
};
