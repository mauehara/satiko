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
  var pieces = document.getElementsByClassName("modal-gallery__piece");
  for (i = 0; i < pieces.length; i++) {
    pieces[i].style.display = "none";
  }
  pieces[n].style.display = "block";
}
