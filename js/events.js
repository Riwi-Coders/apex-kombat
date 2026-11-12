const eventCards = document.querySelectorAll(".event-card");
const selectedDate = document.getElementById("selected-date");
const selectedTitle = document.getElementById("selected-title");

eventCards.forEach((card) => {
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");

    const selectEvent = () => {
        const eventTitle = card.querySelector("h3").textContent.trim();
        const eventDate = card.querySelector("p").textContent.trim();

        selectedTitle.textContent = eventTitle;
        selectedDate.textContent = eventDate;
                
        eventCards.forEach((event) => {
            event.classList.remove("border-apex-red", "bg-apex-carbon");
            event.classList.add("border-apex-carbon", "bg-apex-onyx");
            event.setAttribute("aria-pressed", "false");
        });


                
        card.classList.remove("border-apex-carbon", "bg-apex-onyx");
        card.classList.add("border-apex-red", "bg-apex-carbon");
        card.setAttribute("aria-pressed", "true");
    };

    card.addEventListener("click", selectEvent);

    card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            selectEvent();
        }
    });
});

const ringData = {
    ringside: {
        count: 480,
        description: "Rows A-C · steps from the cage",
        areaColor: "bg-apex-carbon",
        countId: "ringside-count"
    },
    vip: {
        count: 1200,
        description: "VIP seating area",
        areaColor: "bg-apex-mahogany",
        countId: "vip-count"
    },
    general: {
        count: 6320,
        description: "General admission seating",
        areaColor: "bg-apex-carbon",
        countId: "general-count"
    }
};

const seatDescription = document.getElementById("seat-description");
const seatAvailability = document.getElementById("seat-availability");

function selectRing(ring) {
    const selectedRing = ringData[ring];

    seatDescription.textContent = selectedRing.description;
    seatAvailability.textContent = `${selectedRing.count.toLocaleString("en-US")} Seats`;

    document.getElementById(selectedRing.countId).textContent =
        selectedRing.count.toLocaleString("en-US");

    Object.keys(ringData).forEach((ringName) => {
    const tab = document.getElementById(`${ringName}-tab`);
    const area = document.getElementById(`${ringName}-area`);

    tab.classList.remove("border-apex-red", "bg-apex-red", "text-white");
    tab.classList.add("border-apex-carbon", "text-apex-silver");
    tab.setAttribute("aria-pressed", "false");

    area.classList.remove(
        "bg-apex-red",
        "bg-apex-carbon",
        "bg-apex-mahogany"
    );

    area.classList.add(ringData[ringName].areaColor);
    area.setAttribute("aria-pressed", "false");
});

    const activeTab = document.getElementById(`${ring}-tab`);
    const activeArea = document.getElementById(`${ring}-area`);

    activeTab.classList.remove("border-apex-carbon", "text-apex-silver");
    activeTab.classList.add("border-apex-red", "bg-apex-red", "text-white");
    activeTab.setAttribute("aria-pressed", "true");

    activeArea.classList.remove(ringData[ring].areaColor);
    activeArea.classList.add("bg-apex-red");
    activeArea.setAttribute("aria-pressed", "true");
}

Object.keys(ringData).forEach((ring) => {
    document.getElementById(`${ring}-tab`).addEventListener("click", () => {
        selectRing(ring);
    });

    document.getElementById(`${ring}-area`).addEventListener("click", () => {
        selectRing(ring);
    });
});

selectRing("ringside");