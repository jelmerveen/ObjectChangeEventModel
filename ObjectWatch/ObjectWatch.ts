export function WatchObject(object, afterObjectChanged: Function){
	const handler = {
		get(target, property, receiver) {
			try {
				return new Proxy(target[property], handler);
			} catch (err) {
				return Reflect.get(target, property, receiver);
			}
		},
		defineProperty(target, property, descriptor) {
			let updateRef = Reflect.defineProperty(target, property, descriptor);
			afterObjectChanged();
			return updateRef;
		},
		deleteProperty(target, property) {
			let updateRef = Reflect.deleteProperty(target, property);
			afterObjectChanged();
			return updateRef;
		}
	};
	return new Proxy(object, handler);
};

//Based on code provided by https://github.com/sindresorhus/on-change/
//Modified by Jelmer Veen
