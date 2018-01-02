// password verification indicator
$(() => {
  $('#signupPassword').keyup((e) => {
    // validate password
    let hasUpper = /[A-Z]/.test($(e.target).val());
    let hasLower = /[a-z]/.test($(e.target).val());
    let hasNumber = /\d/.test($(e.target).val());
    let longEnough = $(e.target).val().length >= 6;
    // make specific messages
    if (!(hasUpper && hasLower && hasNumber && longEnough)) {
      $(e.target).removeClass('valid');
      $(e.target).addClass('invalid');
    } else {
      $(e.target).removeClass('invalid');
      $(e.target).addClass('valid');
    }
  });
  $('#verifyPassword').keyup((e) => {
    if (!($('#signupPassword').val() === $(e.target).val())) {
      $(e.target).removeClass('valid');
      $(e.target).addClass('invalid');
    } else {
      $(e.target).removeClass('invalid');
      $(e.target).addClass('valid');
    }
  });
  $('#')
});
