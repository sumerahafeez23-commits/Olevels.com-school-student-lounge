// Chat function
function sendMessage() {
  let msg = document.getElementById("message").value;
  let chatBox = document.getElementById("chatBox");

  if (msg === "") return;

  chatBox.innerHTML += "<p>🧑 You: " + msg + "</p>";

  document.getElementById("message").value = "";
}

// Exam prediction
function predict() {
  let level = document.getElementById("level").value;
  let result = document.getElementById("result");

  if (level >= 8) {
    result.innerHTML = "🔥 High chance of 80%+";
  } else if (level >= 5) {
    result.innerHTML = "📘 Medium chance of 60–80%";
  } else {
    result.innerHTML = "⚠️ Need more preparation";
  }
}
