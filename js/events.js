const eventos = [
    { titulo: 'APEX 08: White Eagle vs. Steel Titan', fecha: 'Sat, Dec 12 2026 · 8PM ET', sedes: ['T-Mobile Arena · Las Vegas, NV', "Monster’s Drive-In Cinema · Los Angeles, CA", 'Monster’s Dome · Las Vegas, NV'] },
    { titulo: 'APEX 09: Red Falcon vs. TBA', fecha: 'Sat, Jan 23 2027 · 9PM ET', sedes: ['T-Mobile Arena · Las Vegas, NV', "Monster’s Drive-In Cinema · Los Angeles, CA"] },
    { titulo: 'APEX 10: HEAVYWEIGHT GRAND PRIX', fecha: 'Sat, Mar 6 2027 · 8PM ET', sedes: ['T-Mobile Arena · Las Vegas, NV', 'Monster’s Dome · Las Vegas, NV'] },
    { titulo: 'APEX 11: Night of Titans', fecha: 'Sat, Apr 17 2027 · 8PM ET', sedes: ['T-Mobile Arena · Las Vegas, NV', "Monster’s Drive-In Cinema · Los Angeles, CA", 'Monster’s Dome · Las Vegas, NV'] }
];

const categorias = {
    ringside: { nombre: 'Ringside', descripcion: 'Rows A-C · cage-side view', mapa: 'Rows A-C · steps from the cage', asientos: 480, precio: 150 },
    vip: { nombre: 'VIP', descripcion: 'Premium seating · priority access', mapa: 'Premium seating · great view', asientos: 1200, precio: 100 },
    general: { nombre: 'General Admission', descripcion: 'Upper bowl · arena view', mapa: 'Upper bowl · full arena view', asientos: 6320, precio: 50 }
};

const estado = { evento: 0, sede: 0, categoria: 'ringside', cantidad: 1 };
const tarjetas = document.querySelectorAll('.event-card');
const opcionesSede = document.querySelector('#venue-options');
const opcionesTicket = document.querySelector('#ticket-options');
const formatoUSD = valor => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(valor);

function seleccionarEvento(indice) {
    estado.evento = indice;
    estado.sede = 0;
    estado.categoria = 'ringside';
    estado.cantidad = 1;
    renderizar();
}

function seleccionarSede(indice) {
    estado.sede = indice;
    renderizar();
}

function seleccionarCategoria(categoria) {
    estado.categoria = categoria;
    renderizar();
}

function renderizar() {
    const evento = eventos[estado.evento];
    document.querySelector('#selected-title').textContent = evento.titulo;
    document.querySelector('#selected-date').textContent = evento.fecha;

    tarjetas.forEach((tarjeta, indice) => {
        const activa = indice === estado.evento;
        tarjeta.classList.toggle('is-selected', activa);
        tarjeta.setAttribute('aria-pressed', String(activa));
    });

    opcionesSede.replaceChildren();
    evento.sedes.forEach((sede, indice) => {
        const boton = document.createElement('button');
        boton.type = 'button';
        boton.className = 'venue-choice flex w-full flex-wrap items-center justify-between gap-2 rounded-sm border border-apex-onyx bg-apex-onyx/40 p-3 text-left text-apex-smoke transition-colors hover:border-apex-red focus-visible:outline-2 focus-visible:outline-apex-red aria-pressed:border-apex-red aria-pressed:bg-apex-garnet aria-pressed:ring-1 aria-pressed:ring-apex-red light:border-apex-grey light:bg-apex-smoke light:text-apex-carbon light:hover:border-apex-red light:aria-pressed:border-apex-red light:aria-pressed:bg-red-100';
        boton.classList.toggle('is-selected', indice === estado.sede);
        boton.setAttribute('aria-pressed', String(indice === estado.sede));
        const texto = document.createElement('span');
        texto.className = 'font-body text-sm';
        texto.textContent = sede;
        boton.append(texto);
        if (sede.includes('Drive-In')) {
            const etiqueta = document.createElement('span');
            etiqueta.className = 'text-xs font-bold uppercase text-apex-red';
            etiqueta.textContent = 'Special Screening';
            boton.append(etiqueta);
        }
        boton.addEventListener('click', () => seleccionarSede(indice));
        opcionesSede.append(boton);
    });

    opcionesTicket.replaceChildren();
    Object.entries(categorias).forEach(([clave, categoria]) => {
        const tarjeta = document.createElement('button');
        tarjeta.type = 'button';
        tarjeta.className = 'tier-choice block w-full rounded-sm border border-apex-onyx bg-apex-onyx/30 p-3 text-left text-apex-smoke transition-colors hover:border-apex-red focus-visible:outline-2 focus-visible:outline-apex-red aria-pressed:border-apex-red aria-pressed:bg-apex-garnet aria-pressed:ring-1 aria-pressed:ring-apex-red light:border-apex-grey light:bg-apex-smoke light:text-apex-carbon light:hover:border-apex-red light:aria-pressed:border-apex-red light:aria-pressed:bg-red-100';
        tarjeta.classList.toggle('is-selected', clave === estado.categoria);
        tarjeta.setAttribute('aria-pressed', String(clave === estado.categoria));
        const linea = document.createElement('div');
        linea.className = 'flex flex-wrap items-center justify-between gap-2';
        const info = document.createElement('div');
        const titulo = document.createElement('h3');
        titulo.className = 'font-display font-bold uppercase';
        titulo.textContent = categoria.nombre;
        const descripcion = document.createElement('p');
        descripcion.className = 'font-body text-xs opacity-75';
        descripcion.textContent = categoria.descripcion;
        info.append(titulo, descripcion);
        const precio = document.createElement('p');
        precio.className = 'font-display text-3xl font-bold';
        precio.textContent = formatoUSD(categoria.precio);
        linea.append(info, precio);
        tarjeta.append(linea);
        tarjeta.addEventListener('click', () => seleccionarCategoria(clave));
        opcionesTicket.append(tarjeta);
    });

    ['ringside', 'vip', 'general'].forEach(clave => {
        const seleccionada = clave === estado.categoria;
        document.querySelector(`#${clave}-tab`).classList.toggle('is-selected', seleccionada);
        document.querySelector(`#${clave}-tab`).setAttribute('aria-pressed', String(seleccionada));
        document.querySelector(`#${clave}-area`).classList.toggle('is-selected', seleccionada);
        document.querySelector(`#${clave}-area`).setAttribute('aria-pressed', String(seleccionada));
    });

    const categoria = categorias[estado.categoria];
    document.querySelector('#seat-description').textContent = categoria.mapa;
    document.querySelector('#seat-availability').textContent = `${categoria.asientos.toLocaleString('en-US')} Seats`;
    document.querySelector('#ticket-quantity').textContent = estado.cantidad;
    const total = categoria.precio * estado.cantidad;
    document.querySelector('#ticket-total').textContent = formatoUSD(total);
    document.dispatchEvent(new CustomEvent('ticket:change', { detail: { totalUSD: total, evento: evento.titulo, sede: evento.sedes[estado.sede], categoria: categoria.nombre, cantidad: estado.cantidad } }));
}

tarjetas.forEach((tarjeta, indice) => {
    tarjeta.setAttribute('role', 'button');
    tarjeta.setAttribute('tabindex', '0');
    tarjeta.addEventListener('click', () => seleccionarEvento(indice));
    tarjeta.addEventListener('keydown', evento => {
        if (evento.key === 'Enter' || evento.key === ' ') {
            evento.preventDefault();
            seleccionarEvento(indice);
        }
    });
});

['ringside', 'vip', 'general'].forEach(clave => {
    document.querySelector(`#${clave}-tab`).addEventListener('click', () => seleccionarCategoria(clave));
    document.querySelector(`#${clave}-area`).addEventListener('click', () => seleccionarCategoria(clave));
});

document.querySelector('#decrease-quantity').addEventListener('click', () => {
    estado.cantidad = Math.max(1, estado.cantidad - 1);
    renderizar();
});
document.querySelector('#increase-quantity').addEventListener('click', () => {
    estado.cantidad = Math.min(10, estado.cantidad + 1);
    renderizar();
});

const temaGuardado = localStorage.getItem('apex-theme');
if (temaGuardado === 'light') document.documentElement.classList.add('light');
const botonTema = document.querySelector('#theme-toggle');
function actualizarBotonTema() {
    const claro = document.documentElement.classList.contains('light');
    botonTema.textContent = claro ? '☾ Dark' : '☀ Light';
    botonTema.setAttribute('aria-pressed', String(claro));
}
botonTema.addEventListener('click', () => {
    const claro = document.documentElement.classList.toggle('light');
    localStorage.setItem('apex-theme', claro ? 'light' : 'dark');
    actualizarBotonTema();
});
actualizarBotonTema();
renderizar();
