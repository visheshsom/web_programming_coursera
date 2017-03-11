function birthday (event)
{

	var dt = new Date(document.getElementById("date1").value);
	
	var month = dt.getMonth(document.getElementById("date1").value -1);
	var date  = dt.getDate(document.getElementById("date1").value );
	
	var month1 = parseInt(month);
	var date1 =	parseInt(date);

	var birthday = new Date();
	var cd = new Date();

	cd.setDate(09,22,1997);

	birthday.setDate(date1);
	birthday.setMonth(month1);



	if (birthday.setDate(date1)&&birthday.setMonth(month1) < cd.setDate(09,22,1997))
    {
	    var theDate = cd - birthday ;
		
		theDate = (((theDate / 1000) / 60) / 60) / 24;
		
		var message = "<h4>Your Birthday Is Before : " + theDate + " days</h4>";
		document
    	.getElementById("date_2")
    	.innerHTML = message;
	}

	

	if (birthday.setDate(date1)&&birthday.setMonth(month1) > cd.setDate(09,22,1997))
	{
		var theDate = birthday - cd ;
		
		theDate = (((theDate / 1000) / 60) / 60) / 24;
		
		var message = "<h4>Your Birthday Is After : " + theDate + " days</h4>";


		document
	    .getElementById("date_1")
	    .innerHTML = message;
	}

	birthday = birthday.getTime();
	cd = cd.getTime();

	

   
	
}

	   



