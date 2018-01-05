// wrap in iffe
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
today = dd+mm+yyyy;

$(() => {
  $('.collapsible').collapsible();
  $('select').material_select();

  let chartCanvas = document.getElementById('todayChart').getContext('2d');
  let chart;

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
    console.log(graphBackgrounds);
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
      object:{}
    });
    /*
      let graphData = [
        (result.totals.calories / result.user.calories) * 100 - 100,
        (result.totals.fat / result.user.fat) * 100 - 100,
        (result.totals.badFat / result.user.bad_fat) * 100 - 100,
        (result.totals.protein / result.user.protein) * 100 - 100,
        (result.totals.sugar / result.user.sugar) * 100 - 100,
        (result.totals.carbohydrates / result.user.carbohydrates) * 100 - 100,
        (result.totals.fiber / result.user.fiber) * 100 - 100];
      let graphDatasets = graphData.map((e) => {
        return {
          data: [e],
          backgroundColor:'green',
          borderWidth: 2,
          borderColor: 'black',
          hoverBorderWidth: 4,
          hoverBorderColor:'gray'
        }
      });
      console.log(graphDatasets);
      chart = new Chart(chartCanvas,{
        type:'horizontalBar',
        data:{
          //labels:['Calories', 'Total Fat', 'Bad Fat', 'Protein', 'Sugar', 'Carbs','Fiber'],
          datasets: graphDatasets
        },
        object:{}
      });
      */
  })
  .catch((e) => {
    console.log('error', e);
  });
});
