let today = (function () {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1; //January is 0!
  let yyyy = today.getFullYear();
  if(dd<10){
      dd='0'+dd;
  }
  if(mm<10){
      mm='0'+mm;
  }
  return dd+mm+yyyy;
})();

$(() => {
  // materialize inits
  $('.collapsible').collapsible();
  $('select').material_select();

  let chartCanvas = document.getElementById('todayChart').getContext('2d');
  let chart;


  // get the graph data and put it in the graph
  $.ajax({
    url: `/meals/graph/${today}`,
    type: 'GET',
    dataType: 'json'
  })
  .then((result) => {
    let graphData = [
      (result.totals.calories / result.user.calories) * 100 - 100,
      (result.totals.fat / result.user.fat) * 100 - 100,
      (result.totals.badFat / result.user.bad_fat) * 100 - 100,
      (result.totals.protein / result.user.protein) * 100 - 100,
      (result.totals.sugar / result.user.sugar) * 100 - 100,
      (result.totals.carbohydrates / result.user.carbohydrates) * 100 - 100,
      (result.totals.fiber / result.user.fiber) * 100 - 100];
    let graphBackgrounds = graphData.map((e) => {
      return `rgba(${Math.floor(255 * (e + 100) / 100) }, ${ 255 - Math.floor(255 * (e + 100) / 100) }, 0, 0.5)`
    });
    chart = new Chart(chartCanvas,{
      type:'horizontalBar',
      data:{
        labels:['Calories', 'Total Fat', 'Bad Fat', 'Protein', 'Sugar', 'Carbs','Fiber'],
        datasets: [
          {
            label: 'Percent of Daily Goal',
            data: graphData,
            backgroundColor: graphBackgrounds,
            borderWidth: 2,
            borderColor: 'black',
            hoverBorderWidth: 4,
            hoverBorderColor:'gray'
          }
        ]
      },
      options:{
        scales: {
          xAxes: [{
            ticks: {
              min: -100,
              max: 100
            }
          }]
        }
      }
    });
  })
  .catch((e) => {
    console.log('error', e);
  });

  // get the all the foods and categories
  let foods;
  $.ajax({
    url: `/dashboard/foods`,
    type: 'GET',
    dataType: 'json'
  })
  .then((result) => {
    // put groups in the select
    result.groups.forEach((e) => {
      $('#foodGroups').append($(`<option value="${e}">${e}</option>`));
    });
    $('#foodGroups').material_select();
    foods = result.foods;
  })
  .catch((e) => {
    console.log(e);
  });

  // adding a meal
  let meal = {
    foods: []
  };

  // change the foods dropdown
  $('#foodGroups').change((e) => {
    $('#foods').empty().append($('<option disabled selected>Food Name</option>'));
    let groupFoods = foods[e.target.value];
    groupFoods.forEach((food) => {
      $('#foods').append($(`<option value="${food.id}">${food.name}</option>`));
    });
    $('#foods').material_select();
  });

  // change the display values when food selected
  let food;
  $('#foods').change((e) => {
    $.ajax({
      url: `/foods/${e.target.value}`,
      type: 'GET',
      dataType: 'json'
    })
    .then((fd) => {
      food = fd;
      $('#fatValue').text(food.fat);
      $('#caloriesValue').text(food.calories);
      $('#sugarValue').text(food.sugar);
      $('#proteinValue').text(food.protein);
      $('#fiberValue').text(food.fiber);
      $('#carbohydratesValue').text(food.carbohydrates);
      $('#bad_fatValue').text(food.bad_fat);
    })
    .catch((e) => {
      console.log(e);
    });
  })

  // change display values on quantity change
  let quantity = 1;
  $('#quantity').on('input', (e) => {
    quantity = e.target.value;
    $('.value').each(function() {
      $(this).text((food[this.id.replace('Value', '')] * e.target.value).toFixed(1));
    });
  });

  // submit a food
  $('#submitFood').click((e) => {
    e.preventDefault();
    meal.foods.push({id: food.id, quantity});
    $('#addedFoods').append($(`<div class="addedFood">${food.name} x ${quantity} = ${(quantity * food.calories).toFixed(1)} calories</div>`));
    // reset stuff
    $('.values').text('0');
    $('#quantity').val(1);
  });

  // submit the meal object
  $('#mealSubmit').click((e) => {
    e.preventDefault();
    meal.label = $('#mealLabel').val();
    $.ajax({
      url: '/meals',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(meal),
    })
    .then((response) => {
      window.location.reload(true);
    })
    .catch((e) => {
      console.log(e);
    })
  })
});
