(() => {
    'use strict'

    function renderRegistrars(container, names) {
        const sortedNames = names.slice().sort((a, b) => a.localeCompare(b));

        // Reference to the output container
        container.innerHTML = ''; // Clear any existing content

        // Loop through names in chunks of 3
        for (let nameCount = 0; nameCount < sortedNames.length; nameCount += 3) {
            const row = document.createElement('div');
            row.className = 'row w-100';

            for (let colCount = 0; colCount < 3; colCount++) {
                const col = document.createElement('div');
                col.className = 'col-9 col-md-3 p-2';
                const name = sortedNames[nameCount + colCount];
                if (name) {
                    col.textContent = name;
                }
                row.appendChild(col);
            }

            container.appendChild(row);
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById('registrar-list');
        if(container) {
            const registrarNames = [
                'COREhub',
                'CSC Global',
                'Com Laude',
                'Marcaria',
                'EuroDNS',
                'Markmonitor',
                'Safenames',
                'Variomedia',
                'Dynadot',
                'Secura',
                'BB-Online',
                'Global Domain Group',
                'Soluciones',
                'Nameweb',
                'Go Daddy Corporate Domains',
                'Gandi',
                'IP Twins',
                'INWX',
                'Tucows',
                'Ascio',
                'Enom',
                'Porkbun',
                'InternetX',
                'Name.com',
                '101domain',
                'EnCirca',
                'Lexsynergy'
            ];
            renderRegistrars(container, registrarNames);
        }
    });

})();
