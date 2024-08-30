const skills = [
    "Python", "HTML5", "CSS3",
    "Git", "SQL", "MongoDB", "DynamoDB", "MySQL", "Docker", "AWS",
    "Pytorch", "Tensorflow", "Keras", "OpenCV", "Pandas", "Numpy",
     "Scikit-learn", "SciPy", "Matplotlib", "Seaborn", "Plotly", 
     "Bokeh"]

function createSkillsList(skills) {
    return `
        <div class="col-md-12">
            <ul class="skills-list">
                ${skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        </div>
    `;
}

function populateSkills() {
    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = createSkillsList(skills);
}

document.addEventListener('DOMContentLoaded', populateSkills);
