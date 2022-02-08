export function imageErrorHandler(event) {
	event.target.src =
		"https://admin.klob.id/asset_v3/assets/img/ensiklobedia/klob-no-image.jpg";
	return;
}

export function imageProfileErrorHandler(event) {
	event.target.src =
		"https://s3.ap-southeast-1.amazonaws.com/static.klob.id/image_bank/Profile/defaultnophoto.svg";
	return;
}

export const noImg =
	"https://admin.klob.id/asset_v3/assets/img/ensiklobedia/klob-no-image.jpg";

// eslint-disable-next-line
export const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
export const phoneRegExp2 =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const hideNumber = (number) => {
	let numberArray = [];
	let numberString = String(number);
	for (let index = 0; index < numberString.length; index++) {
		switch (index) {
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
				numberArray.push("*");
				break;
			default:
				numberArray.push(numberString[index]);
				break;
		}
	}
	return numberArray.join("");
};

export const formatDate = (date) => {
	if (date) {
		const dateArray = [];
		let temp = "";
		for (let index = 0; index <= date.length; index++) {
			if (date[index] === "/" || date[index] === "-" || index === date.length) {
				dateArray.push(temp);
				temp = "";
			} else {
				temp += date[index];
			}
		}
		const tempMonth = dateArray[0];
		dateArray[0] = dateArray[1];
		dateArray[1] = tempMonth;
		return dateArray.join("-");
	} else {
		return null;
	}
};

export const fileListToBase64 = (data) => {
	if (!data) return null;
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(data);
		reader.onload = () => {
			resolve(reader.result.split(",")[1] ?? null);
		};
		reader.onerror = (error) => reject(error);
	});
};

export const Base64File = (file) => {
	const reader = new FileReader();

	return new Promise((resolve, reject) => {
		reader.readAsArrayBuffer(file);
		reader.onload = function () {
			let bytes = Array.from(new Uint8Array(this.result));
			let base64StringFile = btoa(
				bytes.map((item) => String.fromCharCode(item)).join("")
			);

			const res = {
				base64StringFile: base64StringFile,
				fileName: file.name,
				fileType: file.type,
			};

			resolve(res);
		};
		reader.onerror = function (error) {
			console.log("Error: ", error);
		};
	});
};

// ini fungsi dari Coporate-Central
export function toBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			let split = reader.result.split(",");
			let base64Result = split[1];
			resolve({
				name: file.name,
				lastModified: file.lastModified,
				lastModifiedDate: file.lastModifiedDate,
				webkitRelativePath: file.webkitRelativePath,
				size: file.size,
				type: file.type,
				base64: base64Result,
			});
		};
		reader.onerror = (error) => reject(error);
	});
}

export function convertToRupiah(angka) {
	if (angka) {
		let rupiah = angka.toString().split(",");
		rupiah[0] = rupiah[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return "Rp " + rupiah.join(",");
	} else {
		if (angka === 0) return "Rp " + angka;
		return null;
	}
}

export const formatBytes = (bytes, decimals = 2) => {
	if (bytes === 0) return "0 Bytes";

	const k = 1024;
	const dm = decimals < 0 ? 0 : decimals;
	const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

	const i = Math.floor(Math.log(bytes) / Math.log(k));

	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

export function dataURLtoFile(dataurl, filename) {
	var arr = dataurl.split(","),
		mime = arr[0].match(/:(.*?);/)[1],
		bstr = atob(arr[1]),
		n = bstr.length,
		u8arr = new Uint8Array(n);

	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}

	return new File([u8arr], filename, { type: mime });
}

export const genderText = (level) => {
	switch (level) {
		case "F":
			return "Wanita";
		case "M":
			return "Pria";
		default:
			break;
	}
};

export const getImgLevelKlobness = (level) => {
	switch (level) {
		case 0:
			return "https://s3-ap-southeast-1.amazonaws.com/static.klob.id/image_bank/klobmeter/low.svg";
		// return "https://admin.klob.id/asset_v3/assets/img/klobness-level/1.svg";
		case 1:
			return "https://s3-ap-southeast-1.amazonaws.com/static.klob.id/image_bank/klobmeter/medium.svg";
		// return "https://admin.klob.id/asset_v3/assets/img/klobness-level/2.svg";
		case 2:
			return "https://s3-ap-southeast-1.amazonaws.com/static.klob.id/image_bank/klobmeter/high.svg";
		// return "https://admin.klob.id/asset_v3/assets/img/klobness-level/3.svg";
		default:
			return "https://s3-ap-southeast-1.amazonaws.com/static.klob.id/image_bank/klobmeter/ksoong.svg";
		// return "https://admin.klob.id/asset_v3/assets/img/klobness-level/0.svg";
	}
};

export const klobnessText = (level) => {
	switch (level) {
		case 0:
			return "Low";
		case 1:
			return "Medium";
		case 2:
			return "High";
		default:
			break;
	}
};

export const monthToYear = (month) => {
	let tahun = Math.floor(month / 12);
	let bulan = month % 12;

	if (tahun > 0 && bulan > 0) {
		return tahun + " Thn, " + bulan + " Bln";
	}
	if (tahun <= 0 && bulan > 0) {
		return bulan + " Bln";
	}
	if (tahun > 0 && bulan <= 0) {
		return tahun + " Thn";
	}
};

export const initBeforeUnLoad = (showExitPrompt) => {
	window.onbeforeunload = (event) => {
		if (showExitPrompt) {
			const e = event || window.event;
			e.preventDefault();
			if (e) {
				e.returnValue = "";
			}
			return "";
		}
	};
};

export const scrollKe = (id) => {
	const scroll = document.getElementById(`${id}`);
	// supaya pas (tidak tertutup navbar), dinaikan 80px
	const yOffset = -80;
	if (scroll) {
		const y = scroll.getBoundingClientRect().top + window.pageYOffset + yOffset;
		window.scrollTo({ top: y, behavior: "smooth" });
	}
};

export const getParams = (search) => {
	let qd = {};
	search.substr(1).split`&`.forEach((item) => {
		let [k, v] = item.split`=`;
		v = v && decodeURIComponent(v);
		(qd[k] = qd[k] || []).push(v);
	});
	return qd;
};

export const DisableConsole = () => {
	function noop() {}

	if (process.env.NODE_ENV !== "development") {
		console.log = noop;
		console.warn = noop;
		console.error = noop;
	}
};
