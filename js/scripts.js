$(function() {
  $("#formOne").submit(function(event) {
    var inputs = ["person1", "person2", "animal", "exclamation", "verb", "noun"]

    inputs.forEach(function(input) {
      var userInput = $("input#" + input).val();
      $("." + input).text(userInput);
    })

    $("#story").show();

    event.preventDefault();
  });
});
