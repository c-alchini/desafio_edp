const input = document.getElementById("text-input");
const submitBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindromeCheck(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

function submitBtnClicked() {
  const text = input.value;

  // Check if input is empty
  if (!text.trim()) {
    alert("Please input a value");
    return;
  }

  // Show result
  if (isPalindromeCheck(text)) {
    result.textContent = `${text} is a palindrome!`;
    result.className = "positive";
  } else {
    result.textContent = `${text} is not a palindrome.`;
    result.className = "negative";
  }
}

// Allow Enter key to submit
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    submitBtnClicked();
  }
});

submitBtn.addEventListener("click", submitBtnClicked);
