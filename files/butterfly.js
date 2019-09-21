// Set up a 30 Hz frame rate
frameRate    =  30;
timeInterval = Math.round( 1000 / frameRate );
relMouseX    = Math.floor((Math.random() * 1000) + 1);
relMouseY    = Math.floor((Math.random() * 1000) + 1);
// butterfly:
up = 1;
right = 1;
$(document).ready( function () {
  // get the stage offset
  offset = $('#stage').offset();
  // start calling animateFollower at the 'timeInterval' we calculated above
  atimer = setInterval( "animateFollower()", timeInterval );
} );
// track and save the position of the mouse
$(document).mousemove( function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
  relMouseX = relMouseX + 0.05*(mouseX - offset.left - relMouseX);
  relMouseY = relMouseY + 0.05*(mouseY - offset.top - relMouseY);
  if (mouseX - offset.left - relMouseX < 0){
    right = 1;
  }
  else{right = 0;}
  // display the current mouse positions
  $('#mouse_x-trace').text( mouseX );
  $('#mouse_y-trace').text( mouseY );
} );
// move the image where the mouse is
// this function is called by the setInterval command above to run
// at a rate of 30 frames per second
function animateFollower() {
  if (right==0){
    if (up<5 && up>0 ){
      $('#follower1').css('left', relMouseX);
      $('#follower1').css('top', relMouseY-10);
      $('#follower2').css('left', -1000);
      $('#follower3').css('left', -1000);
      $('#follower4').css('left', -1000);
      up++;
    }
    else{
      $('#follower2').css('left', relMouseX);
      $('#follower2').css('top', relMouseY+10);
      $('#follower1').css('left', -1000);
      $('#follower3').css('left', -1000);
      $('#follower4').css('left', -1000);
      if (up>0){up=-2;}
      else{up++;}
    }
  }
  else{
    if (up<5 && up>0 ){
      $('#follower3').css('left', relMouseX);
      $('#follower3').css('top', relMouseY-10);
      $('#follower2').css('left', -1000);
      $('#follower1').css('left', -1000);
      $('#follower4').css('left', -1000);
      up++;
    }
    else{
      $('#follower4').css('left', relMouseX);
      $('#follower4').css('top', relMouseY+10);
      $('#follower2').css('left', -1000);
      $('#follower3').css('left', -1000);
      $('#follower1').css('left', -1000);
      if (up>0){up=-2;}
      else{up++;}
    }
  }
}
