let accounts = [];
function createAccount(){
	let accountname = document.getElementById("accountName").value;
	let deposit = document.getElementById("deposit").value;
	
	let newAccount = (function(accountname, deposit){
		console.log("___ "+accountname+" _ "+deposit);
		let account = accountname;
		let amount = deposit;
		return{
			getInfo: function(){
				return "Account name: " + account + " Balance: " + amount + "\n";
			}
		}
	})(accountname, deposit);
	accounts.push(newAccount);
	
	var textAreaElement = document.getElementById("accountList");
	var textToTextArea = "";
	var listlen = accounts.length;
	for	(let i = 0; i < listlen; i++){
		textToTextArea = textToTextArea + accounts[i].getInfo();
	}
	textAreaElement.value = textToTextArea;
}