document.addEventListener("DOMContentLoaded",
  function (event) {
    
   
    document.querySelector("button")
      .addEventListener("click", function () {
        
        $ajaxUtils
          .sendGetRequest("Stu_Attendance.json",
            
            function (res) 
            {
              
              var name = 
            document.getElementById("s_name").value;
              
              

               var  attenT1=40;
               var  attenL1=30;
               var  student_total1=attenL1+attenT1;
               var  total_atten1=res.Attendance_Theory1+res.AttendanceLecture1;
               var final_total1=student_total1/total_atten1*100;

                attenT1=40;
                attenL1=30;
                student_total1=attenL1+attenT1;
                total_atten1=res.Attendance_Theory2+res.AttendanceLecture2;
                final_total1=student_total1/total_atten1*100;
                
                
              
                for (var i = 0; i < res.length; i++)
                {
                if (res[i].firstname === name && res[i].final_total1<80)
                    {
                        document.getElementById('content').innerHTML = res[i].final_total1;
                    }
                else
                    {
                      document
                      .getElementById("content")
                      .innerHTML = res[i].final_total1;

                      document.getElementById('content').innerHTML = res[i].final_total1;   
                    }
                }
              


          });
      });
  }
);
