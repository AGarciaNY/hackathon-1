/* global $ */
$(document).ready(function() {
    var seaLevelData = 'js/sea.json';
    var allData;
    var firstyear;
    var finalyear;
    var avgsealeve2;
    
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
        var avgsealeve2=avgsealevel.toFixed(2)
        }
        $("#pastbutton").click(function(){
            $("#pastinfo").html(
                "<h1 class='texttime'>the past from "+ firstyear+" To "+finalyear+"</h1>"+
                "<h1 class='textsea'>avg sea level: "+avgsealeve2+"</h1>"+
                "<h1 class='textrate'>Rate of change: "+ finalyear+"</h1>",
                );
        });
        
        $("#pastbutton").click(function(){
            $("#nowinfo").html(
                "<h1 class='texttime'>the past from "+ firstyear+" To "+finalyear+"</h1>"+
                "<h1 class='textsea'>avg sea level: "+avgsealeve2+"</h1>"+
                "<h1 class='textrate'>Rate of change: "+ finalyear+"</h1>",
                );
        });
    });
    
    
    
});

