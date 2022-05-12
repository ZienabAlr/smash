let smashButton = document.querySelector("#smashed");
smashButton.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("smashing it");

  //postId?
  let smashed_post = e.target.dataset.postid;
  console.log(smashed_post);
  let smashed_user = e.target.dataset.userid;
  console.log(smashed_user);

  //post naar database AJAX
  let formData = new FormData();
  formData.append("postid", smashed_post);
  formData.append("userid", smashed_user);

  fetch("ajax/smash_project.php", {
    method: "POST",
    body: formData,
  })
    .then(response => response.json())
    .then(result => {

      if(result.smash === true){
        smashButton.innerHtml = "Smashed 💥";
        smashButton.classList.add("active");
      }else{
        smashButton.innerHtml = "Smash";
        smashButton.classList.remove("active");
      }
      console.log("Success:", result);

    
  
    })
    .catch(error => {
      console.error("Error:", error);
    });
    e.preventDefault();
});
