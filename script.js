document.getElementById("phone_number").addEventListener("input", function () {
  if (this.value.length > 10) {
    this.value = this.value.slice(0, 10); // Truncate the input value to 10 characters
  }
});
