document.addEventListener("DOMContentLoaded", function () {
  const allContent = document.querySelectorAll(".show_tournament");

  document.querySelectorAll(".tournament").forEach(function (tournamentDiv) {
    tournamentDiv.addEventListener("click", function () {
      const targetId = tournamentDiv.getAttribute("data-target");

      allContent.forEach(function (content) {
        if (content.id === targetId) {
          content.classList.add("active");
        } else {
          content.classList.remove("active");
        }
      });
    });
  });
}); 