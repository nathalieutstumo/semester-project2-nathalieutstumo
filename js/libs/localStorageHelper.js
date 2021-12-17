// export const saveToLocalStorage = function (
// 	keyNameToSaveInLocalStorage,
// 	valueToSaveInLocalStorage
// ) {
// 	localStorage.setItem(
// 		keyNameToSaveInLocalStorage,
// 		JSON.stringify(valueToSaveInLocalStorage)
// 	);
// };

// export const getFromLocalStorage = function (keyNameToGetFromLocalStorage) {
// 	if (localStorage.getItem(keyNameToGetFromLocalStorage) !== null) {
// 		return JSON.parse(localStorage.getItem(keyNameToGetFromLocalStorage));
// 	} else {
// 		return [];
// 	}
// };

// export const saveToLocalStorage = function (
// 	keyNameToSaveInLocalStorage,
// 	valueToSaveInLocalStorage
// ) {
// 	localStorage.setItem(
// 		keyNameToSaveInLocalStorage,
// 		JSON.stringify(valueToSaveInLocalStorage)
// 	);
// };

// export const getFromLocalStorage = function (keyNameToGetFromLocalStorage) {
// 	if (localStorage.getItem(keyNameToGetFromLocalStorage) !== null) {
// 		return JSON.parse(localStorage.getItem(keyNameToGetFromLocalStorage));
// 	} else {
// 		return [];
// 	}
// };
export const saveToLocalStorage = function (key, value) {
	localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const getStorageItem = function (key) {
	if (localStorage.getItem(key) !== null) {
	  return JSON.parse(localStorage.getItem(key));
	} else {
	  return [];
	}
  };
  
  export const getUser = function (key) {
	console.log(typeof localStorage.getItem(key));
  
	return localStorage.getItem(key);
  };
  