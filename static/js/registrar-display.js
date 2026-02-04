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

    function renderLinkedRegistrar(container, names) {
        
        container.innerHTML = '';

        for (let nameCount = 0; nameCount < names.length; nameCount += 3) {
            const row = document.createElement('div');
            row.className = 'row w-100';

            for (let colCount = 0; colCount < 3; colCount++) {
                const col = document.createElement('div');
                col.className = 'col-9 col-md-3 p-2';

                const link = document.createElement('a');
                const item = names[nameCount+colCount]
                if(item) {
                    link.href = item.href;
                    link.alt = item.alt;
                    link.target = "_blank";
                    link.textContent = item.title;
                    col.appendChild(link);
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
                'Secura',
                'BB-Online',
                'Global Domain Group',
                'Soluciones',
                'Nameweb',
                'Go Daddy Corporate Domains',
                'IP Twins',
                'INWX',
                'Tucows',
                'Ascio',
                'Enom',
                'InternetX',
                'Net-Chinese Co Ltd',
                'Fastly',
                'CPS-Datasysteme'
            ];
            renderRegistrars(container, registrarNames);
        }

        const linkedContainer = document.getElementById('linked-registrar-list');
        if(linkedContainer) {
            const linkedRegistrarNames = [
                {
                    "title": "101domain",
                    "alt": "101 Domain Registrar",
                    "href": "https://www.101domain.com/med"
                },
                {
                    "title": "EnCirca",
                    "alt": "Encirca Registrar",
                    "href": "https://www.encirca.com/med"
                },
                {
                    "title": "Lexsynergy",
                    "alt": "Lexsynergy",
                    "href": "https://www.lexsynergy.com/tld/med"
                },
                {
                    "title": "Variomedia",
                    "alt": "Variomedia",
                    "href": "https://www.variomedia.de/domains/tlds/med/"
                },
                {
                    "title": "Ledl.net",
                    "alt": "Ledl.net",
                    "href": "https://www.domaintechnik.at/med-domain.html"
                },
                {
                    "title": "Name.com",
                    "alt": "Name.com",
                    "href": "https://www.name.com/domains/med"
                },
                {
                    "title": "Porkbun",
                    "alt": "Porkbun",
                    "href": "https://porkbun.com/tld/med"
                },
                {
                    "title": "Gandi",
                    "alt": "Gandi",
                    "href": "https://www.gandi.net/en-US/domain/tld/med"
                },
                {
                    "title": "Dynadot",
                    "alt": "Dynadot",
                    "href": "https://www.dynadot.com/domain/med"
                }
            ];
            renderLinkedRegistrar(linkedContainer, linkedRegistrarNames);
        }
    });

})();
