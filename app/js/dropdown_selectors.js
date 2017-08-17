
$(document).ready(function() {
  // Create Select2 for Viz Type
  $("#json_sources").select2({
    placeholder: "Select Viz Type"
  })
  .on("change", function() {
        console.log($(this).val())
        update_board()
        update_player_info()
        })

  // Create Select2 for Player Selection

  $("#viz_type").select2({
    placeholder: "Select Viz Type"
  })
  .on("change", function() {
        console.log($(this).val())
        update_board()
        update_player_info()
        })
});
