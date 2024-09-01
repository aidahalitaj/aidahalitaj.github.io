document.addEventListener('DOMContentLoaded', function() {
    const publicationsData = [
        {
            category: "2024",
            items: [
                { title: "Providing Citations to Support Fact-Checking: Contextualizing Detection of Sentences Needing Citation on Small Wikipedias", 
                    authors: "Aida Halitaj, Arkaitz Zubiaga", 
                    journal: "Natural Language Processing Journal",
                    year: "2024", link: "https://doi.org/10.1016/j.nlp.2024.100093" },
                // { title: "Article 2 Title", authors: "Author1, Author3", journal: "Journal Name", year: "2022", link: "https://doi.org/..." },
            ]
        },
        // {
        //     category: "Conference Papers",
        //     items: [
        //         { title: "Paper 1 Title", authors: "Author1, Author2", conference: "Conference Name", year: "2023", link: "https://doi.org/..." },
        //         { title: "Paper 2 Title", authors: "Author1, Author3", conference: "Conference Name", year: "2022", link: "https://doi.org/..." },
        //     ]
        // },
        // Add more categories as needed
    ];

    console.log('Publications data:', publicationsData);

    const accordionContainer = document.getElementById('publications-accordion');

    if (!accordionContainer) {
        console.error('Element with ID "publications-accordion" not found');
        return;
    }

    publicationsData.forEach(category => {
        console.log('Processing category:', category.category);
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="link">
                ${category.category}
                <i class="fa fa-chevron-down"></i>
            </div>
            <ul class="submenu">
                ${category.items.map(item => `
                    <li>
                        <a href="${item.link}" target="_blank">
                            <strong>${item.title}</strong><br>
                            ${item.authors}<br>
                            ${item.journal || item.conference}, ${item.year}
                        </a>
                    </li>
                `).join('')}
            </ul>
        `;
        accordionContainer.appendChild(li);
    });

    console.log('Accordion container after population:', accordionContainer.innerHTML);

    // Initialize accordion functionality
    $(function() {
        var Accordion = function(el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            var links = this.el.find('.link');
            links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
        }

        Accordion.prototype.dropdown = function(e) {
            var $el = e.data.el;
            var $this = $(this),
                $next = $this.next();

            $next.slideToggle();
            $this.parent().toggleClass('open');

            if (!e.data.multiple) {
                $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
            };
        }

        var accordion = new Accordion($('#publications-accordion'), false);
    });
});