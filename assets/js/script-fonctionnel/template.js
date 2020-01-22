var templateNav = 
'<nav id="myNavbar" class="navbar lighten-4 mb-2">'+

    '<!-- Navbar brand -->'+
    '<a class="navbar-brand" href="./index.html"><img height="40px" src="./assets/img/logo pk.jpg" alt=""></a>'+ 
    '<button class="navbar-toggler first-button" type="button" data-toggle="collapse"'+
        'data-target="#navbarSupportedContent20" aria-controls="navbarSupportedContent20" aria-expanded="false"'+
        'aria-label="Toggle navigation">'+
        '<div class="animated-icon1"><span></span><span></span><span></span></div>'+
    '</button>'+
    '<div class="collapse navbar-collapse" id="navbarSupportedContent20">'+
        '<ul class="navbar-nav mr-auto">'+
            '<li class="nav-item">'+
                '<a class="nav-link" href="./restiko.html">Restiko</a>'+
            '</li>'+
            '<li class="nav-item">'+
                '<a class="nav-link" href="./veille.html">Veille</a>'+
            '</li>'+
        '</ul>'+
    '</div>'+
'</nav>';

$(".headerNav").append(templateNav);

var templateFormRestiko =
'<div id="formEnter" class="container">' +
'<form class="bg-light mt-3 p-3">' +
    '<div class="form-row">' +
        '<div class="form-group col-md-6">' +
            '<label for="nomPrenom">Votre Nom et Prenom</label>' +
            '<input type="text" class="form-control" id="nomPrenom" required>' +
        '</div>' +
        '<div class="form-row">' +
            '<label for="date">Date</label>' +
            '<input type="date" class="form-control" id="Date" placeholder="" required>' +
        '</div>' +
        '<div class="form-group col-md-6">' +
            '<label for="iLike">Ce que jai aimé</label>' +
            '<input type="text" class="form-control" id="iLike" required>' +
        '</div>' +
    '</div>' +
    '<div class="form-row">' +
        '<div class="form-group col-md-3">' +
            '<label for="iMake">Ce que jai fait</label>' +
            '<input type="textarea" class="form-control" id="iMake" required>' +
        '</div>' +
        '<div class="form-group col-md-3">' +
            '<label for="iLearn">Ce que jai appris</label>' +
            '<input type="textarea" class="form-control" id="iLearn" required>' +
        '</div>' +
        '<div class="form-group col-md-3">' +
            '<label for="newLearn">Ce que jai utilisé de nouveaux</label>' +
            '<input type="textarea" class="form-control" id="newLearn" required>' +
        '</div>' +
        '<div class="form-group col-md-3">' +
            '<label for="problem">Problématiques  rencontrées</label>' +
            '<input type="textarea" class="form-control" id="problem" required>' +
        '</div>' +
        '<div class="form-group col-md-3">' +
            '<label for="objectif">Quels sont les objectifs ?</label>' +
            '<input type="textarea" class="form-control" id="objectif" required>' +
        '</div>' +
        '<div class="form-group col-md-3">' +
            '<label for="Miss">Quest-ce qui ma manqué ?</label>' +
            '<input type="textarea" class="form-control" id="Miss" required>' +
        '</div>' +
    '</div>' +

    '<button class="btn btnPurple mt-3" onclick="submitFormRestiko()">Envoyer</button>' +
    '<div class="btn btnPurple mt-3 mr-3"><a class="text-white" href="./restiko.html">Retour</a></div>' +
    
'</form>' +
'</div>';
