
console.log('Operaciones Matamáticas');

function opAdd(numero1: number, numero2: number, numero3: number): number {
  return numero1 + numero2 + numero3;
}

function opLess(numero1: number, numero2: number): number {
  return numero1 - numero2;
}

function dividir(numero1: number, numero2: number): number {
  return numero1 / numero2;
}

function multiplicar(a: number, b: number) {
  try {
    return a*b;
  } catch (error) {
    console.error(`Error en la multiplicación: ${error}`);
  }
}