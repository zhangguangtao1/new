function getQueryVariable(variabl) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for(var i = 0; i < vars.length; i++) {
			var pair = vars[i].split("=");
		if(pair[0] == variabl) {
			return pair[1];
		}
	}
	return(false);
}
function showMsg(msg){
	msg = msg ? msg : "成功";
	var div = document.createElement("div");
	div.className = "saveSuccessTips";
	div.innerHTML = msg;
	document.body.appendChild(div);
	setTimeout(function(){
		document.body.removeChild(div);
	},3000)
}
var datalthone;//第一次设置的密码
var datalthtwo;//第二次设置的密码
/*点击键盘*/
$(function(){
	var pw=
		"<span>请设置交易密码</span>"
	$(".pwd_title").html(pw);
	inputpwd();
})
function inputpwd(){
	isPwdInput.open(function(data) {
		datalthone=data;
	    if(data.pwd.length==6){
	    	var pw=
				"<span class='color'>请再次输入交易密码</span>"
			$(".pwd_title").html(pw)
			$(".pwd_input>span").removeClass("on");
			isPwdInput.open(function(data1) {
				datalthtwo=data1;
			    if(data1.pwd.length==6){
					$(".succ").show();
			    }
			})
	    }
	})
}
/*设置结算信息  点击完成的时候*/
function complete(){
	if(datalthone.pwd!==datalthtwo.pwd){
		showMsg("两次输入密码不一致,请重新输入")
		var pw=
				"<span class='color'>请重新输入交易密码</span>"
			$(".pwd_title").html(pw)
		$(".pwd_input>span").removeClass("on");
		$(".succ").hide();
		inputpwd();
	}else{
		showMsg(datalthtwo.pwd);
	}
}
