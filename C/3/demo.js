function mycheck(){
	if(myfrom.user.value==""){
		alert("用户名不能为空！！");myfrom.user.focus();return false;
	}
	if(myfrom.password.value==""){
		alert("密码不能为空！！");myfrom.password.focus();return false;
	}
}