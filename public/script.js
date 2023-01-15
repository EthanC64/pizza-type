console.log("********************************");

document.querySelector(".submit").addEventListener("click", function () {
  // save inputs
  var name = document.querySelector("#name").value.trim();
  var description = document.querySelector("#description").value;
  // send data to my own api
  fetch(`/todo/${name}/${description}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);

      let template = "";
      for (let i = 0; i < data.length; i++) {
        template += `
            <div class="">
                <span>name: ${data[i].name}</span>
                <span>description: ${data[i].description}</span>
            </div>
        `;
      }

      document.querySelector("#todo").innerHTML = template;
    });
});
