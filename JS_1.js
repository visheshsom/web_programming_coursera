document.addEventListener("DOMContentLoaded",
  function (event) {
    
   
    document.querySelector("button")
      .addEventListener("click", function () {
        
        $ajaxUtils
          .sendGetRequest("JSON_DATA/Stu_Attendance.json",
            
            function (res) 
            {
              
              var name = 
              document.getElementById("s_name").value;
              
              
			   var jName = res.firstname;
               var jName1 = res.firstname1;
			    
			   var attenT1=20;
               var attenL1=30;
               var student_total1=attenL1+attenT1;
               var total_atten1=res.Attendance_Theory1+res.AttendanceLecture1;
               var final_total1=student_total1/total_atten1*100;
				
			   var  attenT1_s=20;
               var  attenL1_s=30;
               var  student_total1_s=attenL1_s+attenT1_s;
               var  total_atten1_s=res.Attendance_Theory2+res.AttendanceLecture2;
               var  final_total1_s=student_total1_s/total_atten1_s*100;
                
				
                if (jName === name) 
                    {
						if(final_total1<80)
						{
						document.querySelector('#content1')
						.innerHTML = "<h4>"+jName+" : You've less Attendance in : " +res.Courses+ "</h4>";
						document.querySelector('#content')
						.innerHTML = "<h4>Attendence = " +final_total1+ "%</h4>";
						}
					}
				else if(jName1 === name)
				{
					if(final_total1_s<80)
						{
						document.querySelector('#content1')
						.innerHTML = "<h4>"+jName1+" : You've less Attendance in : " +res.Courses1+ "</h4>";
						document.querySelector('#content')
						.innerHTML = "<h4>Attendence = " +final_total1_s+ "%</h4>";
						}
					
				}
                else
                    {
                      document
                      .getElementById("content1")
                      .innerHTML = "You're not in Defaulters....";
					  document
                      .getElementById("content")
                      .innerHTML = "";
 
                    }
                
              


          });
      });
  }
);
