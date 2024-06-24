$(document).ready(function () {
    $('#toggle-btn').click(function () {
      $('body').toggleClass('change-background');
      var currentText = $('#toggle-btn span').text();
      var newText = currentText === 'Dark Mode' ? 'Light Mode' : 'Dark Mode';
      $('#toggle-btn span').text(newText);
      $('#toggle-btn i').toggleClass('fa-sun fa-moon'); // Toggle moon and sun icons
    });
  });
  
  