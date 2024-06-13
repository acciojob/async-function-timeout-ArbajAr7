//your JS code here. If required.
document.getElementById('btn').addEventListener('click', Submit);
const promise1 = () => {
	let text = document.getElementById("text").value;
	let delay = Number(document.getElementById("delay").value);
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(text);
		}, delay);
	});
}

async function Submit(){
	const data = await promise1();
	console.log(data);
	document.getElementById("output").innerHTML = `<p>${data}</p>`
}
