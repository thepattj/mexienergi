var meses = new Array ("nulo","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
esta = new Array();
dir = new Array();
estaf = new Array();
vali = new Array();
dirimg = new Array("http://www.mexienergi.com/aplicacion/imgsta/aero.jpg","http://www.mexienergi.com/aplicacion/imgsta/campa.jpg","http://www.mexienergi.com/aplicacion/imgsta/epig.jpg","http://www.mexienergi.com/aplicacion/imgsta/northm.jpg","http://www.mexienergi.com/aplicacion/imgsta/sjr.jpg","http://www.mexienergi.com/aplicacion/imgsta/tlaco.jpg", "http://www.mexienergi.com/aplicacion/imgsta/servif.jpg");
/*dirlog = new Array("http://www.mexienergi.com/aplicacion/logos/iconaeropuerto.png","http://www.mexienergi.com/aplicacion/logos/icontlacote.png","http://www.mexienergi.com/aplicacion/logos/iconmacias.png","http://www.mexienergi.com/aplicacion/logos/iconarcangel.png","http://www.mexienergi.com/aplicacion/logos/iconepigmenio.png","http://www.mexienergi.com/aplicacion/logos/iconnorthm.png", "http://www.mexienergi.com/aplicacion/logos/iconproxr.png");/*"http://www.mexienergi.com/aplicacion/logos/iconprox.png"*/
/*datos = new Array();*/
/*var permiso;
var estacions;*/

/*SOLO ES MODAL*/
function verModal(tipo, texto, textoBtn, parrafo) { //MODAL DE ALERTA
    bgNegro = document.getElementById('bg-negro');
    modal = document.getElementById('modal');

    bgNegro.classList.add('verModal');
    modal.classList.add('verModal');

    if (tipo == 'chico') {
        parrafo = ""
    } else {
        parrafo = parrafo;
    }

    modal.innerHTML = "<h1>" + texto + "</h1>" +
        "<p>" + parrafo + "</p>" +
        "<div class='div3'></div>" +
        "<button style='color:white;' onclick='cerrar()' class='div3 menta'>" + textoBtn + "</button>";

    modal.classList.add(tipo);

    tipo = tipo;
}

function cerrar() { //BOTON QUE SE CREA
    bgNegro.classList.remove('verModal');
    modal.classList.remove('verModal');

    if (modal.classList.contains('chico')) {
        modal.classList.remove('chico');
    } else {
        modal.classList.remove('grande');
    }
}
/*expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; // caracteres que se van a evaluar al input
                                    if (expr.test(mai)){}else{alert();}//validacion del campo con el formato ejemplo@servicio.com*/
//MODAL DE ALERTA

function verAlerta(tipo, texto, parrafo) { 
    bgNegro = document.getElementById('bg-negro');
    modal = document.getElementById('modal');

    bgNegro.classList.add('verModal');
    modal.classList.add('verModal');

    if (tipo == 'chico') {
        parrafo = ""
    } else {
        parrafo = parrafo;
    }

    modal.innerHTML = "<h1>" + texto + "</h1>" +
        "<p>" + parrafo + "</p>" +
        "<div class='div3'></div>";

    modal.classList.add(tipo);

    tipo = tipo;
}

//ver menu
function vermenu(){
    s = sessionStorage.getItem("pers");
    e = sessionStorage.getItem("perc");

    bgNegros = document.getElementById('bg-negros');
    modals = document.getElementById('modals');

    bgNegros.classList.add('verModal');
    modals.classList.add('verModal');


    if( s == 1 && e == 0){
        /*alert("semaforo");*/
        document.getElementById('semaforo').style.display = "block";
        document.getElementById('corte').style.display = "none";
        document.getElementById('su').style.display = "none";
    }if(e == 1 && s == 0){
        /*alert("corte");*/
        document.getElementById('corte').style.display = "block";
        document.getElementById('semaforo').style.display = "none";
        document.getElementById('su').style.display = "none";
    }if(e == 1 && s ==1){
        document.getElementById('su').style.display = "block";
        document.getElementById('corte').style.display = "none";
        document.getElementById('semaforo').style.display = "none";
       /*alert("SUperU");*/
    }   
}

/*function menuhead(tipo, texto, texto2, texto3, texto4, texto5, parrafo){
    bgNegros = document.getElementById('bg-negros');
    modals = document.getElementById('modals');

    bgNegros.classList.add('verModal');
    modals.classList.add('verModal');

    if (tipo == 'chico') {
        parrafo = ""
    } else {
        parrafo = parrafo;
    }

    modals.innerHTML+= "<h1 style='color: white;' onclick='pagina(\""+'inicio.html'+"\")'>" + texto + "</h1>" +
                       "<h1 style='color: white;' onclick='pagina(\""+'corte.html'+"\")'>" + texto2 + "</h1>" +
                       "<h1 style='color: white;' onclick='pagina(\""+'mapa.html'+"\")'>" + texto3 + "</h1>" +
                       "<h1 style='color: white;' onclick='pagina(\""+'semaforo.html'+"\")'>" + texto4 + "</h1>" +
                       "<h1 style='color: white;' onclick=' salir() '>" + texto5 + "</h1>" +
                       "<div class='div3'></div>";

    modals.classList.add(tipo);

    tipo = tipo;
}*/

//cierra el menu
function cerrarms() { //BOTON QUE SE CREA
    bgNegros.classList.remove('verModal');
    modals.classList.remove('verModal');

    if (modals.classList.contains('derecho')) {
        modals.classList.remove('derecho');
    } else {
        modals.classList.remove('derecho');
    }
}


/*PARA INDEX*/
function entrar(form) { //se recibe completo el form - id de form login
    mailG = form.correo.value;
    pass = form.contra.value;
    flag = "inicioSes";
    mail = mailG.toLowerCase();

    enviar = new XMLHttpRequest;
    /*enviar.open('POST', 'datos.php');*/
    enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datoslocal.php'); //para empaquetar
    enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    enviar.send('correo=' + mail + '&contrasena=' + pass + '&flag=' + flag);
    enviar.onreadystatechange = function () {
        if (enviar.readyState == 4 && enviar.status == 200) {
            //AQUI ESTA LA RESPUESTA DEL PHP
            respuesta = enviar.responseText;
            /*alert(respuesta);*/
            desg = respuesta.split('*');
            acceso = desg[0];
            if (acceso == "Ingreso Correcto") {
                psem = desg[1];
                /*alert(p);*/
                sessionStorage.setItem("pers", psem);
                esem = desg[2];
                /*alert(e);*/
                sessionStorage.setItem("ess", esem);
                pfc = desg[3];
                sessionStorage.setItem("perc", pfc);
                efc = desg[4];
                sessionStorage.setItem("esc", efc);                
                location.href = "inicio.html";
            }
            if (acceso == "Datos Incorrectos") {
                verModal('grande', '', 'Ok', "Datos Incorrectos");
                sessionStorage.clear();
                document.getElementById("contra").value = "";
                document.getElementById("correo").value = "";
            }
            /*else{
                            verModal('grande','','Ok', "Algo a salido mal"+respuesta);
                            document.getElementById("contra").value = "";
                            document.getElementById("correo").value = "";
                        } */
        }
    }
}

//muestra el menu para registrar el correo
function registrar() { 
    paginaInicio = document.querySelector("#formulario");
    paginaRegis = document.querySelector("#formreg");
    paginaInicio.classList.add("rde");
    paginaInicio.classList.remove("riz");
    paginaRegis.classList.add("riz");
    paginaRegis.classList.remove("rde");
}

//regresa al menu de inicio desde la peticion del correo
function regresar(){ 
    paginaInicio = document.querySelector("#formulario");
    paginaRegis = document.querySelector("#formreg");
    paginaInicio.classList.remove("rde");
    paginaInicio.classList.add("riz");
    paginaRegis.classList.remove("riz");
    paginaRegis.classList.add("rde");
}

/*PARA REGISTRO*/
function conseguir(form) {
    mailG = form.correo.value;
    if(mailG != ""){
        enviar = new XMLHttpRequest;
        /*enviar.open('POST', 'datos.php');*/
        enviar.open('POST', 'http://www.mexienergi.com/aplicacion/agregarcorreo.php'); //para empaquetar
        enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        enviar.send('correo=' + mailG);
        enviar.onreadystatechange = function () {
            if (enviar.readyState == 4 && enviar.status == 200) {
                respuesta = enviar.responseText;
                if(respuesta == "OK"){
                    verModal('grande', '', 'Ok', "Se han mando correctamente tu correo.");
                    regresar();
                }else{
                    verModal('grande', '', 'Ok', "Algo a salido mal al enviar.");
                }
            }
        }
    }
    if(mailG == ""){
        verModal('grande', '', 'Ok', "Hay algun error detro de tu correo.");
    }
}

/*PARA inicio.html*/
function vald(){
    s = sessionStorage.getItem("pers");
    e = sessionStorage.getItem("perc");
    if( s == 1 && e == 0){
        document.getElementById("sem").classList.add("vis");
        document.getElementById("sem").classList.remove("no");
        document.getElementById("est").classList.add("no");
        document.getElementById("su").classList.add("no");
    }if(e == 1 && s == 0){
        document.getElementById("est").classList.add("vis");
        document.getElementById("est").classList.remove("no");
        document.getElementById("sem").classList.add("no");
        document.getElementById("su").classList.add("no");
    }if(e == 1 && s ==1){
        document.getElementById("su").classList.add("vis");
        document.getElementById("su").classList.remove("no");
        document.getElementById("sem").classList.add("no");
        document.getElementById("est").classList.add("no");
    }
}

function valida2(){
    s = sessionStorage.getItem("pers");
    e = sessionStorage.getItem("perc");
    if(e == 1 && s == 0){
        document.getElementById("iuser").classList.add("no");
        document.getElementById("ititulo").classList.add("no");
        document.getElementById("iconso").classList.add("no");
        document.getElementById("iuser").classList.remove("vis");
        document.getElementById("ititulo").classList.remove("vis");
        document.getElementById("iconso").classList.remove("vis");
        document.getElementById("est").classList.add("vis");
        document.getElementById("est").classList.remove("no");
        document.getElementById("sem").classList.add("no");
        document.getElementById("su").classList.add("no");
    }if(e == 1 && s ==1){
        document.getElementById("iuser").classList.add("no");
        document.getElementById("ititulo").classList.add("no");
        document.getElementById("iconso").classList.add("no");
        document.getElementById("iuser").classList.remove("vis");
        document.getElementById("ititulo").classList.remove("vis");
        document.getElementById("iconso").classList.remove("vis");
        document.getElementById("su").classList.add("vis");
        document.getElementById("su").classList.remove("no");
        document.getElementById("sem").classList.add("no");
        document.getElementById("est").classList.add("no");
    }
}

function consolidado(){
    estaci = sessionStorage.getItem("esc");
    flag = "consolida";
    enviar = new XMLHttpRequest;
    /*enviar.open('POST', 'datos.php')*/
    enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datoslocal.php'); //para empaquetar
    enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    enviar.send('est=' + estaci + '&flag=' + flag);
    enviar.onreadystatechange = function () {
        if (enviar.readyState == 4 && enviar.status == 200) {
            respuesta = enviar.responseText;
            //alert(respuesta);
            if(respuesta==""){

            }else{
                /*sessionStorage.setItem("semsta", respuesta);*/
                sepa = respuesta.split("*");
                //alert(sepa)
                numero = (sepa.length);
                //alert(numero);    
                j=1;
                k=2;
                l=3;
                m=4
                for(i=0; i<numero; i+=6){

                    document.querySelector(".divtabla").innerHTML += "<div class='div1' id='esta'>"+sepa[j]+"</div><div class='div3' style='display: block !important; background: rgba(255,38,0,1); margin-right: 0% !important; margin-left: 2%; margin-bottom: 4px !important;'><p style='font-size: 1.4em; color: white;'>Fecha</p></div><div class='div3' style='display: block !important; background: rgba(255,38,0,1); margin-right: 0% !important; margin-bottom: 4px !important;'><p style='font-size: 1.4em; color: white;'>Monto</p></div><div class='div3' style='display: block !important; background: rgba(255,38,0,1); margin-right: 0% !important; margin-bottom: 4px !important;'><p style=' color: white; font-size: 1.4em;'>Lts</p></div><div class='div3' style='display: block !important; background: #ffe748; margin-right: 0% !important; margin-left: 2%; margin-bottom: 4px !important;'><p style='font-size: 1.4em; color: black;' id='fechacon'>"+sepa[k]+"</p></div><div class='div3' style='display: block !important; background: #ffe748; margin-right: 0% !important; margin-bottom: 4px !important;'><p style='font-size: 1.4em; color: black; margin-left:5px;' id='litroscon'>$"+sepa[l]+"</p></div><div class='div3' style='display: block !important; background: #ffe748; margin-right: 0% !important; margin-bottom: 4px !important;'><p style=' color: black; font-size: 1.4em;' id='pesoscon'>"+sepa[m]+"</p></div>";
                    j=j+5;
                    k=k+5;
                    l=l+5;
                    m=m+5;
                }
            }
        }            
    }
    consolidado2();
}

function consolidado2(){
    estaci = sessionStorage.getItem("esc");
    flag = "consolida";
    mandar = new XMLHttpRequest;
    //enviar.open('POST', '../../datosprueba/datoslocalns.php');
    mandar.open('POST', 'http://www.mexienergi.com/aplicacion/datoslocalns.php'); //para empaquetar
    mandar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    mandar.send('est=' + estaci + '&flag=' + flag);
    mandar.onreadystatechange = function () {
        if (mandar.readyState == 4 && mandar.status == 200) {
            respuesta = mandar.responseText;
            //alert(respuesta);
            if(respuesta == ""){
            }
            else{
                /*sessionStorage.setItem("semsta", respuesta);*/
                sepa = respuesta.split("*");
                //alert(sepa)
                numero = (sepa.length);
                j=1;
                k=2;
                l=3;
                m=4
                for(Z=0; Z<numero; Z+=6){
                    document.querySelector(".divtabla2").innerHTML += "<div class='div1' id='esta'>"+sepa[j]+"</div><div class='div3' style='display: block !important; background: rgba(255,38,0,1); margin-right: 0% !important; margin-left: 2%; margin-bottom: 4px !important;'><p style='font-size: 1.4em; color: white;'>Fecha</p></div><div class='div3' style='display: block !important; background: rgba(255,38,0,1); margin-right: 0% !important; margin-bottom: 4px !important;'><p style='font-size: 1.4em; color: white;'>Monto</p></div><div class='div3' style='display: block !important; background: rgba(255,38,0,1); margin-right: 0% !important; margin-bottom: 4px !important;'><p style=' color: white; font-size: 1.4em;'>Lts</p></div><div class='div3' style='display: block !important; background: #ffe748; margin-right: 0% !important; margin-left: 2%; margin-bottom: 4px !important;'><p style='font-size: 1.4em; color: black;' id='fechacon'>"+sepa[k]+"</p></div><div class='div3' style='display: block !important; background: #ffe748; margin-right: 0% !important; margin-bottom: 4px !important;'><p style='font-size: 1.4em; color: black; margin-left:5px;' id='litroscon'>$"+sepa[l]+"</p></div><div class='div3' style='display: block !important; background: #ffe748; margin-right: 0% !important; margin-bottom: 4px !important;'><p style=' color: black; font-size: 1.4em;' id='pesoscon'>"+sepa[m]+"</p></div>";
                    
                    j = j+5;
                    k=k+5;
                    l=l+5;
                    m=m+5;
                }
            }
        }            
    }

}

function progres(){
    verModal('grande', '', 'Ok', "En construcción...");
}

/*PARA semaforo.html*/
function llenado() { // llena el select de los servidores
    estaci = sessionStorage.getItem("ess");
    mostrar = sessionStorage.getItem("truco");
    flag = "inicioSer";
    enviar = new XMLHttpRequest;
    /*enviar.open('POST', 'datos.php')*/
    enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datoslocal.php'); //para empaquetar
    enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    enviar.send('est=' + estaci + '&flag=' + flag);
    enviar.onreadystatechange = function () {
        if (enviar.readyState == 4 && enviar.status == 200) {
            respuesta = enviar.responseText;
            /*alert(respuesta);*/
            sessionStorage.setItem("semsta", respuesta);
            sepa = respuesta.split("*");
            numero = (sepa.length) - 1;
            /*alert(numero);*/
            num = numero/2; //se divide por que es la cant. de estaciones y no de datos que se necesita.
            j = 0;
            k = 0;
            for (i = 0; i < numero; i++) {
                if (i % 2 == 0) {
                    esta[j] = sepa[i];
                    j++;
                } else {
                    dir[k] = sepa[i];
                    k++;
                }
            }
            
            select = document.getElementById("selec");
            for (index = 0; index < num; index++) {
                select.options[select.options.length] = new Option(esta[index], dir[index]);
                if(esta[0] == "AEROPUERTO"){
                    document.getElementById("imagenb").innerHTML = "<img style='width:99%; height:99%; margin-left:.5%;' id='imgsem' src='"+dirimg[0]+"'>"
                }if(esta[0] == "MACIAS"){
                    document.getElementById("imagenb").innerHTML = "<img style='width:99%; height:99%; margin-left:.5%;' id='imgsem' src='"+dirimg[4]+"'>"
                }if(esta[0] == "TLACOTE"){
                    document.getElementById("imagenb").innerHTML = "<img style='width:99%; height:99%; margin-left:.5%;' id='imgsem' src='"+dirimg[5]+"'>"
                }if(esta[0] == "ARCANGEL"){
                    document.getElementById("imagenb").innerHTML = "<img style='width:99%; height:99%; margin-left:.5%;' id='imgsem' src='"+dirimg[1]+"'>"
                }if(esta[0] == "EPIGMENIO"){
                    document.getElementById("imagenb").innerHTML = "<img style='width:99%; height:99%; margin-left:.5%;' id='imgsem' src='"+dirimg[2]+"'>"
                }if(esta[0] == "NORTHM"){
                    document.getElementById("imagenb").innerHTML = "<img style='width:99%; height:99%; margin-left:.5%;' id='imgsem' src='"+dirimg[3]+"'>"
                }
                /*=========================== VA A CAMBIAR ES DECIR HAY QUE AGREGAR TODOS LOS CASOS QUE SEAN LA PRIMERA Y UNICA ESTACION======================*/
            }
        }
    }
}

function reinicio() { // Cuando hace el cambio de estaciones en el semaforo regresa los botones a su default
    p = document.getElementById("selec");
    selecsta = p.options[p.selectedIndex].text;

    if(selecsta == "AEROPUERTO"){
        image = document.getElementById("imgsem");
        image.src = dirimg[0];
    }if(selecsta == "TLACOTE"){
        image = document.getElementById("imgsem");
        image.src = dirimg[5];
    }if(selecsta == "MACIAS"){
        image = document.getElementById("imgsem");
        image.src = dirimg[4];
    }if(selecsta == "ARCANGEL"){
        image = document.getElementById("imgsem");
        image.src = dirimg[1];
    }if(selecsta == "EPIGMENIO"){
        image = document.getElementById("imgsem");
        image.src = dirimg[2];
    }if(selecsta == "NORTHM"){
        image = document.getElementById("imgsem");
        image.src = dirimg[3];
    }

    image = document.getElementById("botono");
    image.src = "img/lightn.png";
    document.getElementById("estado").style.backgroundColor = "rgba(35,125,69,.8)";
    document.getElementById("estado").style.border = "rgba(35,125,69,.8)";
    document.getElementById("estado").disabled = false;

    document.getElementById("dstado").innerHTML = "Status";

    document.getElementById("cambio").style.backgroundColor = "grey";
    document.getElementById("cambio").border = "grey";
    document.getElementById("cambio").disabled = true;
}

function enviarS(form) { //pregunta el status de el servidor
    pedir = "Status"
    dire = form.selec.value;
    division = dire.split(":");
    puerto = division[2].split("/");
    /*alert(puerto[0]);*/

    if (dire != 0) {
        enviar = new XMLHttpRequest;
        /*enviar.open('POST', '../../datosgas/datosws.php');*/
        enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datosws.php'); //para empaquetar
        enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        enviar.send('estado=' + pedir + '&direcion=' + dire +'&p='+puerto[0]);
        verAlerta('Chico', 'Procesando...',''); //COMO HACER QUE SE ESCRIBA UNA UNICA VEZ
        enviar.onreadystatechange = function () {
            if (enviar.readyState == 4 && enviar.status == 200) {
                verModal('grande', '', 'Ok', 'Proceso Finalizado'); //NO LOS MUESTRA POR QUE LA RESPUESTA ES INMEDIATA...
                document.getElementById("estado").disabled = true;
                document.getElementById("cambio").disabled = true;
                document.getElementById("estado").style.backgroundColor = "grey";
                document.getElementById("estado").style.border = "grey";
                document.getElementById("cambio").style.backgroundColor = "grey";
                document.getElementById("cambio").style.border = "grey";

                respuesta = enviar.responseText;
                desg = respuesta.split('"');
                estado = desg[3];
                /*alert(estado);*/
                /*estado = "apagado";*/
                sessionStorage.setItem("state", estado);
                if (estado == "Prendido" || estado == "Apagado") { //aqui se debe poner las dos respuestas que deben regresar si son diferentes error
                    /*vermodal();*/
                    /*alert("El Status del *** es: "+estado);*/
                    document.getElementById("dstado").innerHTML = estado;
                    verModal('grande', '', 'Ok', "El status es: " + estado);
                    if (estado == "Prendido") {
                        image = document.getElementById("botono");
                        image.src = "img/lightv.png";
                        document.getElementById("estado").style.backgroundColor = "grey";
                        document.getElementById("estado").style.border = "grey";
                        document.getElementById("estado").disabled = true;



                        document.getElementById("cambio").style.backgroundColor = "#005845";
                        document.getElementById("cambio").border = "#005845";
                        document.getElementById("cambio").disabled = false;
                    }
                    if (estado == "Apagado") {
                        image = document.getElementById("botono");
                        image.src = "img/lightr.png";
                        document.getElementById("estado").style.backgroundColor = "grey";
                        document.getElementById("estado").style.border = "grey";
                        document.getElementById("estado").disabled = true;



                        document.getElementById("cambio").style.backgroundColor = "#005845";
                        document.getElementById("cambio").border = "#005845";
                        document.getElementById("cambio").disabled = false;
                    }

                } else {
                    verModal('grande', '', 'Ok', "Hay un error en el servidor, favor de reportar");
                    document.getElementById("estado").style.backgroundColor = "#005845";
                    document.getElementById("estado").style.border = "#005845";
                    document.getElementById("estado").disabled = false;

                    document.getElementById("dstado").innerHTML = "Status";

                    document.getElementById("cambio").style.backgroundColor = "grey";
                    document.getElementById("cambio").border = "grey";
                    document.getElementById("cambio").disabled = true;
                    /*AQUI SE DEBE AGREGAR EL MODAL... ARRIBA SOLO LA BARRA O UN MODAL DE VERDAD... COMO EL QUE SE HACE*/
                }
            }
        }
    } else {
        verModal('grande', '', 'Ok', "Selecciona una Estación");
    }
}

function cambiarS(form) { //genera una peticion para el cambio de status
    res = sessionStorage.getItem("state");
    dire = form.selec.value;
    division = dire.split(":");
    puerto = division[2].split("/");
    /*alert(res);*/
    if (res == "Prendido") {
        /*alert(dire);*/
        res = "Apagado";
        /*alert(res+"CAMBIO DE STATUS");*/
        direccion = "";
        enviar = new XMLHttpRequest;
        /*enviar.open('POST', 'datows.php');*/
        enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datows.php'); //para empaquetar
        enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        enviar.send('cambiar=' + res + '&direcion=' + dire +'&p='+puerto[0]);
        
        verAlerta('Chico', 'Procesando...','');
        enviar.onreadystatechange = function () {
            if (enviar.readyState == 4 && enviar.status == 200) {
                verModal('grande', '', 'Ok', 'Proceso Finalizado');
                /*alert("entro al ready");*/
                respuesta = enviar.responseText;
                /*alert(respuesta+"ESTA ES LA RESPUESTA");*/
                desg = respuesta.split('"');
                estador = desg[3];

                if (estador == "Apagado Correcto") {
                    estado = "Apagado";
                    sessionStorage.setItem("state", estado);
                    document.getElementById("dstado").innerHTML = estado;
                    verModal('grande', '', 'Ok', "El status es: " + estado);
                    image = document.getElementById("botono");
                    image.src = "img/lightr.png";
                    document.getElementById("estado").style.backgroundColor = "grey";
                    document.getElementById("estado").style.border = "grey";
                    document.getElementById("estado").disabled = true;

                    document.getElementById("cambio").style.backgroundColor = "#005845";
                    document.getElementById("cambio").border = "#005845";
                    document.getElementById("cambio").disabled = false;
                }

            } //ERROR DE NO HACAR NADA!
        }
    } else {
        /*alert("entro al else");*/
        /*alert(dire);*/
        res = "Prendido";
        /*alert(res);*/
        direccion = "";
        enviar = new XMLHttpRequest;
        /*enviar.open('POST', 'datows.php');*/
        enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datows.php'); //para empaquetar
        enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        enviar.send('cambiar=' + res + '&direcion=' + dire +'&p='+puerto[0]);
       verAlerta('Chico', 'Procesando...','');
        enviar.onreadystatechange = function () {
            if (enviar.readyState == 4 && enviar.status == 200) {
                /*alert("entro al ready");*/
                verModal('grande', '', 'Ok', 'Proceso Finalizado');
                respuesta = enviar.responseText;
                /*alert(respuesta);*/
                desg = respuesta.split('"');
                estador = desg[3];

                if (estador == "Prendido Correcto") {
                    estado = "Prendido";
                    sessionStorage.setItem("state", estado);
                    document.getElementById("dstado").innerHTML = estado;
                    verModal('grande', '', 'Ok', "El status es: " + estado);
                    image = document.getElementById("botono");
                    image.src = "img/lightv.png";
                    document.getElementById("estado").style.backgroundColor = "grey";
                    document.getElementById("estado").style.border = "grey";
                    document.getElementById("estado").disabled = true;

                    document.getElementById("cambio").style.backgroundColor = "#005845";
                    document.getElementById("cambio").border = "#005845";
                    document.getElementById("cambio").disabled = false;
                }
            }
        }
    }
}

/*PARA CORTE.HTML*/
function mostrarcorte() {
    flag = "inicioFin";
    enviar = new XMLHttpRequest;
    /*enviar.open('POST', 'datos.php');*/
    enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datoslocal.php'); //para empaquetar
    enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    enviar.send('flag=' + flag);
    enviar.onreadystatechange = function () {
        if (enviar.readyState == 4 && enviar.status == 200) {
            respuesta = enviar.responseText;
            sessionStorage.setItem("sta", respuesta);
            //alert(respuesta); la trama de la respuesta
            separar = respuesta.split("*");
            numero = (separar.length);
            //alert(numero); total de datos
            m = 0; //posicion de los id
            j = 1; //poscion de nombre
            k = 2; //direccion de imagen
            l=0;
            for (i = 0; i <= numero; i++) {
                if (separar[m] == 1 || separar[m] == 2 || separar[m] == 4 || separar[m] == 6 ){
                    document.getElementById("menusta").innerHTML += " <div class='divestacion' onclick='vercorte(this.id)' id='"+separar[m]+"'> <div class='div80' style='margin-left: 10%;'> <div class='div1'><div class='div20'><img src='http://www.mexienergi.com/aplicacion/imgsta/mexi.png' style='width: 80%; height:80%;'></div><div class='div80' style='background: rgba(255,38,0,1); border-radius:5px;'><span style='display: flex; justify-content: center; margin-top:3%; color: white; font-size: 1.5em;'> "+separar[j]+"</span> </div></div> </div> </div>";
                }
                if(separar[m] == 3 || separar[m] == 5 || separar[m] == 7){
                    document.getElementById("menusta").innerHTML += " <div class='divestacion' onclick='vercorte(this.id)' id='"+separar[m]+"'> <div class='div80' style='margin-left: 10%;'> <div class='div1'><div class='div20'><img src='http://www.mexienergi.com/aplicacion/imgsta/shell.png' style='width: 80%; height:80%;'></div><div class='div80' style='background: rgba(255,38,0,1); border-radius:5px;'><span style='display: flex; justify-content: center; margin-top:3%; color: white; font-size: 1.5em;'> "+separar[j]+"</span> </div></div> </div> </div>";
                }
                if(separar[m] == 9 || separar[m] == 10 || separar[m] == 11 || separar[m] == 8){
                    document.getElementById("menusta").innerHTML += " <div class='divestacion' id='"+separar[m]+"'> <div class='div80' style='margin-left: 10%;'> <div class='div1'><div class='div20'><img src='http://www.mexienergi.com/aplicacion/imgsta/shell.png' style='width: 80%; height:80%;'></div><div class='div80' style='background: rgba(255,38,0,1); border-radius:5px;'><span style='display: flex; justify-content: center; margin-top:3%; color: white; font-size: 1.5em;'> "+separar[j]+"</span> </div></div> </div> </div>";   
                }

                j = j + 3;
                m = m + 3;
                k = k + 3;
                l++;
                //if(separar[m] > 10){ break;} 
            }
            //COMO VALIDAR LOS DATOS DE LA RESPUESTA...
        }
    }
}

function vercorte(id) {
    respdat2 = sessionStorage.getItem("sta");
    perm = sessionStorage.getItem("esc");
    //alert(respdat2);// CORRECTA
    seperador = respdat2.split("*");
    numero = (seperador.length) - 1;
    separador2 = perm.split(",");
    numero2 = (separador2.length) - 1;
    //alert(numero); //CORRECTO cantidad de informacion
    //alert(numero2); //CORRECTO cantidad de estaciones sale del corte
    for (i = 0; i <= numero; i++) {
        estaf[i] = seperador[i];
    }
    for (l = 0; l <= numero2; l++) {
        vali[l] = separador2[l];
    }
    //alert(estaf);//toda la informacion con ,
    //alert(vali);//toda las estaciones con ,
    k = 0;
    for (j = 0; j <= numero2; j++) {
        if (vali[j] == "1") {
            vali[j] = estaf[k];
            k = k + 3;
        } else {
            k = k + 3;
        }
    }
    //alert(vali);
    estacions = id;
    //alert(estacions);
    for (m = 0; m <= numero2; m++) {
        if (estacions == vali[m]) {
            sessionStorage.setItem("staact", estacions);
            location.href = "estacion.html";
        }
    }
}

function muestrae() {
    estacione = sessionStorage.getItem("staact");
    /*alert("CARGA DE LA ESTACION PARA MOSTRAR EL DIV CORRECTO CON EL ID EXACTO"+estacione);*/
    flag = "cargaFin";

    if(estacione == 7){
        estacionns = 1;
        //alert("SE FELIZ YA FUNCIONA");
        enviar = new XMLHttpRequest;
        //enviar.open('POST', '../../datosprueba/datoslocalns.php');
        enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datoslocalns.php'); //para empaquetar
        enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        enviar.send('idesta=' + estacionns + '&flag=' + flag);
        enviar.onreadystatechange = function () {
            if (enviar.readyState == 4 && enviar.status == 200) {
                respuesta = enviar.responseText;
                //alert(respuesta);
                datos = respuesta.split("*");
                fecha = datos[2];
                sessionStorage.setItem("fecha", fecha);
                document.getElementById("nombre").innerHTML = datos[0];
                if(datos[0] == "SERVIFIGUES"){
                    image = document.getElementById("bannersta");
                    image.src = dirimg[6];
                }
                document.getElementById("fecha").innerHTML = "Fecha de corte: "+fecha;
                document.getElementById("preciom").innerHTML = "$" + datos[3];
                document.getElementById("preciop").innerHTML = "$" + datos[4];
                document.getElementById("preciod").innerHTML = "$" + datos[5];
                document.getElementById("vendidom").innerHTML = datos[6]+"lts";
                document.getElementById("vendidop").innerHTML = datos[7]+"lts";
                document.getElementById("vendidod").innerHTML = datos[8]+"lts";
                document.getElementById("pm").innerHTML = datos[10]+"%";
                document.getElementById("pp").innerHTML = datos[11]+"%";
                document.getElementById("pd").innerHTML = datos[12]+"%";
                document.getElementById("totalv").innerHTML = "$"+datos[1];
                document.getElementById("totalts").innerHTML = datos[9]+"lts";
            }
        }
    }else{
        enviar = new XMLHttpRequest;
        /*enviar.open('POST', 'datos.php');*/
        enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datoslocal.php'); //para empaquetar
        enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        enviar.send('idesta=' + estacione + '&flag=' + flag);
        enviar.onreadystatechange = function () {
            if (enviar.readyState == 4 && enviar.status == 200) {
                respuesta = enviar.responseText;
                /*alert(respuesta);*/
                datos = respuesta.split("*");
                fecha = datos[2];
                sessionStorage.setItem("fecha", fecha);
                document.getElementById("nombre").innerHTML = datos[0];
                if(datos[0] == "AEROPUERTO"){
                    image = document.getElementById("bannersta");
                    image.src = dirimg[0];
                }if(datos[0] == "TLACOTE"){
                    image = document.getElementById("bannersta");
                    image.src = dirimg[5];
                }if(datos[0] == "MACIAS"){
                    image = document.getElementById("bannersta");
                    image.src = dirimg[4];
                }if(datos[0] == "ARCANGEL"){
                    image = document.getElementById("bannersta");
                    image.src = dirimg[1];
                }if(datos[0] == "EPIGMENIO"){
                    image = document.getElementById("bannersta");
                    image.src = dirimg[2];
                }if(datos[0] == "NORTHM"){
                    image = document.getElementById("bannersta");
                    image.src = dirimg[3];
                }
                document.getElementById("fecha").innerHTML = "Fecha de corte: "+fecha;
                document.getElementById("preciom").innerHTML = "$" + datos[3];
                document.getElementById("preciop").innerHTML = "$" + datos[4];
                document.getElementById("preciod").innerHTML = "$" + datos[5];
                document.getElementById("vendidom").innerHTML = datos[6]+"lts";
                document.getElementById("vendidop").innerHTML = datos[7]+"lts";
                document.getElementById("vendidod").innerHTML = datos[8]+"lts";
                document.getElementById("pm").innerHTML = datos[10]+"%";
                document.getElementById("pp").innerHTML = datos[11]+"%";
                document.getElementById("pd").innerHTML = datos[12]+"%";
                document.getElementById("totalv").innerHTML = "$"+datos[1];
                document.getElementById("totalts").innerHTML = datos[9]+"lts";
            }
        }
    }
}

function pormes() { //ventas hasta el dia actual del mes
    estacione = sessionStorage.getItem("staact");
    flag = "ventaFin";
    if(estacione == 7){
        estacionns = 1;
        enviar = new XMLHttpRequest;
        //enviar.open('POST', '../../datosprueba/datoslocalns.php');
        enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datoslocalns.php'); //para empaquetar
        enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        enviar.send('idesta=' + estacionns + '&flag=' + flag);
        enviar.onreadystatechange = function () {
            if (enviar.readyState == 4 && enviar.status == 200) {
                respuesta = enviar.responseText;
                //alert(respuesta);
                fecha = sessionStorage.getItem("fecha");
                fechas = fecha.split("/");
                rango = respuesta.split("*");
                document.getElementById("totalv2").innerHTML = "$" + rango[3];
                document.getElementById("totalts2").innerHTML = rango[7] + " lts";
                document.getElementById("fecha2").innerHTML = meses[parseInt(fechas[1])]+" "+fechas[2];
                document.getElementById("preciom2").innerHTML = "$" + rango[11];
                document.getElementById("preciop2").innerHTML = "$" + rango[12];
                document.getElementById("preciod2").innerHTML = "$" + rango[13];
                document.getElementById("litrosm2").innerHTML = rango[4]+"lts";
                document.getElementById("litrosp2").innerHTML = rango[5]+"lts";
                document.getElementById("litrosd2").innerHTML = rango[6]+"lts";
                document.getElementById("vendidom2").innerHTML = "$" + rango[0];
                document.getElementById("vendidop2").innerHTML = "$" + rango[1];
                document.getElementById("vendidod2").innerHTML = "$" + rango[2];
                document.getElementById("pm2").innerHTML = rango[8]+"%";
                document.getElementById("pp2").innerHTML = rango[9]+"%";
                document.getElementById("pd2").innerHTML = rango[10]+"%";
            }
        }
    }else{
        enviar = new XMLHttpRequest;
        /*enviar.open('POST', '../../datosgas/datos.php');*/
        enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datoslocal.php'); //para empaquetar
        enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        enviar.send('idesta=' + estacione + '&flag=' + flag);
        enviar.onreadystatechange = function () {
            if (enviar.readyState == 4 && enviar.status == 200) {
                respuesta = enviar.responseText;
                /*alert(respuesta);*/
                fecha = sessionStorage.getItem("fecha");
                fechas = fecha.split("/");
                rango = respuesta.split("*");
                document.getElementById("totalv2").innerHTML = "$" + rango[3];
                document.getElementById("totalts2").innerHTML = rango[7] + " lts";
                document.getElementById("fecha2").innerHTML = meses[parseInt(fechas[1])]+" "+fechas[2];
                document.getElementById("preciom2").innerHTML = "$" + rango[11];
                document.getElementById("preciop2").innerHTML = "$" + rango[12];
                document.getElementById("preciod2").innerHTML = "$" + rango[13];
                document.getElementById("litrosm2").innerHTML = rango[4]+"lts";
                document.getElementById("litrosp2").innerHTML = rango[5]+"lts";
                document.getElementById("litrosd2").innerHTML = rango[6]+"lts";
                document.getElementById("vendidom2").innerHTML = "$" + rango[0];
                document.getElementById("vendidop2").innerHTML = "$" + rango[1];
                document.getElementById("vendidod2").innerHTML = "$" + rango[2];
                document.getElementById("pm2").innerHTML = rango[8]+"%";
                document.getElementById("pp2").innerHTML = rango[9]+"%";
                document.getElementById("pd2").innerHTML = rango[10]+"%";
            }
        }
    }    
}

function promdmes() { //promedios del mes
    estacione = sessionStorage.getItem("staact");
    flag = "promedioFin";
    if(estacione == 7){
        estacionns = 1;
        enviar = new XMLHttpRequest;
        //enviar.open('POST', '../../datosprueba/datoslocalns.php');
        enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datoslocalns.php'); //para empaquetar
        enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        enviar.send('idesta=' + estacionns + '&flag=' + flag);
        enviar.onreadystatechange = function () {
            if (enviar.readyState == 4 && enviar.status == 200) {
                respuesta = enviar.responseText;
                //alert(respuesta);
                fecha = sessionStorage.getItem("fecha");
                fechas = fecha.split("/");
                rango = respuesta.split("*");
                document.getElementById("totalv3").innerHTML = "$" + rango[3];
                document.getElementById("totalts3").innerHTML = rango[7] + " lts";
                document.getElementById("fecha3").innerHTML = "Promedio de "+meses[parseInt(fechas[1])]+" "+fechas[2];
                document.getElementById("preciom3").innerHTML = "$" + rango[11];
                document.getElementById("preciop3").innerHTML = "$" + rango[12];
                document.getElementById("preciod3").innerHTML = "$" + rango[13];
                document.getElementById("litrosm3").innerHTML = rango[4]+"lts";
                document.getElementById("litrosp3").innerHTML = rango[5]+"lts";
                document.getElementById("litrosd3").innerHTML = rango[6]+"lts";
                document.getElementById("vendidom3").innerHTML = "$" + rango[0];
                document.getElementById("vendidop3").innerHTML = "$" + rango[1];
                document.getElementById("vendidod3").innerHTML = "$" + rango[2];
                document.getElementById("pm3").innerHTML = rango[8]+"%";
                document.getElementById("pp3").innerHTML = rango[9]+"%";
                document.getElementById("pd3").innerHTML = rango[10]+"%";
            }
        }
    }else{
        enviar = new XMLHttpRequest;
        //enviar.open('POST', '../../datosapp/datos.php');
        enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datoslocal.php'); //para empaquetar
        enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        enviar.send('idesta=' + estacione + '&flag=' + flag);
        enviar.onreadystatechange = function () {
            if (enviar.readyState == 4 && enviar.status == 200) {
                respuesta = enviar.responseText;
                //alert(respuesta);
                fecha = sessionStorage.getItem("fecha");
                fechas = fecha.split("/");
                rango = respuesta.split("*");
                numero = (rango.length);
                numero = (numero - 1)/15;
                //alert(numero);
                m=0;
                n=4;
                l=8;
                o=11;
                p=14;

                for (i = 0; i < numero; i++) { //or normal
                    document.getElementById("promedio").innerHTML += "<div class='div1'></div> <div class='div1'><p style='font-size: 1.2em; color: #ff2600;' id='fecha3'>Promedio de "+rango[p]+"</p></div><div class='div1'></div><div class='div3' style='display: block !important; background: #fddd0a; margin-right: 0% !important; margin-left: 2%; margin-bottom: 4px !important;'><p style='font-size: 1.4em; color: black;'>Super</p></div><div class='div3' style='display: block !important; background: #ba031d; margin-right: 0% !important; margin-bottom: 4px !important;'><p style='font-size: 1.4em; color: white;'>V-Power</p></div><div class='div3' style='display: block !important; background: #000000; margin-right: 0% !important; margin-bottom: 4px !important;'><p style='color: white; font-size: 1.4em;'>Diesel</p></div><div class='div3' style='display: block !important; background: rgba(64,78,103,.6); margin-right: 0% !important; margin-left: 2%; margin-bottom: 4px !important;'><p id='preciom3' style='font-size: 1.1em;'>$"+rango[o]+"</p></div><div class='div3' style='display: block !important; background: rgba(64,78,103,.6); margin-right: 0% !important; margin-bottom: 4px !important;'><p id='preciop3' style='font-size: 1.1em;'>"+rango[o+1]+"</p></div><div class='div3' style='display: block !important; background: rgba(64,78,103,.6); margin-right: 0% !important; margin-bottom: 4px !important;'><p id='preciod3' style='font-size: 1.1em;'>"+rango[o+2]+"</p></div> <div class='div3' style='display: block !important; background: white; margin-right: 0% !important; margin-left: 2%; margin-bottom: 4px !important;'><p id='litrosm3' style='font-size: 1.1em;'>"+rango[n]+"lts</p></div><div class='div3' style='display: block !important; background: white; margin-right: 0% !important; margin-bottom: 4px !important;'><p id='litrosp3' style='font-size: 1.1em;'>"+rango[n+1]+"lts</p></div><div class='div3' style='display: block !important; background: white; margin-right: 0% !important; margin-bottom: 4px !important;'><p id='litrosd3' style='font-size: 1.1em;'>"+rango[n+2]+"lts</p></div><div class='div3' style='display: block !important; background: rgba(64,78,103,.6); margin-right: 0% !important; margin-left: 2%; margin-bottom: 4px !important;'><p id='vendidom3' style='font-size: 1.1em;'>$"+rango[m]+"</p></div><div class='div3' style='display: block !important; background: rgba(64,78,103,.6); margin-right: 0% !important; margin-bottom: 4px !important;'><p id='vendidop3' style='font-size: 1.1em;'>$"+rango[m+1]+"</p></div><div class='div3' style='display: block !important; background: rgba(64,78,103,.6); margin-right: 0% !important; margin-bottom: 4px !important;'><p id='vendidod3' style='font-size: 1.1em;'>$"+rango[m+2]+"</p></div><div class='div3' style='display: block !important; background: white; margin-right: 0% !important; margin-left: 2%; margin-bottom: 4px !important;'><p id='pm3' style='font-size: 1.1em;'>"+rango[l]+"%</p></div><div class='div3' style='display: block !important; background: white; margin-right: 0% !important; margin-bottom: 4px !important;'><p id='pp3' style='font-size: 1.1em;'>"+rango[l+1]+"%</p></div><div class='div3' style='display: block !important; background: white; margin-right: 0% !important; margin-bottom: 4px !important;'><p id='pd3' style='font-size: 1.1em;'>"+rango[l+2]+"%</p></div><div class='div2' style='margin-bottom: 1px;'><p style='font-size: 1.3em;'>Venta Total</p></div><div class='div2' style='margin-bottom: 1px;'><p style='font-size: 1.3em;'>Total de lts</p></div><div class='div1' style='border-top: 1px solid #ff2600'> <div class='div2'><p id='totalv3' style='font-size: 1.2em;'>$"+rango[m+3]+"</p></div><div class='div2'><p id='totalts3' style='font-size: 1.2em;'>"+rango[n+3]+"</p></div></div>";
                    m=m+15;
                    n=n+15;
                    l=l+15;
                    o=o+15;
                    p=p+15;
                    //alert(m,n,l,o,p);
                }
            }
        }
    }    
}

function porfecha() { //carga la fecha actual en la seccion de rango, 
    estacione = sessionStorage.getItem("staact");
    finicio = sessionStorage.getItem("fecha");
    ffin = sessionStorage.getItem("fecha");
    ffalsa = sessionStorage.getItem("fecha");
    flag = "fechaFin";
    if(estacione == 7){
        estacionns = 1;
        //alert(estacione+"fechainicio"+finicio+"fecha fin"+ffin);
        enviar = new XMLHttpRequest;
        //enviar.open('POST', '../../datosprueba/datoslocalns.php');
        enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datoslocalns.php'); //para empaquetar
        enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        enviar.send('idesta=' + estacionns + '&fecini=' + finicio + '&fecfin=' + ffin + '&flag=' + flag);
        enviar.onreadystatechange = function () {
            if (enviar.readyState == 4 && enviar.status == 200) {
                respuesta = enviar.responseText;
                /*alert(respuesta);*/
                rango = respuesta.split("*");
                document.getElementById("totalv4").innerHTML = "$" + rango[3];
                document.getElementById("totalts4").innerHTML = rango[7] + " lts";
                /*document.getElementById("fecha").innerHTML = ffalsa + " a " + ffalsa;*/
                document.getElementById("preciom4").innerHTML = "$" + rango[11];
                document.getElementById("preciop4").innerHTML = "$" + rango[12];
                document.getElementById("preciod4").innerHTML = "$" + rango[13];
                document.getElementById("vendidom4").innerHTML = rango[4]+"lts";
                document.getElementById("vendidop4").innerHTML = rango[5]+"lts";
                document.getElementById("vendidod4").innerHTML = rango[6]+"lts";
                document.getElementById("vtm4").innerHTML = "$" + rango[0];
                document.getElementById("vtp4").innerHTML = "$" + rango[1];
                document.getElementById("vtd4").innerHTML = "$" + rango[2];
                document.getElementById("pm4").innerHTML = rango[8]+"%";
                document.getElementById("pp4").innerHTML = rango[9]+"%";
                document.getElementById("pd4").innerHTML = rango[10]+"%";
                fecha = finicio.split('/').reverse().join('-');
                document.getElementById("fechai").value =fecha;
                document.getElementById("fechaf").value =fecha;
            }
        }
    }else{
        enviar = new XMLHttpRequest;
        /*enviar.open('POST', 'datos.php');*/
        enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datoslocal.php'); //para empaquetar
        enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        enviar.send('idesta=' + estacione + '&fecini=' + finicio + '&fecfin=' + ffin + '&flag=' + flag);
        enviar.onreadystatechange = function () {
            if (enviar.readyState == 4 && enviar.status == 200) {
                respuesta = enviar.responseText;
                /*alert(respuesta);*/
                rango = respuesta.split("*");
                document.getElementById("totalv4").innerHTML = "$" + rango[3];
                document.getElementById("totalts4").innerHTML = rango[7] + " lts";
                /*document.getElementById("fecha").innerHTML = ffalsa + " a " + ffalsa;*/
                document.getElementById("preciom4").innerHTML = "$" + rango[11];
                document.getElementById("preciop4").innerHTML = "$" + rango[12];
                document.getElementById("preciod4").innerHTML = "$" + rango[13];
                document.getElementById("vendidom4").innerHTML = rango[4]+"lts";
                document.getElementById("vendidop4").innerHTML = rango[5]+"lts";
                document.getElementById("vendidod4").innerHTML = rango[6]+"lts";
                document.getElementById("vtm4").innerHTML = "$" + rango[0];
                document.getElementById("vtp4").innerHTML = "$" + rango[1];
                document.getElementById("vtd4").innerHTML = "$" + rango[2];
                document.getElementById("pm4").innerHTML = rango[8]+"%";
                document.getElementById("pp4").innerHTML = rango[9]+"%";
                document.getElementById("pd4").innerHTML = rango[10]+"%";
                fecha = finicio.split('/').reverse().join('-');
                document.getElementById("fechai").value =fecha;
                document.getElementById("fechaf").value =fecha;
            }
        }
    }    
}

function tipoCorte(cambio) {
    opcion = cambio;
    /*diac = document.getElementById('corte');*/
    porm = document.querySelector("#mes");
    prom = document.querySelector("#promedio");
    ranf = document.querySelector("#rango");
    if (opcion == "corte") {
        document.getElementById('cortem').classList.add("ver");
        document.getElementById('cortem').classList.remove("nv");
        document.getElementById("cortet").style.borderBottom = "2px solid #f60908";        

        porm.classList.add("nv");
        porm.classList.remove("ver");
        document.getElementById("pmest").style.borderBottom = "none";

        prom.classList.add("nv");
        prom.classList.remove("ver");
        document.getElementById("promediot").style.borderBottom = "none";

        ranf.classList.add("nv");
        ranf.classList.remove("ver");
        document.getElementById("rfechat").style.borderBottom = "none";
        document.getElementById("primera").classList.remove("no");
    }
    if (opcion == "pmes") {
        porm.classList.add("ver");
        porm.classList.remove("nv");
        document.getElementById("pmest").style.borderBottom = "2px solid #f60908";

        document.getElementById('cortem').classList.remove("ver");
        document.getElementById('cortem').classList.add("nv");        
        document.getElementById("cortet").style.borderBottom = "none";

        prom.classList.add("nv");
        prom.classList.remove("ver");
        document.getElementById("promediot").style.borderBottom = "none";

        ranf.classList.add("nv");
        ranf.classList.remove("ver");
        document.getElementById("rfechat").style.borderBottom = "none";

        document.getElementById("primera").classList.remove("no");
        pormes();
    }
    if (opcion == "promedio") {
        prom.classList.add("ver");
        prom.classList.remove("nv");
        document.getElementById("promediot").style.borderBottom = "2px solid #f60908";

        document.getElementById('cortem').classList.add("nv");
        document.getElementById('cortem').classList.remove("ver");
        document.getElementById("cortet").style.borderBottom = "none";

        porm.classList.add("nv");
        porm.classList.remove("ver");
        document.getElementById("pmest").style.borderBottom = "none";

        ranf.classList.add("nv");
        ranf.classList.remove("ver");
        document.getElementById("rfechat").style.borderBottom = "none";

        document.getElementById("primera").classList.remove("no");
        promdmes();
    }
    if (opcion == "rfecha") {
        ranf.classList.add("ver");
        ranf.classList.remove("nv");
        document.getElementById("rfechat").style.borderBottom = "2px solid #f60908";

        document.getElementById('cortem').classList.add("nv");
        document.getElementById('cortem').classList.remove("ver");
        document.getElementById("cortet").style.borderBottom = "none";

        porm.classList.add("nv");
        porm.classList.remove("ver");
        document.getElementById("pmest").style.borderBottom = "none";

        prom.classList.add("nv");
        prom.classList.remove("ver");
        document.getElementById("promediot").style.borderBottom = "none";
        document.getElementById("segunda").classList.add("no");
        porfecha()
    }
}

function enviarF(form) { //rango de fecha se acciona con el boton
    estacione = sessionStorage.getItem("staact");
    finicio = form.fechai.value;
    ffin = form.fechaf.value;
    /*alert("CARGA DE LA ESTACION PARA MOSTRAR EL DIV CORRECTO CON EL ID EXACTO"+estacione);*/
    flag = "fechaFin";
    finicio = finicio.split('-').reverse().join('/');
    ffin = ffin.split('-').reverse().join('/');

    document.getElementById("primera").classList.add('no');
    document.getElementById("segunda").classList.remove('no')

    //alert('fechain'+finicio+'fechafin'+ffin);

    if(estacione == 7){
        if (finicio != "") {
            if (ffin != "") {
                estacione = 1;
                //alert(finicio);alert(ffin);
                //alert(estacione);
                valorinicio = finicio.split("/");
                valorfin = ffin.split("/");
                diainicio = new Date(valorinicio[2],(valorinicio[1]-1),valorinicio[0]);
                diafin = new Date(valorfin[2],(valorfin[1]-1),valorfin[0]);
                //alert(diainicio);alert(diafin);
                if(diafin >= diainicio){
                    enviar = new XMLHttpRequest;
                    /*enviar.open('POST', 'datos.php');*/
                    //enviar.open('POST', '../../datosprueba/datoslocalns.php');
                    enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datoslocalns.php'); //para empaquetar
                    enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    enviar.send('idesta=' + estacione + '&fecini=' + finicio + '&fecfin=' + ffin + '&flag=' + flag);
                    //alert(estacione+"inicio"+finicio+"fin"+ffin);
                    enviar.onreadystatechange = function () {
                        if (enviar.readyState == 4 && enviar.status == 200) {
                            respuesta = enviar.responseText;
                            /*alert(respuesta);*/
                            rango = respuesta.split("*");
                            document.getElementById("totalv4").innerHTML = "$" + rango[3];
                            document.getElementById("totalts4").innerHTML = rango[7] + " lts";
                            /*document.getElementById("fecha").innerHTML = ffalsa + " a " + ffalsa;*/
                            document.getElementById("preciom4").innerHTML = "$" + rango[11];
                            document.getElementById("preciop4").innerHTML = "$" + rango[12];
                            document.getElementById("preciod4").innerHTML = "$" + rango[13];
                            document.getElementById("vendidom4").innerHTML = rango[4]+"lts";
                            document.getElementById("vendidop4").innerHTML = rango[5]+"lts";
                            document.getElementById("vendidod4").innerHTML = rango[6]+"lts";
                            document.getElementById("vtm4").innerHTML = "$" + rango[0];
                            document.getElementById("vtp4").innerHTML = "$" + rango[1];
                            document.getElementById("vtd4").innerHTML = "$" + rango[2];
                            document.getElementById("pm4").innerHTML = rango[8]+"%";
                            document.getElementById("pp4").innerHTML = rango[9]+"%";
                            document.getElementById("pd4").innerHTML = rango[10]+"%";

                        }
                    }
                }else{
                    verModal('grande', '', 'Ok', 'Verifica las fechas, rango incorrecto.');
                }
            } else {
                verModal('grande', '', 'Ok', 'Selecciona correctamente las fechas.');
            }
        } else {
            verModal('grande', '', 'Ok', 'Selecciona correctamente las fechas.');
        }
    }else{
        //alert("no es servi");
        if (finicio != "") {
            if (ffin != "") {
                //alert(finicio+"hasta"+ffin);
                valorinicio = finicio.split("/");
                valorfin = ffin.split("/");
                diainicio = new Date(valorinicio[2],(valorinicio[1]-1),valorinicio[0]);
                diafin = new Date(valorfin[2],(valorfin[1]-1),valorfin[0]);
                if(diafin >= diainicio){
                    //alert("cumple condicion");
                    finiciog = finicio.split('/').reverse().join('-');
                    ffing = ffin.split('/').reverse().join('-');
                    //alert(finiciog+"hasta"+ffing);
                    enviar = new XMLHttpRequest;
                    //enviar.open('POST', '../../datosapp/datos.php');
                    enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datoslocal.php'); //para empaquetar
                    enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    enviar.send('idesta=' + estacione + '&fecini=' + finicio + '&fecfin=' + ffin + '&flag=' + flag);
                    enviar.onreadystatechange = function () {
                        if (enviar.readyState == 4 && enviar.status == 200) {
                            respuesta = enviar.responseText;
                            //alert(respuesta);
                            rango = respuesta.split("*");
                            numero = (rango.length);
                            //alert(numero);
                            numero = numero/15;
                            numero = Math.round(numero);
                            //alert(numero);
                            o=0;
                            p=4;
                            q=8;
                            r=11;
                            s=14;

                            for (i = 0; i < numero; i++) { //or normal
                                document.getElementById("segunda").innerHTML += "<div class='div1'></div> <div class='div1'><p style='font-size: 1.2em; color: #ff2600;' id='fecha3'>Promedio  "+rango[s]+"</p></div><div class='div3' style='display: block !important; background: #fddd0a; margin-right: 0% !important; margin-left: 2%; margin-bottom: 4px !important;'><p style='font-size: 1.4em; color: black;'>Super</p></div><div class='div3' style='display: block !important; background: #ba031d; margin-right: 0% !important; margin-bottom: 4px !important;'><p style='font-size: 1.4em; color: white;'>V-Power</p></div><div class='div3' style='display: block !important; background: #000000; margin-right: 0% !important; margin-bottom: 4px !important;'><p style=' color: white; font-size: 1.4em;'>Diesel</p></div> <div class='div3' style='display: block !important; background: rgba(64,78,103,.6); margin-right: 0% !important; margin-left: 2%; margin-bottom: 4px !important;'><p id='preciom4' style='font-size: 1.1em;'>$"+rango[r]+"</p></div><div class='div3' style='display: block !important; background: rgba(64,78,103,.6); margin-right: 0% !important; margin-bottom: 4px !important;'><p id='preciop4' style='font-size: 1.1em;'>$"+rango[r+1]+"</p></div><div class='div3' style='display: block !important; background: rgba(64,78,103,.6); margin-right: 0% !important; margin-bottom: 4px !important;'><p id='preciod4' style='font-size: 1.1em;'>$"+rango[r+2]+"</p></div> <div class='div3' style='display: block !important; background: white; margin-right: 0% !important; margin-left: 2%; margin-bottom: 4px !important;'><p id='vendidom4' style='font-size: 1.1em;'>"+rango[p]+"lts</p></div><div class='div3' style='display: block !important; background: white; margin-right: 0% !important; margin-bottom: 4px !important;'><p id='vendidop4' style='font-size: 1.1em;'>"+rango[p+1]+"lts</p></div><div class='div3' style='display: block !important; background: white; margin-right: 0% !important; margin-bottom: 4px !important;'><p id='vendidod4' style='font-size: 1.1em;'>"+rango[p+2]+"lts</p></div> <div class='div3' style='display: block !important; background: rgba(64,78,103,.6); margin-right: 0% !important; margin-left: 2%; margin-bottom: 4px !important;'><p id='vtm4' style='font-size: 1.1em;'>$"+rango[o]+"</p></div><div class='div3' style='display: block !important; background: rgba(64,78,103,.6); margin-right: 0% !important; margin-bottom: 4px !important;'><p id='vtp4' style='font-size: 1.1em;'>$"+rango[o+1]+"</p></div><div class='div3' style='display: block !important; background: rgba(64,78,103,.6); margin-right: 0% !important; margin-bottom: 4px !important;'><p id='vtd4' style='font-size: 1.1em;'>$"+rango[o+2]+"</p></div> <div class='div3' style='display: block !important; background: white; margin-right: 0% !important; margin-left: 2%; margin-bottom: 4px !important;'><p id='pm4' style='font-size: 1.1em;'>"+rango[q]+"%</p></div><div class='div3' style='display: block !important; background: white; margin-right: 0% !important; margin-bottom: 4px !important;'><p id='pp4' style='font-size: 1.1em;'>"+rango[q+1]+"%</p></div><div class='div3' style='display: block !important; background: white; margin-right: 0% !important; margin-bottom: 4px !important;'><p id='pd4' style='font-size: 1.1em;'>"+rango[q+2]+"</p></div><div class='div2' style='margin-bottom: 1px;'><p style='font-size: 1.2em;'>Venta Total</p></div><div class='div2' style='margin-bottom: 1px;'><p style='font-size: 1.2em;'>Total de lts</p></div> <div class='div1' style='border-top: 1px solid #ff2600'> <div class='div2'><p id='totalv4' style='font-size: 1.2em;'>$"+rango[o+3]+"</p></div><div class='div2'><p id='totalts4' style='font-size: 1.2em;'>$"+rango[p+3]+"</p></div>";
                                o=o+15;
                                p=p+15;
                                q=q+15;
                                r=r+15;
                                s=s+15;
                                //alert(m,n,l,o,p);
                            }

                            /*document.getElementById("totalv4").innerHTML = "$" + rango[3];
                            document.getElementById("totalts4").innerHTML = rango[7] + " lts";
                            document.getElementById("fecha").innerHTML = ffalsa + " a " + ffalsa;
                            document.getElementById("preciom4").innerHTML = "$" + rango[11];
                            document.getElementById("preciop4").innerHTML = "$" + rango[12];
                            document.getElementById("preciod4").innerHTML = "$" + rango[13];
                            document.getElementById("vendidom4").innerHTML = rango[4]+"lts";
                            document.getElementById("vendidop4").innerHTML = rango[5]+"lts";
                            document.getElementById("vendidod4").innerHTML = rango[6]+"lts";
                            document.getElementById("vtm4").innerHTML = "$" + rango[0];
                            document.getElementById("vtp4").innerHTML = "$" + rango[1];
                            document.getElementById("vtd4").innerHTML = "$" + rango[2];
                            document.getElementById("pm4").innerHTML = rango[8]+"%";
                            document.getElementById("pp4").innerHTML = rango[9]+"%";
                            document.getElementById("pd4").innerHTML = rango[10]+"%";*/

                        }
                    }
                }else{
                    verModal('grande', '', 'Ok', 'La fecha de fin es anterior a la fecha de inicio');
                }
            } else {
                verModal('grande', '', 'Ok', 'Selecciona correctamente las fechas.');
            }
        } else {
            verModal('grande', '', 'Ok', 'Selecciona correctamente las fechas.');
        }
    }
}

function salir() { // Finaliza la sesión ademas de que borra los datos
    pagina = "index.html";
    sessionStorage.clear();
    window.location.assign(pagina);
}
    
function pagina(pagina) { // cambia de paginas
    if(pagina == "inicio.html"){
        window.location.assign(pagina);
        /*alert("corte");
        valida2();            */
    }else{
        window.location.assign(pagina);        
    }    
}
