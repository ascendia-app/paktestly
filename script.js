const testClusters = [
    {
        title: "Engineering and Technology Group",
        category: "Pre-Engineering",
        // Map each test to its specific HTML file
        tests: [
            { name: "NET", link: "net.html" },
            { name: "ECAT", link: "ecat.html" },
    
        ]
    },
    {
        title: "Medical Group",
        category: "Pre-Medical",
        tests: [
            { name: "MDCAT", link: "mdcat.html" }
        ]
    },
];

function initPakTest() {
    const grid = document.getElementById('resource-grid');
    if (!grid) return;
    
    grid.innerHTML = ''; 

    testClusters.forEach(cluster => {
        const card = document.createElement('div');
        card.className = 'card';

        // Updated mapping to use test.link from the objects above
        const testListHTML = cluster.tests
            .map(test => `
                <li>
                    <a href="${test.link}">${test.name}</a>
                </li>`)
            .join('');

        card.innerHTML = `
            <span class="card-tag">${cluster.category}</span>
            <h3 class="card-title" style="border-bottom: 1px solid var(--border-dull); padding-bottom: 10px; margin-bottom: 15px;">
                ${cluster.title}
            </h3>
            <ul>
                ${testListHTML}
            </ul>
        `;
        
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', initPakTest);