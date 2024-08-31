const skillCategories = {
    "Programming Languages": ["Python", "HTML5", "CSS3", "SQL"],
    "Databases": ["MongoDB (NoSQL Database)", "DynamoDB (NoSQL Database)", "MySQL (Relational Database)"],
    "Machine Learning & AI": ["Pytorch (Deep Learning Framework)", "Tensorflow (Deep Learning Framework)", "Keras (Neural Network Library)", "Scikit-learn (Machine Learning Library)"],
    "Data Science & Analytics": ["Pandas (Data Manipulation)", "Numpy (Numerical Computation)", "SciPy (Scientific Computing)", "Matplotlib (Data Visualization)", "Seaborn (Statistical Data Visualization)", "Plotly (Interactive Data Visualization)", "Bokeh (Interactive Data Visualization)"],
    "Web Development": ["HTML5", "CSS3"],
    "Version Control & DevOps": ["Git (Version Control)", "Docker (Containerization)", "AWS (Cloud Services)"]
};

function createSkillsAccordion(categories) {
    return Object.entries(categories).map(([category, skills]) => `
        <li>
            <div class="link">
                <p style="margin-bottom: 0px">${category}</p>
                <i class="fa fa-chevron-down"></i>
            </div>
            <ul class="submenu">
                ${skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        </li>
    `).join('');
}

function populateSkills() {
    const skillsAccordion = document.getElementById('skills-accordion');
    skillsAccordion.innerHTML = createSkillsAccordion(skillCategories);

    // Add click event listeners to toggle skill lists
    const toggles = skillsAccordion.querySelectorAll('.link');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            this.classList.toggle('open');
            const submenu = this.nextElementSibling;
            if (submenu.style.display === "block") {
                submenu.style.display = "none";
            } else {
                submenu.style.display = "block";
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', populateSkills);
