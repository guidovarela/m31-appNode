const express = require('express')
const router = express.Router()

//data para los partials
let title = "Servicios"
let year = new Date().getFullYear();

let dataTitles = [
    {
        icon: '<i class="fa-solid fa-user-group"></i>',
        text: "Asesoramiento integral para la puesta en marcha de emisoras de radio FM y AM",
    },
    {
        icon: '<i class="fa-solid fa-tags"></i>',
        text: "Entrega del Equipamiento adquirido",
    },
    {
        icon: '<i class="fa-solid fa-forward"></i>',
        text: "Servicio de Post-Venta y asesoramiento",

    }
]









let dataTitles2 = [
    {
        icon: '<i class="fa-solid fa-circle-plus"></i>',
        title: "Compromiso y Calidad",
        text: "Confiamos en la calidad de nuestros productos. Manteniendo un alto estandar de calidad, para lograr cero defectos funcionales.",
    },
    {
        icon: '<i class="fa-solid fa-screwdriver-wrench"></i>',
        title: "Equipo de profesionales",
        text: "Nuestro equipo pone especial enfasis en el asesoramiento previo, para el uso eficiente de los recursos disponibles al inicio.",
    },
    {
        icon: '<i class="fa-solid fa-truck-fast"></i>',
        title: "Rapida entrega",
        text: "Nos enfocaos en le agil envio de nuestros productos, manteniendo stock sificente y rapida entrea ante el requerimiento.",
    },{
        icon: '<i class="fa-solid fa-circle-exclamation"></i>',
        title: "Urgencias",
        text: "Un servicio inmediato, mas alla de las distancias, con la meta desolucionar los inconvenientes tecnicos de nuestros productos",
    }
]

router.get('/',async function(request,response){
    // response.send("Esto es el contacto")
    //render('vista a renderizar',{data a enviar a la vista})


    response.render('servicios.hbs',{title,year,dataTitles,dataTitles2})
})

module.exports = router;
