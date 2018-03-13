let picIndex = {
  'project-image-wrapper pic0': 0,
  'project-image-wrapper pic1': 1,
  'project-image-wrapper pic2': 2,
  'project-image-wrapper pic3': 3
}

let titleIndex = {
  'project-unit-title pic0': 0,
  'project-unit-title pic1': 1,
  'project-unit-title pic2': 2,
  'project-unit-title pic3': 3
}

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

  clearImages();
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

function clearImages() {
  $( '.project.pic0' ).addClass( 'hide-content' );
  $( '.project.pic1' ).addClass( 'hide-content' );
  $( '.project.pic2' ).addClass( 'hide-content' );
  $( '.project.pic3' ).addClass( 'hide-content' );
}

function setPages(context) {
  clearImages();
  $( '.project-display' ).addClass( 'hide-content' );
  let classString = $( context ).attr( 'class' );
  console.log('Class String: ' + classString);
  if (classString.indexOf('pic0') !== -1) {
    $( '.project.pic0' ).removeClass( 'hide-content' );
  }
  else if (classString.indexOf('pic1') !== -1) {
    $( '.project.pic1' ).removeClass( 'hide-content' );
  }
  else if (classString.indexOf('pic2') !== -1) {
    $( '.project.pic2' ).removeClass( 'hide-content' );
  }
  else if (classString.indexOf('pic3') !== -1) {
    $( '.project.pic3' ).removeClass( 'hide-content' );
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
    setPages(this);
  }
)

$( '.project-unit-title' ).click(
  function(event) {
    setPages(this);
    // $( '.project-display' ).addClass( 'hide-content' );
  }
)

$( '.project-paragraph-wrapper' ).click(
  function(event) {
    setPages(this);
    // $( '.project-display' ).addClass( 'hide-content' );
  }
)
