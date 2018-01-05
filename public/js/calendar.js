



$(() => {
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });

  let calendar = document.getElementById('calendar').getContext('2d');
  let dayChart = new Chart(calendar,{
    type:'line',
    data:{
      labels:["Monday","Tuesday", "Wednesday", "Thursday","Friday", "Saturday", "Sunday"],
      datasets:[{
        data:[20,25,50,30,45,60,45],
        label: "calories",
        borderColor: 'green',
        fill: false
      },{
        data:[30,44,60,80,22,44,50],
        label:"sugar",
        borderColor: 'red',
        fill: false
      }, {
        data:[75,50,85,99,80,45,60],
        label: "fat",
        borderColor:'blue',
        fill: false
      },{
        data: [],
        label: 'protein',
        borderColor: 'purple',
        fill: false
      }, {
        data:[25, 75, 90,60, 99, 45,10],
        label: "Carbs",
        borderColor: 'yellow',
        fill: false
      }, {
        data:[10, 45, 70, 90, 30,10,75],
        label: "fiber",
        borderColor: 'orange',
        fill: false
      },{
        data:[20,40,70,10,100,75,35],
        label:"bad fat",
        borderColor: 'black',

        fill: false
      }]
    },
    object:{}
  })
});
