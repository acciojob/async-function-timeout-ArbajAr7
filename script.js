//your JS code here. If required.
const promise1 = () => {
	let text = document.getElementById("text").value;
	let delay = document.getElementById("delay").value;
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(text);
		}, delay*1000);
	});
}

async function Submit(){
	const data = await promise1();
	console.log(data);
	document.getElementById("output").innerHTML = `
	<p>${data}</p>`
}
