export const networkLogger = (response: any) => {
	if (response?.config?.url) {
		console.log(response?.config?.baseURL + response?.config?.url);
	}
	if (response?.config?.params) {
		console.log({ params: response.config.params });
	}
	if (response?.config?.data) {
		console.log({ data: response.config.data });
	}
	if (response?.data) {
		console.log({ data: response.data });
	}
	console.log({ response });
};

export const validatestring = (value: string) => {
	if (
		value.includes(".") ||
		value.includes("/") ||
		value.includes("\\") ||
		value.includes("^") ||
		value.includes(",")
	)
		return false;
	else return true;
};

export const searchinArray = (keyName: string, keyValue: string, myArray: []) => {
	for (var i = 0; i < myArray.length; i++) {
		if (myArray[i][keyName] === keyValue) {
			return myArray[i];
		}
	}
};

export const dateTimeFormat = (date: Date) => {
	const d = new Date(date).toISOString();
	const formatedDate = d.split("T")[0].split('-').reverse().join('.');
	const t = new Date(d);
	const formatedTime = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
	return formatedDate + ' ' + formatedTime;
};

export const capitalizeFirstLetter = (string: string): string => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};