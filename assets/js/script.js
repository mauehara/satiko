function openModal() {
  document.getElementById("gallery-modal").classList.add("modal--visible");
}

function closeModal() {
  document.getElementById("gallery-modal").classList.remove("modal--visible");
}

function currentPiece(n) {
  showPiece(n);
}

function showPiece(n) {
  var gallery = document.querySelector("#gallery-modal");
  var pieces = document.getElementsByClassName("gallery-modal__piece");
  for (i = 0; i < pieces.length; i++) {
    pieces[i].style.display = "none";
  }
  pieces[n].style.display = "block";
  gallery.setAttribute("visible-piece", n);

  // Update title
  var title = document.querySelector("#gallery-modal-title");
  title.innerHTML = pieces[n].getElementsByTagName("img")[0].alt;
}

function showNextPiece() {
  var currentPiece = document.querySelector("#gallery-modal").getAttribute("visible-piece");
  var nextPiece = document.getElementsByClassName("gallery-modal__piece")[parseInt(currentPiece)+1];
  var pieces = document.getElementsByClassName("gallery-modal__piece");

  if (currentPiece < pieces.length-1) {
    showPiece(parseInt(currentPiece)+1);
  } else {
    showPiece(0);
  }
}

function showPrevPiece() {
  var currentPiece = document.querySelector("#gallery-modal").getAttribute("visible-piece");
  var nextPiece = document.getElementsByClassName("gallery-modal__piece")[parseInt(currentPiece)-1];
  var pieces = document.getElementsByClassName("gallery-modal__piece");

  if (currentPiece > 0) {
    showPiece(parseInt(currentPiece)-1);
  } else {
    showPiece(pieces.length-1);
  }
}
