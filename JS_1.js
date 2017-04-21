document.addEventListener("DOMContentLoaded",
  function (event) {
    
   
    document.querySelector("button")
      .addEventListener("click", function () {
        
        $ajaxUtils
          .sendGetRequest("Stu_Attendance.json",
            
            function (res) 
            {
              
               var number = 
               document.getElementById("s_no").value;

               var name = res.firstname;
               var name1= res.firstname1;
               
               var sap = res.SAP;
               var sap1 = res.SAP1;
               var email = res.Email;
               var dob = res.DOB;
               var cgpa = res.CGPA;
               var contact = res.Contact;

               var email1 = res.Email1;
               var dob1 = res.DOB1;
               var cgpa1 = res.CGPA1;
               var contact1 = res.Contact1;


                
				
                if (number === sap || number === email || number === dob || number === cgpa || number === contact ) 
                {
					
						    
                          document
                      .getElementById("content1")
                      .innerHTML = name;
						
                }
                else if (number === sap1 || number === email1 || number === dob1 || number === cgpa1 || number === contact1 ) 
                {
               
                
                        document
                      .getElementById("content1")
                      .innerHTML = name1;

                }
			
			    
				
                else
                    {
                      document
                      .getElementById("content1")
                      .innerHTML = "Data Not Found";
					           
 
                    }
                
           });
      });
  }
);
