// connection
function formVeille(){
    base('RESTIKO').select({
        maxRecords: 50,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
    
            records.forEach(function(record) {
    
                $("#mainContent").html("");
          
                  if(record.get('Email') == $('#email').val()){
                      if(record.get('Password') == $('#password').val()){
                          console.log('Bonobo')
          
                          localStorage.setItem("Coder", record.get("Coder"));
                          console.log("lol")
                      
                            $("#mainContent").prepend(
    
                                '<h6 class="textcenter">'+record.get("Coder")+
                                '<div class="btn btn-primary btn-block mt-5" onclick="disconnectAccount()">Déconnecter</div>'
                            )
                        }
                    }
                }); 
            // fetchNextPage();
          
        }, function done(err) {
              if (err) { console.error(err); return; }
        });
          
         $("#formEnter").hide();
    }
// fin de connection

// récupération des veilles
function recupInfoVeille(){
    $("#mainContent").html("");
    base('RESTIKO').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 50,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
    
        records.forEach(function(record) {
            if(localStorage.getItem("Coder") == record.get("Coder")){
              
                $("#mainContent").prepend(
                '<div class="container mt-3">'+
                    '<div class="card w-100">'+
                    '<div class="card-body">'+
                    '<h5 class="card-title">'+ record.get("Coder")+'</h5>'+
                        '<div class="Date">' + record.get("Date")+ '</div>'+
                        '<div class="Sujet"><strong>Sujet:</strong> ' + record.get("Subject") + ' </div>'+
                        '<div class="Links"><strong>Le lien :</strong>' + record.get("Links") + '</div>'+
                        '<div class="Synthesis"><strong>Synthesis :</strong> ' + record.get("Synthesis") + '</div>'+
                        '<div class="Commentaire"><strong>Commentaire:</strong> ' + record.get("Comment")  + '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'
          );
            }
        });
    
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
}
// Fin de récupération des veilles

// Check de Connection
function checkIfAlreadyConnected(){
    if(localStorage.getItem("Coder") != null) 
    {
        console.log("test");
        $("#formEnter").hide();
        $("#mainContent").prepend(
            
            '<h6 class="textcenter text-white">'+localStorage.getItem("Coder")+
            '<div class="btn btn-primary btn-block mt-5" onclick="disconnectAccount()">Déconnecter</div>'
        )
    }
    else{
        $("#formEnter").show();
    }
}
// fin de check de connection

// déconnection
function disconnectAccount()
{
    localStorage.clear()

    $("#formEnter").show();
    $("#mainContent").html("");
}
// fin de Connection