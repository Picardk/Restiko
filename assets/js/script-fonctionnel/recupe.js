// Connection
function formRestiko(){
base('RESTIKO').select({
    maxRecords: 50,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {

        records.forEach(function(record) {

            $("#mainContent").html("");
      
              if(record.get('Email') == $('#email').val()){
                  if(record.get('Password') == $('#password').val()){
                      console.log('Bonobo')
      
                      localStorage.setItem("nomPrenom", record.get("Nom_Prenom"));
                      console.log("lol")
                  
                        $("#mainContent").prepend(

                            '<h6 class="textcenter">'+record.get("Nom_Prenom")+
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

// template
function templateFormRestiko() {
    $("#formEnter").html(templateFormRestiko);
}
// Fin du template

// création d'un Restiko
function submitFormRestiko() {
    event.preventDefault();
    base('RESTIKO').create([
        {
          "fields": {
            "Prenom":$('#nomPrenom'),
            "Date":$("#Date").val(),
            "Ce que j'ai aimé":$("#iLike").val(),
            "Ce que j'ai fait":$("#iMake").val(),
            "Ce que j'ai appris":$("#iLearn").val(),
            "Ce que j'ai utilisé de nouveaux":$("#newLearn").val(),
            "Problématiques  rencontrées":$("#problem").val(),
            "Quels sont les objectifs ?":$("#objectif").val(),
            "Qu'est-ce qui m'a manqué ?":$("#Miss").val(),
            "Personne (Initiales)": {
              "id": "usrIZnWkUZc6m88RP",
              "email": "kavenpicard@hotmail.com",
              "name": "Kaven Picard"
            },
            "Note":$("#Number").val(),
        },
        }
      ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      });
      window.location.replace(restiko.html);
} 
// Fin de création d'un Restiko

// Récupération d'un table de Restiko
function recupOneRestiko(){
base('RESTIKO').find('recwYjC2Vk0PmRJF5', function(err, record) {
    if (err) { console.error(err); return; }
    console.log('Retrieved', record.id);
});
}
// fin de Récupération d'un table de Restiko

// check de connection
function checkIfAlreadyConnected(){
    if(localStorage.getItem("Nom_Prenom") != null) 
    {
        console.log("test");
        $("#formEnter").hide();
        $("#mainContent").prepend(
            
            '<h6 class="textcenter text-white">'+localStorage.getItem("Nom_Prenom")+
            '<div class="btn btn-primary btn-block mt-5" onclick="disconnectAccount()">Déconnecter</div>'
        )
    }
    else{
        $("#formEnter").show();
    }
    
}
// fin de check de connection

// option de deconnection
function disconnectAccount()
{
    localStorage.clear()

    $(".cardRestiko").html("");
    $("#formEnter").show();
    $("#mainContent").html("");
}
// fin de l'option de deconnection

// cadre du Restiko
function recupInfoRestiko(){
    $("#mainContent").html("");
    base('RESTIKO').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 50,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
    
        records.forEach(function(record) {
            if(localStorage.getItem("nomPrenom") == record.get("Nom_Prenom")){
              
                $("#mainContent").prepend(
                '<div class="container mt-3">'+
                    '<div class="card w-100">'+
                    '<div class="card-body">'+
                        // '<h5 class="card-title">'+ record.get("Nom_Prenom")+'</h5>'+
                        '<div class="Date">' + record.get("Date")+ '</div>'+
                        '<div class="iLike"><strong>Ce que jai aimé :</strong> ' + record.get("Ce que j'ai aimé") + ' </div>'+
                        '<div class="iMake"><strong>Ce que jai fait :</strong>' + record.get("Ce que j'ai fait") + '</div>'+
                        '<div class="iLearn"><strong>Ce que jai appris :</strong> ' + record.get("Ce que j'ai appris") + '</div>'+
                        '<div class="newLearn"><strong>Ce que jai utilisé de nouveaux :</strong> ' + record.get("Ce que j'ai utilisé de nouveaux")  + '</div>'+
                        '<div class="problem"><strong>Problématiques  rencontrées :</strong> ' + record.get("Problématiques  rencontrées") + '</div>'+
                        '<div class="objectif"><strong>Quels sont les objectifs ?:</strong> ' + record.get("Quels sont les objectifs ?") + '</div>'+
                        '<div class="Miss"><strong>Qu/est-ce qui ma manqué ?:</strong> ' + record.get("Qu'est-ce qui m'a manqué ?") + '</div>'+
                        '<div> <button type="button" class="btn btnPurple mt-3 w-25"><a class="text-white" onclick= "recupOneRestiko()" target=_blank>Voir</a></button>'+
                        '<button type="button" class="btn btnPurple mt-3 w-25"><a class="text-white" onclik="updateRestiko()" target="_blank">update</a></button>'+
                        '<button type="button" class="btn btnPurple mt-3 w-25"><a class="text-white" onclik="templateFormRestiko()" target="_blank">Créer</a></button></</div>' +
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

// fin du cadre du restiko

// mettre à jour le Restiko
function updateRestiko(){
    $('#mainContent').html("");
    base('RESTIKO').update([
        {
            "id": "recwYjC2Vk0PmRJF5",
            "fields": {
                "Date":$("#Date").val(),
                "Ce que j'ai aimé":$("#iLike").val(),
                "Ce que j'ai fait":$("#iMake").val(),
                "Ce que j'ai appris":$("#iLearn").val(),
                "Ce que j'ai utilisé de nouveaux":$("#newLearn").val(),
                "Problématiques  rencontrées":$("#problem").val(),
                "Quels sont les objectifs ?":$("#objectif").val(),
                "Qu'est-ce qui m'a manqué ?":$("#Miss").val(),
                "Personne (Initiales)": {
                  "id": "usrIZnWkUZc6m88RP",
                  "email": "kavenpicard@hotmail.com",
                  "name": "Kaven Picard"
                },
                "Note":$("#Number").val(),
            }
        }

    ],  function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function(record) {
          console.log(record.get('Date'));
        });
      });
}
// fin de la mise à jour du Restiko