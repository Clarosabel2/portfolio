export interface Project {
    name: string;
    description: string;
    src: string;
    href: string;
    demo:string;
    technologies: Technology[];
}

export interface Technology {
    name: string;
    icon: string;
    color: string;
}

const html: Technology = { name: "HTML", icon: "./html.svg", color: "#ff9f28" },
    css: Technology = { name: "CSS", icon: "./css.svg", color: "#0c4269" },
    js: Technology = { name: "JavaScript", icon: "./javascript.svg", color: "#ff9f28" },
    tailwind: Technology = { name: "Tailwind", icon: "./tailwind.svg", color: "#014854" },
    java: Technology = { name: "Java", icon: "./java.svg", color: "#fff" },
    spring: Technology = { name: "Spring", icon: "./spring.svg", color: "#3e6624" },
    cs: Technology = { name: "C#", icon: "./c--4.svg", color: "#8461bb" },
    net: Technology = { name: ".NET", icon: "./dotnet.svg", color: "#4bb2dc" },
    asp: Technology = { name: "ASP.NET", icon: "./dotnet.svg", color: "#4bb2dc" },
    mysql: Technology = { name: "MySQL", icon: "./mysql.svg", color: "#fff" },
    hibernate: Technology = { name: "Hibernate", icon: "./hibernate.svg", color: "#3c3726" },
    sqlserver: Technology = { name: "SQL Server", icon: "./sqlserver.svg", color: "#fff" },
    bootstrap: Technology = { name: "Bootstrap", icon: "./bootstrap.svg", color: "#322349" };

export const proyects: Project[]=[
    {
        name:"FutbolMatch",
        description:"FutbolMatch es un proyecto diseñado para facilitar la organización y gestión alquileres de canchas. Permite a los usuarios registrarse, iniciar sesión y reservar una cancha.",
        src:"/futbolmatch.png",
        href:"https://github.com/Clarosabel2/FutbolMatchASP",
        demo:"",
        technologies:[asp,tailwind, bootstrap]
    },
    {
        name:"Foro Hub",
        description:"Foro Hub es una aplicación de foro desarrollada con Spring Boot, que permite a los usuarios crear y gestionar temas de discusión. Esta aplicación utiliza Spring Security para la autenticación, Spring Data JPA para la persistencia de datos, y Flyway para la migración de bases de dato",
        src:"/image-1.jpg",
        href:"https://github.com/Clarosabel2/foro-hub",
        demo:"",
        technologies:[spring,hibernate,mysql]
    },
    {
        name:"Corralon App",
        description:"Corralon App en C# Windows Forms (WinForms) para .NET, diseñada para gestionar las operaciones de ventas de un corralón. Permite manejar productos, clientes, ventas y reportes, implementando patrones de diseño y arquitectura que garantizan escalabilidad, mantenibilidad y eficiencia.",
        src:"/corralonapp.png",
        href:"https://github.com/Clarosabel2/corralon-app",
        demo:"",
        technologies:[net,cs, sqlserver]
    },
    {
        name:"Cinema Codo",
        description:"Cinema Codo es una aplicación web desarrollada en Java que permite a los usuarios explorar detalles de películas, incluyendo descripciones, reparto, director y género. Los usuarios pueden registrarse, iniciar sesión y comprar entradas. Integra APIs externas para obtener información sobre las películas y Maven para la gestión de dependencias",
        src:"/cinemacodo.png",
        href:"https://github.com/Clarosabel2/cinema-codo",
        demo:"https://kevg2218.github.io/Cinecodo/",
        technologies:[java,html,css,js]
    },
    {
        name:"Codificador",
        description:"Aplicación web interactiva que permite a los usuarios encriptar y desencriptar mensajes de manera segura utilizando tres técnicas: Cifrado de César, Cifrado de Vigenère y sustitución de vocales. Diseñada para criptógrafos de todos los niveles, incluye una interfaz con modos claro y oscuro para mejorar la experiencia del usuario.",
        src:"/codificador.png",
        href:"https://github.com/Clarosabel2/codificador",
        demo:"https://clarosabel2.github.io/codificador/",
        technologies:[html, css, js]
    }
]

