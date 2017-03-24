document.addEventListener("DOMContentLoaded",
  function (event) {
    
   
    document.querySelector("button")
      .addEventListener("click", function () {
        
        $ajaxUtils
          .sendGetRequest("Stu_Attendance.json", 
            
            function fetch_student(res) 
            {
              
              var name = document.getElementById("s_name").value;
              
              var message = res.firstname 
              if (message===name) {
                
                message += " likes Maxican food";

                attenT=40;
                attenL=30;
                student_total=attenL+attenT;
                total_atten=res.Attendance_Theory1+res.AttendanceLecture1;
                alert("Attendance Percentage"+final_total=student_total/total_atten*100);
              }
              else 
              {
                message += " Doesn't like Maxican food";
              }
              
              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";

              var name = res.responseText;

              document.querySelector("#content")
                .innerHTML = "<h3>Hello " + res.final_total + "!</h3>";


          });
      });
  }
);
