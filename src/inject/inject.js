if (!isWorksheetPage()) {
	// redirect user to current worksheet page
	const basePath = "http://compass.fseng.com.hk/mjs_timesheet.php?postedBack=0&cmd=1&dstart_date=2017-03-16&dend_date=2017-04-15&suser_id=whshum";
	// const basePath = "http://compass.fseng.com.hk/mjs_timesheet.php?postedBack=0&cmd=1&dstart_date=2017-03-16&dend_date=2017-04-12&suser_id=whshum";
	const start_date = new Date();
	if (start_date.getDate() <= 16) start_date.setMonth(start_date.getMonth() - 1);
	start_date.setDate(16);

	const end_date = start_date;
	end_date.setMonth(end_date.getMonth() + 1);
	end_date.setDate(15);

	const parameters = {
		postedBack: 0,
		cmd: 1,
		suser_id: 'whshum',
		dstart_date: start_date.toISOString().split('T')[0],
		dend_date: end_date.toISOString().split('T')[0]
	}
	const urlPath = Object.keys(parameters).reduce((parameterArray, parameterKey) => {
		parameterArray.push(`${parameterKey}=${parameters[parameterKey]}`);
		return parameterArray;
	}, []).join('&');
}

function isWorksheetPage() {
	const args = location.search.replace('?', '').split('&');
	const requiredArgsList = ['postedBack', 'cmd', 'dstart_date', 'dend_date', 'suser_id'];
	return args.every(arg => requiredArgsList.includes(arg.split('=')[0]));
}

// utilities
function zeroFill(number, digits) {
	return String(10 ** digits + number).substr(1, digits);
}