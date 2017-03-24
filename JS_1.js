document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("Stu_Attendance.json", 
            function (res) {
              
                JSONArray  weeklyflash = json.getJSONArray("");
                JSONObject e = weeklyflash.getJSONObject(i);     
                String bulan1 = e.getString("vishesh");
                String bulan2 = e.getString("siddharth");
              }
              if (bulan1 == "siddharth")
              {
              map.put("Attendance", e.getString("JAVA")); 
              total1=40/res.AttendanceTS+res.AttendanceLS*100;
               document.querySelector("#content")
                .innerHTML = "<h2>" + total1 + "</h2>";
              }
              else if (bulan2 == "Vishesh")
              {
              map.put("Attendance", e.getString("JAVA")); 
              total2=40/res.AttendanceVS+res.AttendanceLV*100;
               document.querySelector("#content")
                .innerHTML = "<h2>" + total2 + "</h2>";
              }
              
                 
            });
      });
  }
);
