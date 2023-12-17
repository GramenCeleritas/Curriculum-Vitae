window.onload = function () {
  const engLanguage = document.getElementById("Eng");
  const ukrLanguage = document.getElementById("Ukr");

  let buttonForChangeLanguage = document.getElementById(
    "buttonLanguageChangerEng"
  );
  buttonForChangeLanguage.addEventListener("click", () => {
    changeLanguageToUkr();

    console.log("you have clicked the mouse on EngButton");
  });

  function changeLanguageToUkr() {
    engLanguage.style.display = "none";
    ukrLanguage.style.display = "flex";
    imageOfFaceUkr.classList.remove("scaled");
    imageOfFaceUkr.classList.remove("unscaled");
    imageOfFace.classList.remove("unscaled");
    imageOfFace.classList.remove("scaled");
    debugger;
    myProjectsFetchFromGit();
  }

  const buttonForChangeLanguageToEng = document.getElementById(
    "buttonLanguageChangerUkr"
  );
  buttonForChangeLanguageToEng.addEventListener("click", () => {
    changeLanguageToEng();
    console.log("you have clicked the mouse on UkrButton");
  });

  function changeLanguageToEng() {
    engLanguage.style.display = "flex";
    ukrLanguage.style.display = "none";
    console.log((ukrLanguage.style.display == "none") + " check is style none");
    imageOfFaceUkr.classList.remove("scaled");
    imageOfFaceUkr.classList.remove("unscaled");
    imageOfFace.classList.remove("unscaled");
    imageOfFace.classList.remove("scaled");
  }

  const elementsByClass = document.getElementsByClassName("photo");

  console.log(elementsByClass);

  const imageOfFace = document.getElementsByClassName("photo")[0];

  console.log(imageOfFace);

  imageOfFace.addEventListener("click", () => {
    if (imageOfFace.classList.contains("scaled")) {
      imageOfFace.classList.remove("scaled");
      imageOfFace.classList.add("unscaled");
    } else {
      imageOfFace.classList.remove("unscaled");
      imageOfFace.classList.add("scaled");
    }
  });

  imageOfFace.addEventListener("click", () => {
    console.log("you have clicked on image");
  });

  const imageOfFaceUkr = document.getElementsByClassName("photo")[1];

  console.log(imageOfFaceUkr);

  imageOfFaceUkr.addEventListener("click", () => {
    if (imageOfFaceUkr.classList.contains("scaled")) {
      imageOfFaceUkr.classList.remove("scaled");
      imageOfFaceUkr.classList.add("unscaled");
    } else {
      imageOfFaceUkr.classList.remove("unscaled");
      imageOfFaceUkr.classList.add("scaled");
    }
  });

  // reset photo properties

  console.log(ukrLanguage);
  imageOfFaceUkr.addEventListener("click", () => {
    console.log("you have clicked on image");
  });

  console.log("page are fully loaded");
  // Navigation through  key press

  const body = document.querySelector("body");
  const letterForNavigationSumarry = document.getElementsByClassName(
    "headerLetterForNavigationSumarry"
  )[0];
  const letterForNavigationSkills = document.getElementsByClassName(
    "headerLetterForNavigationSkills"
  )[0];
  const headerLetterForNavigationWorkExpirience =
    document.getElementsByClassName(
      "headerLetterForNavigationWorkExpirience"
    )[0];
  const headerLetterForNavigationEducation = document.getElementsByClassName(
    "headerLetterForNavigationEducation"
  )[0];
  const headerLetterForNavigationMotivationSheet =
    document.getElementsByClassName(
      "headerLetterForNavigationMotivationSheet"
    )[0];

  let currentSection = 0;

  body.addEventListener("keyup", (event) => {
    if (event.keyCode === 83) {
      currentSection++;

      const sections = [letterForNavigationSumarry, letterForNavigationSkills];

      if (currentSection >= sections.length) {
        currentSection = 0;
      }

      sections[currentSection].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      console.log("Scrolled to section" + sections[currentSection]);

      // if (clickCount % 2 === 1) {
      //     letterForNavigationSumarry.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      //     console.log('you have pushed the button');
      // }

      // if (clickCount % 2 === 0) {
      //     letterForNavigationSkills.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      //     console.log('you suppose to be in skills section now');
      // }
    }

    if (event.keyCode === 87) {
      headerLetterForNavigationWorkExpirience.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }

    if (event.keyCode === 69) {
      headerLetterForNavigationEducation.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }

    if (event.keyCode === 77) {
      headerLetterForNavigationMotivationSheet.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  });

  const urlForFetching = "https://api.github.com/users/GramenCeleritas/repos";

  const repos = document.getElementsByClassName("fetchedDataFromGithub")[0];

  const reposUkr = document.getElementsByClassName(
    "fetchedDataFromGithubUkr"
  )[0];

  let classCounter = 0;

  async function myProjectsFetchFromGit() {
    try {
      // debugger;
      myRepoGitList = await fetch(urlForFetching);

      if (!myRepoGitList.ok) {
        throw new Error(
          `Failed to fetch repositories. Status: ${response.status}`
        );
      }

      myRepoGitListRaw = await myRepoGitList.json();

      console.log(myRepoGitListRaw + ` this is raw repo list`);

      myRepoGitListRaw.forEach((repo) => {
        classCounter++;

        const wrapperForContent = document.createElement("div");

        const { full_name, html_url, description } = repo;

        const repoElement = document.createElement("div");
        repoElement.classList.add("repository");

        const nameElement = document.createElement("a");
        nameElement.href = html_url;
        nameElement.textContent = full_name;

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent =
          description || "No description provided.";

        repos.appendChild(repoElement);

        repoElement.appendChild(wrapperForContent);
        wrapperForContent.appendChild(nameElement);
        wrapperForContent.appendChild(descriptionElement);

        nameElement.classList.add(`name-number-${classCounter.toString()}`);

        repoElement.style.border = "solid";
        repoElement.style.margin = "1rem 0 0 0";
        wrapperForContent.style.margin = "1rem 0 0 1rem";
      });
    } catch (error) {
      console.log("Error fetching repositories");
    }
  }

  //   setInterval(() => {
  //     for (let i = 0; i < 10; i++) {
  //       const repoElement = document.createElement("div");
  //       repoElement.setAttribute("id", i);
  //       repos.appendChild(repoElement);
  //       repoElement.textContent = Math.floor(Math.random() * 99);
  //     }
  //   }, 1000);

  //   setInterval(() => {
  //     while (repos.firstChild) {
  //       repos.removeChild(repos.firstChild);
  //     }
  //   }, 6000);

  //   setInterval(() => {
  //     while (document.firstChild) {
  //       document.removeChild(document.firstChild);
  //     }
  //   }, 6000);

  myProjectsFetchFromGit();
};
