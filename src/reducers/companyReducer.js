import {
	ADD_NEW_COMPANY,
	ADD_NEW_PERSON,
	FETCH_COMPANIES,
	FETCH_PERSONS,
	SELECT_COMPANY,
	SET_COMPANY_ERROR,
	SET_PERSON_ERROR,
	TOGGLE_CLICK,
} from "../actions";

const initialState = {
	companies: [],
	persons: [],
	selectedCompany: 0,
	clicked: false,
	company_error: null,
	person_error: null,
};

const companyReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_COMPANIES:
			return { ...state, companies: [...action.payload] };
		case FETCH_PERSONS:
			return { ...state, persons: [...action.payload] };
		case ADD_NEW_COMPANY:
			return {
				...state,
				companies: [...state.companies, action.payload],
			};
		case ADD_NEW_PERSON:
			return { ...state, persons: [...state.persons, action.payload] };
		case SELECT_COMPANY:
			return { ...state, selectedCompany: action.payload };
		case TOGGLE_CLICK:
			return { ...state, clicked: !state.clicked };
		case SET_COMPANY_ERROR:
			return { ...state, company_error: action.error };
		case SET_PERSON_ERROR:
			return { ...state, person_error: action.error };
		default:
			return state;
	}
};

export default companyReducer;
