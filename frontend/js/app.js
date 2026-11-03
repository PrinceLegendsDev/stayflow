import { loadComponent, initNavigation } from "./navigation.js";
import { renderRooms } from "./renderRooms.js";
import { readRoom } from "./roomDetails.js";
import { submitForm, fadeSection } from "./form.js";

async function startApp() {

    await loadComponent (
    "#header",
    "components/nav.html"
)

   await loadComponent (
    "#footer",
    "components/footer.html"
)

renderRooms();
readRoom();
initNavigation()
submitForm();
fadeSection();

}

startApp()