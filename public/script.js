console.log("********************************");

document.querySelector(".submit").addEventListener("click", function () {
  // save inputs
  var time = document.querySelector("#time").value.trim();
  var topping = document.querySelector("#topping").value;
  // send data to my own api
  fetch(`/pizza/${time}/${topping}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);


      let template = "";
      for (let i = 0; i < data.length; i++) {
        template += `
            <div class="">
                <span>time: ${data[i].time}</span>
                <span>topping: ${data[i].topping}</span>
            </div>
        `;
      }

      document.querySelector("#pizza").innerHTML = template;
    });
});
