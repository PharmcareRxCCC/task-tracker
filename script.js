const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyQWvklI7bLyaq9482fqFtAsjs09MKd3ka-jCKp3qtMCcnataEWtGXOTAWrJ-No12gs/exec";

async function saveTask() {

  const taskDescription =
    document.getElementById("taskDescription").value;

  const createdBy =
    document.getElementById("createdBy").value;

  const response = await fetch(SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify({
      taskDescription,
      createdBy
    })
  });

  const result = await response.json();

  document.getElementById("result").innerHTML =
    "Saved: " + result.taskId;
}
