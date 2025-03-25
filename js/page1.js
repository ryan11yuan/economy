function toggleTaskbar() {
    let taskbar = document.getElementById("taskbar");
    let content = document.getElementById("subtopic");
    taskbar.classList.toggle("hidden");
    content.classList.toggle("full-width");
}
function closeTaskbar() {
    document.getElementById('taskbar').classList.add('hidden');
    subtopic.classList.remove('full-width');
}

function toggleText() {
    var textDiv = document.querySelector(".hidden-text");
    var button = document.querySelector("showhide-btn");
    if (textDiv.style.display === "none" || textDiv.style.display === "") {
        textDiv.style.display = "block";
        button.textContent = "Hide Additional Information";
    } else {
        textDiv.style.display = "none";
        button.textContent = "Show Additional Information";
    }
}

function toggleText1() {
    var textDiv = document.querySelector(".hidden-text1");
    var button = document.querySelector("showhide-btn");
    if (textDiv.style.display === "none" || textDiv.style.display === "") {
        textDiv.style.display = "block";
        button.textContent = "Hide Additional Information";
    } else {
        textDiv.style.display = "none";
        button.textContent = "Show Additional Information";
    }
}

function toggleText2() {
    var textDiv = document.querySelector(".hidden-text2");
    var button = document.querySelector("showhide-btn");
    if (textDiv.style.display === "none" || textDiv.style.display === "") {
        textDiv.style.display = "block";
        button.textContent = "Hide Additional Information";
    } else {
        textDiv.style.display = "none";
        button.textContent = "Show Additional Information";
    }
}