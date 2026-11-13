//Script para los tickets
const ticketOptions = document.querySelectorAll('.ticket-option');

const quantityElement = document.getElementById('quantity');

const totalPriceElement = document.getElementById('total-price');

const descriptionElement = document.getElementById('ticket-description');

let selectedPrice = 450;

let quantity = 2;

let selectedTicket = 'vip';

const descriptions = {

    ringside: 'Front row + exclusive access',

    vip: 'Lounge + paddock tour',

    general: 'General admission'

};

function updateTotal() {

    const total = selectedPrice * quantity;

    totalPriceElement.textContent = '$' + total.toLocaleString('en-US');

    quantityElement.textContent = quantity;

}

ticketOptions.forEach(option => {

    option.addEventListener('click', () => {

        selectedPrice = Number(option.dataset.price);

        selectedTicket = option.dataset.ticket;

        ticketOptions.forEach(ticket => {

            ticket.classList.remove('border-[#E5383B]', 'bg-[#660708]');

            ticket.classList.add('border-white/10', 'bg-transparent');

            ticket.setAttribute('aria-pressed', 'false');

        });

        option.classList.remove('border-white/10', 'bg-transparent');

        option.classList.add('border-[#E5383B]', 'bg-[#660708]');

        option.setAttribute('aria-pressed', 'true');

        descriptionElement.textContent = descriptions[selectedTicket];

        updateTotal();

    });

});

document.getElementById('increase').addEventListener('click', () => {

    if (quantity < 10) {

        quantity++;

        updateTotal();

    }

});

document.getElementById('decrease').addEventListener('click', () => {

    if (quantity > 1) {

        quantity--;

        updateTotal();

    }

});

updateTotal();

document.getElementById('buy-button').addEventListener('click', () => {

    alert(

        'Ticket: ' + selectedTicket.toUpperCase() +

        '\nQuantity: ' + quantity +

        '\nTotal: ' + totalPriceElement.textContent

    );

});

//Script para el modal
const robots = {

    "white-eagle": {

        name: "White Eagle",

        id: "T800-WE01",

        weight: "Heavyweight",

        style: "Counter-striker",

        mass: "78 kg",

        torque: "450 Nm",

        velocity: "9.4 m/s",

        knockouts: "11",

        record: "14-1-0",

        dof: "31 DoF"

    },

    "red-falcon": {

        name: "Red Falcon",

        id: "T800-RF07",

        weight: "Middleweight",

        style: "Kick specialist",

        mass: "64 kg",

        torque: "380 Nm",

        velocity: "10.6 m/s",

        knockouts: "6",

        record: "9-0-0",

        dof: "31 DoF"

    },

    "steel-titan": {

        name: "Steel Titan",

        id: "T800-ST03",

        weight: "Super Heavyweight",

        style: "Pressure brawler",

        mass: "92 kg",

        torque: "520 Nm",

        velocity: "8.1 m/s",

        knockouts: "10",

        record: "12-2-0",

        dof: "31 DoF"

    }

};

const modal = document.getElementById("telemetry-modal");

document.querySelectorAll(".open-telemetry").forEach(button => {

    button.addEventListener("click", () => {

        const robot = robots[button.dataset.robot];

        document.getElementById("modal-name").textContent = robot.name;

        document.getElementById("modal-id").textContent = robot.id;

        document.getElementById("modal-weight").textContent = robot.weight;

        document.getElementById("modal-style").textContent = robot.style;

        document.getElementById("modal-mass").textContent = robot.mass;

        document.getElementById("modal-torque").textContent = robot.torque;

        document.getElementById("modal-velocity").textContent = robot.velocity;

        document.getElementById("modal-knockouts").textContent = robot.knockouts;

        document.getElementById("modal-record").textContent = robot.record;

        document.getElementById("modal-dof").textContent = robot.dof;

        modal.showModal();

    });

});

document.getElementById("close-modal").addEventListener("click", () => {

    modal.close();

});

document.getElementById("close-modal-bottom").addEventListener("click", () => {

    modal.close();

});

let codigoSecreto = "";

document.addEventListener("keydown", (event) => {
    codigoSecreto += event.key.toLowerCase();
    codigoSecreto = codigoSecreto.slice(-4);

    if (codigoSecreto === "apex") {
        alert("🤖 ERROR 404: HUMANOS NO ENCONTRADOS.\nTodos los robots han tomado el control de APEX.\nEmmanuel es el único sobreviviente");
        codigoSecreto = "";
    }
});

// Modo Claro
const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("light");
});

(() => {
    const button = document.getElementById("theme-toggle");

    button.addEventListener("click", (event) => {
        // Evita que otro listener de index.js cambie el tema dos veces.
        event.stopImmediatePropagation();

        const isLight = document.documentElement.classList.toggle("light");
        button.textContent = isLight ? "🌙" : "☀️";
        button.setAttribute("aria-label", isLight ? "Activar modo oscuro" : "Activar modo claro");
    }, true);
})();