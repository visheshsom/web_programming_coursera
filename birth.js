function birthday (event)
{

	var dt = new Date(document.getElementById("date1").value);
	
	var month = dt.getMonth(document.getElementById("date1").value);
	var date  = dt.getDate(document.getElementById("date1").value );
	
	var month1 = parseInt(month);
	var date1 =	parseInt(date);

	var birthday = new Date();
	var cd = new Date();

		if (birthday.setDate(date1)&&birthday.setMonth(month1) > cd.setDate(09,22,1997))
		{
			birthday = birthday.getTime();
			cd = cd.getTime();

			var theDate = birthday - cd ;
			
			theDate = (((theDate / 1000) / 60) / 60) / 24;
			
			var message = "<h4> " + theDate + " : Days Left</h4>";
			
			 document
		    .getElementById("date_1")
		    .innerHTML = message;
		}
	
		
	

}

	   



