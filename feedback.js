function submitForm(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const feedback = document.getElementById('feedback').value;
  
    if (name.trim() === '' || feedback.trim() === '') {
      alert('Please fill in both your name and feedback.');
      return;
    }
    
    // Display success message
    document.getElementById('feedbackForm').classList.add('hidden');
    document.getElementById('successMessage').classList.remove('hidden');
  }
  var feedback = document.getElementById("feed");
feedback.addEventListener("click",function(){
feedback.style.backgroundColor="black";
feedback.style.color="white";     
})