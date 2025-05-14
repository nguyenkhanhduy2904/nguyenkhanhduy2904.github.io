document.addEventListener("DOMContentLoaded", function() {
  // Select all tournament divs
  document.querySelectorAll(".tournament").forEach(function(tournamentDiv) {
    
    // Add click event listener to each tournament div
    tournamentDiv.addEventListener("click", function() {
      // Get the target content ID from the clicked tournament div
      const targetId = tournamentDiv.getAttribute("data-target");
      
      // Find the element with the corresponding ID (target)
      const targetContent = document.getElementById(targetId);
      
      // Check if the target content exists and toggle its display
      if (targetContent) {
        // First, hide all content sections
        document.querySelectorAll(".show_tournament").forEach(function(content) {
          content.style.display = "none";
        });
        

        // If currently hidden, display the selected target content as block or flex (your preference)
        if (targetContent.style.display === "none" || targetContent.style.display === "") {
          targetContent.style.display = "block";  // Change to "flex" if you prefer that
        }
        
      }
    });
  });
});
