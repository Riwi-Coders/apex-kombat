const robots = {
    "white-eagle": { name: "WHITE EAGLE", code: "T800-WE01 · HEAVYWEIGHT", weight: "78 kg", torque: "450 Nm", type: "Planetary BLDC + harmonic drive", record: "11 KO · 14-1-0", velocity: "9.4 m/s", DoF: "31 DoF", img: "./img/white-eagle.jpeg"},
    "steel-titan": { name: "STEEL TITAN", code: "T800-ST03 · Super Heavyweight", weight: "92 kg", torque: "520 Nm", type: "Hydraulic linear (hip/knee)", record: "10 KO · 12-2-0", velocity: "8.1 m/s", DoF: "29 DoF", img: "./img/fighter-titan.jpeg"},
    "red-falcon":  { name: "RED FALCON",  code: "T800-RF07 · Middleweight", weight: "64 kg", torque: "380 Nm", type: "Quasi-direct drive BLDC", record: "6 KO · 9-0-0", velocity: "10.6 m/s", DoF: "33 DoF", img: "./img/falcon-fighter.jpeg"},
};

const tabs = document.querySelectorAll(".tab");

tabs.forEach(function (boton) {
    boton.addEventListener("click", function () {
        const datos = robots[boton.dataset.robot];

        document.getElementById("robot-name").textContent = datos.name;
        document.getElementById("robot-code").textContent = datos.code;
        document.getElementById("robot-code").classList.add("pt-1");
        document.getElementById("stat-weight").textContent = datos.weight;
        document.getElementById("stat-torque").textContent = datos.torque;
        document.getElementById("stat-type").textContent = datos.type;
        document.getElementById("stat-record").textContent = datos.record;
        document.getElementById("stat-velocity").textContent = datos.velocity;
        document.getElementById("stat-DoF").textContent = datos.DoF;
        document.getElementById("robot-img").src = datos.img;

        tabs.forEach(function (t) {
            t.classList.remove("bg-apex-red", "border-apex-garnet", "text-apex-silver");
            t.classList.add("border-apex-silver", "text-apex-silver", "hover:text-white", "transition", "duration-300", "ease-in-out");
        });

        boton.classList.remove("border-apex-silver", "text-apex-silver", "hover:text-white", "transition", "duration-300", "ease-in-out");
        boton.classList.add("bg-apex-red", "border-apex-garnet", "text-white");
    });
});

const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    const isLight = document.documentElement.classList.toggle('light');
    toggle.textContent = isLight ? '🌙' : '☀️';
    toggle.setAttribute('aria-label', isLight ? 'Activar modo oscuro' : 'Activar modo claro');
});