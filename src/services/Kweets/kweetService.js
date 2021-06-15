import http from "../httpcommon";

/**
	* This is the recipe service
*/
export default class KweetService {
	// Retrieve all recipes with this pagination.
	// Retrieve this specific recipe
	get(id) {
		return http.get<Recipe>("/profile/" + id);
	}
	// Create this recipe
	post() {
        var kweet = "{ProfileId: , ProfileName}"
		return http.post<Kweet>("/profile", kweet);
	}
	// Update this recipe
	put(recipe) {
		return http.put<Recipe>("/profile", recipe);
	}
	// Delete this recipe
	delete(id) {
		return http.delete<Recipe>("/profile/" + id);
	}
}