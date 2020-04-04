import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

import { filterNote, sortNote } from "../../redux/actions/filter";

const Actions = (props) => {
	const textRef = useRef();
	const sortRef = useRef();
	const [filter, setFilter] = useState({
		text: "",
		sortBy: "byCreated",
	});
	const { text, sortBy } = filter;

	useEffect(() => {
		textRef.current = text;
		sortRef.current = sortBy;
	});
	const prevText = textRef.current;
	const prevSort = sortRef.current;

	useEffect(() => {
		if (prevText !== text) {
			props.filterNote(text);
		}
		if (prevSort !== sortBy) {
			props.sortNote(sortBy);
		}
	}, [text, sortBy]);

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setFilter((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<div className="actions">
			<div className="actions__container">
				<input
					id="search-text"
					type="text"
					className="input"
					name="text"
					placeholder="Filter notes"
					value={text}
					onChange={handleOnChange}
				/>
				<select
					id="filter-by"
					className="dropdown"
					name="sortBy"
					value={sortBy}
					onChange={handleOnChange}
				>
					<option value="byEdited">Sort by last edited</option>
					<option value="byCreated">Sort by recently created</option>
					<option value="alphabetical">Sort alphabetically</option>
				</select>
			</div>
		</div>
	);
};

export default connect(null, { filterNote, sortNote })(Actions);
