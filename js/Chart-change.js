/* global $ */
$(document).ready(function() {
    console.log('WHAT UPPPPP');
    var ctx = $("#myChart")[0].getContext('2d');
    var years = [1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018];
var sealevels=[];
var seaLevelData = 'js/sea.json';
var alldata;
$.getJSON(seaLevelData,function(data){
    alldata=data;
    for(var i=0; alldata.length && 1993 + i < 2019 ;i++){
        var sealevel=(data[i]["Sum of HDR 7 standard deviation of GMSL (GIA not applied) variation estimate (mm)"])/37;
        sealevels[i]=sealevel;
        console.log(1993+i);
        console.log(sealevel);
    }
});
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['rgb(255, 99, 132)'],
            borderColor: ['rgb(255, 99, 132)'],
            data: [{labels:years,datasets:sealevels}]
            
        }]
    },
    options: {scales: {
        yAxes: [{ticks: {beginAtZero: true}}]
        
    }
        
    }
    })
});
 