document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = 'https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League';

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('futbol-container');
            container.innerHTML = ""; 

            data.teams.forEach(team => {
                container.innerHTML += `
                    <div class="col-md-3 mb-4">
                        <div class="card h-100 text-center shadow-sm">
                         https://   <img src="${team.strTeamBadge}" class="card-img-top p-3" style="max-height: 150px; object-fit: contain;" alt="${team.strTeam}">
                            <div class="card-body">
                                <h6 class="card-title">${team.strTeam}</h6>
                            </div>
                        </div>
                    </div>
                `;
            });
        })
        .catch(error => console.error('Hata:', error));
});