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
  let currTab = $( '.trigger' ).children().first();
  $( 'body' ).css('background', '#ffffff')

  // $( '.projects-page' ).addClass( 'hide-content' );
  $( '.project-display' ).addClass( 'hide-content' );
  $( '.about' ).addClass( 'hide-content' );
  $( '.contact' ).addClass( 'hide-content' );

  // remove the border around whichever of "home", "projects", "content" is covered
  $( '.page-link' ).removeClass( 'select-border' );
  $( '.footer-git' ).attr('src', 'img/github-icon-small.png');

  if ((content === 'Projects') || (content === 'Will Christerson')) {
    $( '.project-display' ).removeClass( 'hide-content' );
  }
  else if (content === 'About') {
    $( '.about' ).removeClass( 'hide-content' );
    currTab = currTab.next();
  }
  else if (content === 'Contact') {
    $( '.contact' ).removeClass( 'hide-content' );
    $( 'body' ).css('background', 'linear-gradient(160deg, #66afdd 0%, #dddb66 100%)');
    $( '.footer-git' ).attr('src', 'img/github-icon-small-yellow.png');
    currTab = currTab.next().next();
  }
  currTab.addClass( 'select-border' );
}


$( '.page-link' ).click(function(event) {
  event.preventDefault();
  setPage($( this ));
});


$( '.site-title' ).click(function(event) {
  event.preventDefault();
  setPage($( this ));
})

$( '.project-image-wrapper' ).hover(
  function(event) {
    $( this ).children( '.project-paragraph-wrapper' ).removeClass( 'hide-content' );
  },
  function(event) {
    $( this ).children( '.project-paragraph-wrapper' ).addClass( 'hide-content' );
  }
)

$( '.project-image' ).click(
  function(event) {
    $( '.project-display' ).addClass( 'hide-content' );
  }
)
