function auto(marca, modelo, annio) {
  (this.marca = marca), (this.modelo = modelo), (this.annio = annio);
}

let autos = [];

for (let i = 1; i < 4; i++) {
  let marca = prompt(`ingrse la marca del auto nro ${i}`);
  let modelo = prompt(`ingrse el modelo del auto nro ${i}`);
  let annio = prompt(`ingrse el año del auto nro ${i}`);
  autos.push(new auto(marca, modelo, annio));
}

for (auto in autos) {
  console.log(autos[auto]);
}


