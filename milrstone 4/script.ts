// document.getElementById('resumeForm')?.addEventListener('submit', function(event) { 
//     event.preventDefault();

//     // Retrieve input elements
//     const nameElement = document.getElementById('name') as HTMLInputElement;
//     const emailElement = document.getElementById('email') as HTMLInputElement;
//     const phoneElement = document.getElementById('phone') as HTMLInputElement;
//     const educationElement = document.getElementById('education') as HTMLTextAreaElement
//     const experienceElement = document.getElementById('experience') as HTMLTextAreaElement
//     const skillsElement = document.getElementById('skills') as HTMLTextAreaElement

//     if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
//         const name = nameElement.value;
//         const email = emailElement.value;
//         const phone = phoneElement.value;
//         const education = educationElement.value;
//         const experience = experienceElement.value;
//         const skills = skillsElement.value;
document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    // Retrieve input elements
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
    const hobbiesElement = document.getElementById('hobbies') as HTMLTextAreaElement;


    if (profilePictureInput && nameElement && hobbiesElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        const hobbies = hobbiesElement.value;

           // Picture handling
        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';






        // Create resume output
        const resumeOutput = `
            <h2>Resume</h2>
            ${profilePictureURL ? `<img src="${profilePictureURL}" 
            alt="Profile Picture" class="profilePicture" style="width: 150px; height: 150px; border-radius: 50%;" />` : ''}
            <p><strong>Name:</strong><span id="edit-name" class="editable"> ${name}</span></p>
            <p><strong>Email:</strong><span id="edit-email" class="editable"> ${email}</span></p>
            <p><strong>Phone:</strong><span id="edit-phone" class="editable"> ${phone}</span></p>

            <h3>Education</h3>
            <p id="edit-education" class="editable">${education}</p>

            <h3>Experience</h3>
            <p id="edit-experience" class="editable">${experience}</p>

            <h3>Skills</h3>
            <p id="edit-skills" class="editable">${skills}</p>

            <h3>Hobbies</h3>
            <p id="edit-hobbies" class="editable">${hobbies}</p>
        `;

        // Output the resume content to the designated element
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    } else {
        console.error('One or more elements are missing');
    }
});

function makeEditable() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click', function() {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            // Replace content
            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = currentValue;
                input.classList.add('editing', 'input');

                input.addEventListener('blur', function() {
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline';
                    input.remove();
                });

                currentElement.style.display = 'none';
                currentElement.parentNode?.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}
