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
    $( 'body' ).css('background', 'linear-gradient(160deg, #66afdd 0%, #dddb66 100%)');
  }
}


$( '.page-link' ).click(function(event) {
  event.preventDefault();
  setPage($( this ));
});


$( '.site-title' ).click(function(event) {
  event.preventDefault();
  setPage($( this ));
})
