$(() => {
  $('.collapsible').collapsible();
  $('select').material_select();

  $.ajax({
    url: '/meals/today',
    type: 'GET',
    dataType: 'json'
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log('error', e);
  });
  let chartCanvas = document.getElementById('todayChart').getContext('2d');
  let chart = new Chart(chartCanvas,{
    type:'horizontalBar',
    data:{
      labels:['Calories', 'Total Fat', 'Bad Fat', 'Protein', 'Sugar', 'Carbs','Fiber'],
      datasets:[{
        data:[((100/2000)*100),-20,14,5,-6,-10,5],
        backgroundColor:'green',
        borderWidth: 2,
        borderColor: 'black',
        hoverBorderWidth: 4,
        hoverBorderColor:'gray'
      }]
    },
    object:{}
  });
});
