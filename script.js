const length = document.querySelector("#length");
const pw = document.querySelector("#pw");
const save = document.querySelector("#saveBtn");


function pwGen(len) {
	const lower = "abcdefghijklmnopqrstuvwxyz";
	const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const number = "1234567890";
	const symbol = "@#$&+()*?!";
	
	const password = lower + upper + number + symbol;
	let generator = "";
	
	for( let i = 0; i < len; i++) {
           generator += password[~~(Math.random() * password.length)];
	};
	return generator;
}


function setPw() {
   const newPw = pwGen(length.value);
   pw.value = newPw;
}


//pake arrow function
const savePw = () => {
   // get password then save to be title 
   document.title = pw.value;


   // set Mypassword.txt 
   save.setAttribute('href', 'data:text/plain;charset=utf-8' + encodeURIComponent(`Password : ${document.title}`));

   // download password.txt
   save.sstAttribute('download', 'MyPassword.txt');
}
