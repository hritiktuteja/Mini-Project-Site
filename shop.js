function showDetails(productId) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modalTitle');
    const description = document.getElementById('modalDescription');
  
    // Customize details based on the productId
    switch (productId) {
      case 1:
        title.textContent = 'Vintage Classic';
        description.textContent = 'Discover the beauty of this classic transistor radio with wooden casing. Perfect for collectors.';
        break;
      case 2:
        title.textContent = 'Modern Portable';
        description.textContent = 'Experience the convenience of a compact and portable transistor radio for on-the-go listening. Ideal for travel and outdoor activities.';
        break;
     }
  
    modal.style.display = 'block';
  }
  
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  var feedback = document.getElementById("feed");
feedback.addEventListener("click",function(){
feedback.style.backgroundColor="black";
feedback.style.color="white";     
})