import { cube } from './math.js'
import { CSpace_getToken } from '@ali/dingtalk-idl-ts/dist/dingpan'
CSpace_getToken().catch(() => {});

function component() {
	var element = document.createElement('pre');

	element.innerHTML = [
		"Hello webpack!",
		"5 cubed is equal to " + cube(5)
	].join('\n\n');

	return element;
}

document.body.appendChild(component());