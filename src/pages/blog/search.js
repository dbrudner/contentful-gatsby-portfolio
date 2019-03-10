import React, { useState } from "react";
import Layout from "../../components/layout";
import { parse } from "query-string";

const search = async (term, setResults) => {
	const url = "blah";
	const response = await fetch(url);
	setResults(response.json());
};

const Search = props => {
	const [term, setTerm] = useState("");
	const [results, setResults] = useState([]);

	return (
		<Layout>
			<h1>Search Blog</h1>
			<form onSubmit={() => search(term, setResults)}>
				<input
					type="text"
					value={term}
					onChange={e => setTerm(e.target.value)}
				/>
				<button type="submit">Search</button>
			</form>
			<h2>Results</h2>
		</Layout>
	);
};

export default Search;
