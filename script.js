<script>

const SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbwS2Vaw_yzUf0vTwu0G3E5Gd-V3TWAYUJEy0e1jlTnMf_zNdUyYb5EY1P5Exyvi09Ua/exec";

async function saveTask(){

  const taskDescription =
    document.getElementById("taskDescription").value;

  const createdBy =
    document.getElementById("createdBy").value;

  try{

    const response = await fetch(SCRIPT_URL,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        taskDescription,
        createdBy
      })
    });

    const result = await response.json();

    document.getElementById("result").innerHTML =
      "Saved Task: " + result.taskId;

  }catch(error){

    document.getElementById("result").innerHTML =
      "Error saving task";

    console.error(error);
  }
}

</script>
