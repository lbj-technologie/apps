// 1. aller chercher apps.json
async function loadApps() {
    const answer = await fetch("/apps/apps.json");
    const data = await answer.json();
    console.log(data)
}
// 2. le transformer en liste utilisable
// 3. retrouver le conteneur dans la page
// 4. pour chaque app : créer la carte
// 5. l'accrocher

print("loadApps ()")