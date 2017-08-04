// Thank you to Nick Piesco for the inspiration for this code:
// https://codepen.io/nickpiesco/pen/YPbqPM
// Although it may seem as if I copied a lot of code from him,
// the only thing I copied was the .isBetween. The rest is original.

$(function() {
    
    Number.prototype.isBetween = function(a, b) {
        return this >= a && this <= b;
    };
    
    function setDate() {
        var day = parseInt(moment().format('D'));
        //alert(day);
        if(day%10==3&&day!=13)
        {
            $('#third').addClass('light');
        }
        else if(day%10==2&&day!=12)
        {
            $('#second').addClass('light');
        }
        else if(day%10==1&&day!=11)
        {
            $('#first').addClass('light');
        }
        else
        {
            $('#th').addClass('light');
        }
        if(day==10)
        {
            $('#ten').addClass('light');
        }
        else if(day==11)
        {
            $('#eleven').addClass('light');
        }
        else if(day==12)
        {
            $('#twelve').addClass('light');
        }
        else if(day==13)
        {
            $('#thir').addClass('light');
        }
        if(day>=20&&day<=29)
        {

            $('#twent').addClass('light');
            if (day!=20)
            {
                $('#twenty').addClass('light');
            }
            else
            {
                $('#ieth').addClass('light');
            }
        }
        if (day==30)
        {
            $('#thirt').addClass('light');
            $('#ieth').addClass('light');
        }
        else if(day==31)
        {
            $('#thirt').addClass('light');
            $('#thirty').addClass('light');
        }
        if(day.isBetween(13,19))
        {
            $('#teen').addClass('light');
        }
        switch (day%10)
        {
            case 4: $('#four').addClass('light'); break;
            case 5: $('#fif').addClass('light'); break;
            case 6: $('#six').addClass('light'); break;
            case 7: $('#seven').addClass('light'); break;
            case 8: $('#eight').addClass('light'); break;
            case 9: $('#nine').addClass('light'); break;
        }
        ///////////////////////////////////////////////////
        var mon=parseInt(moment().format('M'));
        //alert(mon);
        switch(mon)
        {
            case 1: $('#jan').addClass('light'); break;
            case 2: $('#feb').addClass('light'); break;
            case 3: $('#mar').addClass('light'); break;
            case 4: $('#apr').addClass('light'); break;
            case 5: $('#may').addClass('light'); break;
            case 6: $('#jun').addClass('light'); break;
            case 7: $('#jul').addClass('light'); break;
            case 8: $('#aug').addClass('light'); break;
            case 9: $('#sep').addClass('light'); break;
            case 10: $('#oct').addClass('light'); break;
            case 11: $('#nov').addClass('light'); break;
            case 12: $('#dec').addClass('light'); break;
        }
    }
    
    
    function refresh() {
        $('.light').removeClass('light');
        setDate();
    }
    refresh();
    window.setInterval(refresh, 1000);

});