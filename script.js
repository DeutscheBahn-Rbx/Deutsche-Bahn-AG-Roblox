function zeigeBegrüßung() {
  let name = prompt("Wie ist dein Name?");
  if (name) {
    alert("Hallo, " + name + "!");
  } else {
    alert("Schade, du hast keinen Namen eingegeben.");
  }
}
