// List of lesson JS files in this folder
const lessons = [
    "basic.js",
    "variables.js"
];

const lessonSelect = document.getElementById('lessonSelect');
const output = document.getElementById('output');

// Populate dropdown
lessons.forEach(file => {
    const option = document.createElement('option');
    option.value = file;
    option.textContent = file.replace('.js', '');
    lessonSelect.appendChild(option);
});

// Load and execute selected file
lessonSelect.addEventListener('change', async () => {
    output.textContent = '';
    const selectedFile = lessonSelect.value;

    if (selectedFile) {
        try {
            // Load file content
            const code = await fetch(selectedFile).then(res => res.text());
            
            // Show code
            output.textContent = code;

            // Run code
            eval(code);
        } catch (err) {
            console.error("Error loading lesson:", err);
            output.textContent = "Error loading lesson.";
        }
    }
});
