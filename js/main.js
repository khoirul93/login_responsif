const input = document.querySelectorAll('.input');

function focus(){
	let paarent = this.paarenNode.paarenNode;
	paarent.classlist.add('focus');

}
function blurFunc(){
	let paarent= this.paarenNode.paarenNode;
	if (this.value == "") {
		paarent.classlist.remove('funcus');
	}

input.forEach(input=>{
	input.addEventListener('focus',focusFunc);
	input.addEventListener('blur',blurFunc);
})