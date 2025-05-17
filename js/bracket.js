// Example tournament data — replace with your actual data
const tournamentData = {
  teams: [
    ["Team 1", "Team 8"],
    ["Team 4", "Team 5"],
    ["Team 3", "Team 6"],
    ["Team 2", "Team 7"]
  ],
  results: [
    [
      [1, 0],
      [0, 1],
      [0, 1],
      [1, 0]
    ],
    [
      [1, 0],
      [0, 1]
    ],
    [
      [1, 0]
    ]
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  const allTournaments = document.querySelectorAll('.tournament');
  const allContainers = document.querySelectorAll('.show_tournament');

  function initBracketWhenVisible(targetId, data) {
    const container = document.getElementById(targetId);
    const bracketDiv = container.querySelector('[id^="tournamentBracket"]');

    // Show the container
    container.classList.add('active');

    // Wait for CSS transition to finish before initializing bracket
    setTimeout(() => {
      if (bracketDiv && !bracketDiv.dataset.initialized) {
        $(bracketDiv).bracket({
          init: data,
          skipConsolationRound: true
        });
        bracketDiv.dataset.initialized = "true";
      }
    }, 350); // Match this timeout to your CSS transition duration
  }

  allTournaments.forEach(tournamentDiv => {
    tournamentDiv.addEventListener('click', () => {
      const targetId = tournamentDiv.getAttribute('data-target');

      // Hide all containers
      allContainers.forEach(container => {
        container.classList.remove('active');
      });

      // Show and init the selected bracket
      initBracketWhenVisible(targetId, tournamentData);
    });
  });

  // Optionally initialize the first tournament on page load
  if (allTournaments.length > 0) {
    allTournaments[0].click();
  }
});
