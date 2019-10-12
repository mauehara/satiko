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
}

function showNextPiece() {
  var currentPiece = document.querySelector("#gallery-modal").getAttribute("visible-piece");
  var nextPiece = document.getElementsByClassName("gallery-modal__piece")[parseInt(currentPiece)+1];
  var pieces = document.getElementsByClassName("gallery-modal__piece");

  document.getElementsByClassName("gallery-modal__piece")[currentPiece].style.display = "none";
  if (currentPiece < pieces.length-1) {
    document.querySelector("#gallery-modal").setAttribute("visible-piece", parseInt(currentPiece)+1);
    nextPiece.style.display = "block";
  } else {
    document.querySelector("#gallery-modal").setAttribute("visible-piece", 0);
    pieces[0].style.display = "block";
  }
}

function showPrevPiece() {
  var currentPiece = document.querySelector("#gallery-modal").getAttribute("visible-piece");
  var nextPiece = document.getElementsByClassName("gallery-modal__piece")[parseInt(currentPiece)-1];
  var pieces = document.getElementsByClassName("gallery-modal__piece");

  document.getElementsByClassName("gallery-modal__piece")[currentPiece].style.display = "none";
  if (currentPiece > 0) {
    document.querySelector("#gallery-modal").setAttribute("visible-piece", parseInt(currentPiece)-1);
    nextPiece.style.display = "block";
  } else {
    document.querySelector("#gallery-modal").setAttribute("visible-piece", pieces.length-1);
    pieces[pieces.length-1].style.display = "block";
  }
}
