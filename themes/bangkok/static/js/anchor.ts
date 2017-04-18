document.addEventListener("keydown", function(event) {
  if (event.code == 'ArrowDown') {
  console.log("coucou");
    var currentOffset = document.getElementById('main').scrollTop;
    console.log(currentOffset);
    var anchors = document.getElementsByClassName('anchor');
    var anchorTarget;
    var anchorOffset = 0;
    /*anchors.forEach( function(anchor){
      var offset;

    });*/
  }
});
