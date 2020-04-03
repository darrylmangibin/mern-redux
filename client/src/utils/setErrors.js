export default (errors, cb) => {
	if (Array.isArray(errors)) {
		errors = errors.reduce((acc, val) => {
			return Object.assign({}, acc, { [val.param]: val.msg });
		}, {});
		cb(errors);
	} else {
		cb(errors);
	}
};
