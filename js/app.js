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

function setPage(elem) {
  let content = elem.text();
  $( 'body' ).css('background', '#ffffff')

  $( '.projects-page' ).addClass( 'hide-content' );
  $( '.about' ).addClass( 'hide-content' );
  $( '.contact' ).addClass( 'hide-content' );

  if (content === 'Home') {
    $( '.about' ).removeClass( 'hide-content' );
  }
  else if ((content === 'Projects') || (content === 'Will Christerson')) {
    $( '.projects-page' ).removeClass( 'hide-content' );
  }
  else if (content === 'Contact') {
    $( '.contact' ).removeClass( 'hide-content' );
    // $( 'body' ).css('background-color', 'red');
    $( 'body' ).css('background', 'linear-gradient(160deg, #66afdd 0%, #dddb66 100%)');

    // background: linear-gradient(160deg, #02ccba 0%, #aa7ecd 100%);
  }
}


$( '.page-link' ).click(function(event) {
  event.preventDefault();
  setPage($( this ));
  // let content = $( this ).text();
  // $( 'body' ).css('background', '#ffffff')
  //
  // $( '.home' ).addClass( 'hide-content' );
  // $( '.about' ).addClass( 'hide-content' );
  // $( '.contact' ).addClass( 'hide-content' );
  //
  // if (content === 'Home') {
  //   $( '.home' ).removeClass( 'hide-content' );
  // }
  // else if (content === 'About') {
  //   $( '.about' ).removeClass( 'hide-content' );
  // }
  // else if (content === 'Contact') {
  //   $( '.contact' ).removeClass( 'hide-content' );
  //   // $( 'body' ).css('background-color', 'red');
  //   $( 'body' ).css('background', 'linear-gradient(160deg, #66afdd 0%, #dddb66 100%)');
  //
  //   // background: linear-gradient(160deg, #02ccba 0%, #aa7ecd 100%);
  // }
});


$( '.site-title' ).click(function(event) {
  event.preventDefault();
  setPage($( this ));
})
