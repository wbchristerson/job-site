$( '.topic-label' ).click(function() {
  let elem = $( this ).parent().children( '.extra-content' ).first();
  let vertBar = $( this ).find( '.vert-plus' );
  let s = vertBar.attr('class');

  elem.toggleClass( 'hide-content' );
  if (s.indexOf('hide-content')!==-1 ) {
    vertBar.attr('class', 'vert-plus');
  }
  else {
    vertBar.attr('class', 'vert-plus hide-content');
  }
});


$( '.page-link' ).click(function(event) {
  event.preventDefault();
  let content = $( this ).text();

  $( '.home' ).addClass( 'hide-content' );
  $( '.about' ).addClass( 'hide-content' );
  $( '.contact' ).addClass( 'hide-content' );

  if (content === 'Home') {
    $( '.home' ).removeClass( 'hide-content' );
  }
  else if (content === 'About') {
    $( '.about' ).removeClass( 'hide-content' );
  }
  else if (content === 'Contact') {
    $( '.contact' ).removeClass( 'hide-content' );
  }
});
