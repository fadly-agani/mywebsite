function check(form){
	
	var coruser= "test";
	var corpass= "123";
 
 if(form.userid.value == coruser){
	 if(form.pass.value == corpass){
		 window.open('https://www.youtube.com/c/dewclarke?sub_confirmation=1')
	 } else {alert("Incorect Password!!!")}
  }
 else{window.alert("Incorect Username or Create new account!!!")}
}
