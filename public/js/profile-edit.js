$(() => {
  $('input[type=range]').on('input', (e) => {
    $(`#${e.target.id}Value`).text(e.target.value);
  });
});
