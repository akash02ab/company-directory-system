import {
	ADD_NEW_COMPANY,
	ADD_NEW_PERSON,
	FETCH_COMPANIES,
	FETCH_PERSONS,
	SELECT_COMPANY,
	SET_COMPANY_ERROR,
	SET_PERSON_ERROR,
	TOGGLE_CLICK,
} from ".";

export const addNewCompany = (data) => ({
	type: ADD_NEW_COMPANY,
	payload: data,
});

export const addNewPerson = (data) => ({
	type: ADD_NEW_PERSON,
	payload: data,
});

export const selectCompany = (data) => ({
	type: SELECT_COMPANY,
	payload: data,
});

export const toggleClick = () => ({
	type: TOGGLE_CLICK,
});

export const setCompanyError = (error) => ({
	type: SET_COMPANY_ERROR,
	error: error,
});

export const setPersonError = (error) => ({
	type: SET_PERSON_ERROR,
	error: error,
});

export const fetchCompanies = (data) => ({
	type: FETCH_COMPANIES,
	payload: data,
});

export const fetchPersons = (data) => ({
	type: FETCH_PERSONS,
	payload: data,
});
