let papel = "papel";
let tijera = "tijera";
let piedra = "piedra";

function juego(user, pc) {
  if (
    (user == papel || user == tijera || user == piedra) &&
    (pc == papel || pc == tijera || pc == piedra)
  ) {
    if (user != pc) {
      if (
        (user == papel && pc == tijera) ||
        (user == tijera && pc == piedra) ||
        (user == piedra && pc == papel)
      ) {
        return "Gano la pc";
      } else {
        return "Gano el user";
      }
    } else {
      return "Empate";
    }
  } else {
    return "ingrese un valor valido";
  }
}

console.log(juego("piedra", "piedra"));
