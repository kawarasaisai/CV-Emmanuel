        $.getJSON("./json/cv-data.json", function(json) {

            console.log(json[0]); // this will show the info it in firebug console
            console.log(json[0].Glossery["title"]);


            for (i = 0; i < json.length; i++) {


            $( "#entry-"+i ).html( "<span class='red'>"+ json[i].Glossery["title"] +"<b>Again</b></span>" );




            }
        });
