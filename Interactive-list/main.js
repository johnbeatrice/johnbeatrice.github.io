/* --------Makes new job box ------------------*/

function newJob() {
  function pickColor() {
    let arr = [
      "#DE5F43",
      "#8A4A7C",
      "#EE7CA5",
      "#F2E1CC",
      "#8FB567",
      "#333D6F",
    ];

    let num = Math.floor(Math.random() * arr.length);

    return arr[num];
  }

  if (
    document.getElementById("company").value != false &&
    document.getElementById("position").value != false
  ) {
    const jobsComponentContainer = document.querySelector(".jobs-list");

    let jobComponent = document.createElement("li");
    let jobComponentBtn = document.createElement("button");
    let jobComponenth2 = document.createElement("h2");
    let jobComponentp = document.createElement("p");

    jobComponentBtn.innerHTML = "&#10006;";

    /*jobComponentBtn.appendChild(jobComponentIcon); */

    jobComponent.appendChild(jobComponentBtn);
    jobComponent.appendChild(jobComponenth2);
    jobComponent.appendChild(jobComponentp);

    jobComponentBtn.setAttribute("id", "trash-icon");
    jobComponentBtn.setAttribute("type", "button");
    jobComponentBtn.setAttribute(
      "onclick",
      "deleteJob(); maybeRemoveJob(event)"
    );
    jobComponenth2.setAttribute("class", "jobs-list__item__h2");
    jobComponentp.setAttribute("class", "jobs-list__item__p");
    jobComponent.setAttribute("class", "jobs-list__item");

    jobComponent.style.backgroundColor = pickColor();

    jobsComponentContainer.appendChild(jobComponent);

    jobComponenth2.innerHTML = document.getElementById("company").value;
    jobComponentp.innerHTML = document.getElementById("position").value;
  }
}

document.getElementById("submitBtn").addEventListener("click", newJob);

/*-----------------------Above makes new job box-----------------*/

/*---------------------------------------------------------------*/

/*-----------------------makes popup form appear------------------*/

function popForm() {
  document.getElementById("form").style.display = "block";
  document.getElementById("popupBackground").style.display = "block";
}

document.getElementById("add-job").addEventListener("click", popForm);

/*-----------------------above makes popup form appear------------*/

/*---------------------------------------------------------------*/

/*-----------------------submit popup form------------------*/

function popFormSubmit() {
  if (
    document.getElementById("company").value != false &&
    document.getElementById("position").value != false
  ) {
    document.getElementById("form").style.display = "none";
    document.getElementById("popupBackground").style.display = "none";
    document.getElementById("company").value = "";
    document.getElementById("position").value = "";
    document.getElementById("numJobs").innerHTML++;
  }
}

document.getElementById("submitBtn").addEventListener("click", popFormSubmit);

/*-----------------------above submits popup form------------*/

/*---------------------------------------------------------------*/

/*-----------------------makes popup form disappear------------------*/

function popFormExit() {
  document.getElementById("form").style.display = "none";
  document.getElementById("popupBackground").style.display = "none";
}

document.getElementById("popupExit").addEventListener("click", popFormExit);

/*-----------------------above makes popup form disappear------------*/

/*----------------------------------------------------------------*/

/*---------------------------------------------------------------*/

/*-----------------------makes delete job appear------------------*/

function deleteJob() {
  document.getElementById("delete-job").style.display = "block";
  document.getElementById("popupBackground").style.display = "block";
}

document.getElementById("trash-icon").addEventListener("click", deleteJob);

/*-----------------------above makes delete job appear------------*/

/*---------------------------------------------------------------*/

/* --------removes job box ------------------*/

function removeJob() {
  document.getElementById("delete-job").style.display = "none";
  document.getElementById("popupBackground").style.display = "none";
}

document.getElementById("delete").addEventListener("click", removeJob);
/*-----------------------Above removes job box-----------------*/

/*---------------------------------------------------------------*/

/* --------keeps job box ------------------*/

function nvrMind() {
  document.getElementById("delete-job").style.display = "none";
  document.getElementById("popupBackground").style.display = "none";
  document
    .querySelector(".maybeRemove")
    .removeAttribute("class", "maybeRemove");
}

document.getElementById("cancel").addEventListener("click", nvrMind);
/*-----------------------Above keeps job box-----------------*/

/*---------------------------------------------------------------*/

/*---------------------------------------------------------------*/

/* --------adds class to remove job box ------------------*/

function maybeRemoveJob(event) {
  event.target.setAttribute("class", "maybeRemove");
}

//document.getElementById("trash-icon").addEventListener("click", maybeRemoveJob);

/* --------adds class to remove job box ------------------*/

/*---------------------------------------------------------------*/

/* --------adds class to remove job box ------------------*/

function defRemoveJob() {
  let parent = document.querySelector(".maybeRemove").parentNode;
  parent.parentNode.removeChild(parent);
  document.getElementById("numJobs").innerHTML--;
}

document.getElementById("delete").addEventListener("click", defRemoveJob);

/* --------adds class to remove job box ------------------*/

/*---------------------------------------------------------------*/
