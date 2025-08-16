// تبديل الصفحات
function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// توليد كلمة مرور
function generatePassword() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let pass = "";
  for (let i = 0; i < 12; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("passwordResult").textContent = pass;
}

// فحص قوة كلمة المرور
function checkStrength() {
  const pwd = document.getElementById("passwordInput").value;
  let strength = "ضعيفة";
  if (pwd.length > 8 && /[A-Z]/.test(pwd) && /\d/.test(pwd) && /[\W]/.test(pwd)) {
    strength = "قوية 💪";
  } else if (pwd.length > 5) {
    strength = "متوسطة";
  }
  document.getElementById("strengthResult").textContent = "القوة: " + strength;
}

// الاختبار
function answerQuiz(btn, correct) {
  if (correct) {
    document.getElementById("quizResult").textContent = "إجابة صحيحة ✅";
    btn.style.background = "green";
  } else {
    document.getElementById("quizResult").textContent = "إجابة خاطئة ❌";
    btn.style.background = "red";
  }
}