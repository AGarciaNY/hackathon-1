/* global $ */
$(document).ready(function() {
    var seaLevelData = 'js/sea.json';
    var allData;
    var firstyear;
    var finalyear;
    var avgsealeve2;
    var clicks=0;
    var diff=[
-0.955405405405401,
-2.31756756756759,
-3.9497297297297,
16.1935135135135,
-2.4651351351351,
-9.2078378378379,
-1.11216216216209,
-1.968918918919,
-1.11459459459461,
3.6051351351352,
-0.915135135135103,
-0.835945945945994,
-1.5951351351351,
1.4332432432432,
-0.774054054054105,
1.14216216216221,
2.1967567567568,
1.1859459459459,
-1.5024324324324,
0.262972972972989,
-1.74054054054059,
14.5624324324323,
-2.82243243243231,
-5.2681081081081,
2.67135135135129,]
    
    $.getJSON(seaLevelData, function(data) {
        allData = data;
        var avgsealevel;
        var year;
        for (var i = 0; i < allData.length-1; i++) {
            year = data[i].Year;
            avgsealevel=(data[i]["Sum of HDR 7 standard deviation of GMSL (GIA not applied) variation estimate (mm)"])/37;
        
        console.log(avgsealevel);
        var firstyear=data[0].Year;
        var finalyear=data[allData.length-2].Year;
        var avgsealeve2=avgsealevel.toFixed(2);
        
        }
        $("#years").html(firstyear);
        $("#pastbutton").click(function(){

            if(clicks>0){
                clicks--;
                var minusyear=firstyear---1;
                var ddes=diff[clicks];
                var num=ddes.toFixed(2);
                $("#years").html("<h2 id='years'>"+minusyear+"</h2>");
                $("#nowinfo").html("<h1 id='nowinfo'>Change in sea level "+num+"</h1>");
                $("#nowinfo").css("color","red");
                
            }
        });
        
        $("#futerbutton").click(function(){
            
            if(clicks < 25){
                clicks++;
                var addyear=firstyear+++1;
                var ddes=diff[clicks];
                var num=ddes.toFixed(2);
                $("#years").html("<h2 id='years'>"+addyear+"</h2>");
                $("#nowinfo").html("<h1 id='nowinfo'>Change in sea level "+num+"</h1>");
                $("#nowinfo").css("color","green");
                
            }
        });
    });
    
    
    
});

