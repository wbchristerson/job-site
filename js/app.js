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
  $( 'body' ).css('background', '#ffffff')

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
    // $( 'body' ).css('background-color', 'red');
    $( 'body' ).css('background', 'linear-gradient(160deg, #66afdd 0%, #dddb66 100%)');

    // background: linear-gradient(160deg, #02ccba 0%, #aa7ecd 100%);
  }
});
