document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-btn");
  const userNameInput = document.getElementById("user-input");
  const statsContainer = document.querySelector(".stats-container");
  const easyProgressCircle = document.querySelector(".easy-progress");
  const mediumProgressCircle = document.querySelector(".medium-progress");
  const hardProgressCircle = document.querySelector(".hard-progress");
  const easyLabel = document.getElementById("easy-label");
  const mediumLabel = document.getElementById("medium-label");
  const hardLabel = document.getElementById("hard-label");
  const cardStatsContainer = document.querySelector(".stats-card");

  function validateUsername(username) {
    if (username.trim() == "") {
      alert("Username Should not be Empty");
      return false;
    }
    const regex = /^(?!.*[_-]{2})(?![_-])[a-zA-Z0-9_-]{3,16}(?<![_-])$/;
    const isMatching = regex.test(username);

    if (!isMatching) {
      alert("Invalid Username");
    }

    return isMatching;
  }

  async function fetchUsername(username) {
    const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
    try {
      searchButton.textContent = "Searching...";
      searchButton.disabled = true;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Unable to Fetch the Username");
      }
      const parseddata = await response.json();
      console.log("Logging data", parseddata);

      displayUserData(parseddata);
    } catch {
      statsContainer.innerHTML = `<p>Data Not Found</p>`;
    } finally {
      searchButton.textContent = "Search";
      searchButton.disabled = false;
    }
  }

  function updateProgress(solved, total, label, circle) {
    const progressDegree = (solved / total) * 100;

    const cir = circle.style.setProperty(
      "--progress-degree",
      `${progressDegree}%`
    );

    label.textContent = `${solved}/${total}`;
  }

  function displayUserData(parseddata) {
    const totalQues = parseddata.totalQuestions;
    const totalEasyQues = parseddata.totalEasy;
    const totalMediumQues = parseddata.totalMedium;
    const totalHardQues = parseddata.totalHard;

    const solvedTotalQues = parseddata.totalSolved;
    const solvedEasyQues = parseddata.easySolved;
    const solvedMediumQues = parseddata.mediumSolved;
    const solvedHardQues = parseddata.hardSolved;

    updateProgress(
      solvedEasyQues,
      totalEasyQues,
      easyLabel,
      easyProgressCircle
    );
    updateProgress(
      solvedMediumQues,
      totalMediumQues,
      mediumLabel,
      mediumProgressCircle
    );
    updateProgress(
      solvedHardQues,
      totalHardQues,
      hardLabel,
      hardProgressCircle
    );
  }

  searchButton.addEventListener("click", function () {
    const username = userNameInput.value;
    console.log("Logging Username :", username);

    if (validateUsername(username)) {
      fetchUsername(username);
    }
  });
});
