// comece a criar a sua função add na linha abaixo
function add(n1, n2) {
  return n1 + n2;
}

// descomente a linha seguinte para testar sua função
console.assert(
  add(3, 5) === 8,
  "A função add não está funcionando como esperado"
);

// comece a criar a sua função multiply na linha abaixo
function multiply(n1, n2) {
  let mult = 0;
  for (let i = 1; i <= n2; i = add(i, 1)) {
    mult = add(mult, n1);
  }
  return mult;
}

// descomente a linha seguinte para testar sua função
console.assert(
  multiply(4, 6) === 24,
  "A função multiply não está funcionando como esperado"
);

// comece a criar a sua função power na linha abaixo

function power(n1, n2) {
  let pow = n1;
  for (let i = 1; i < n2; i = add(i, 1)) {
    pow = multiply(pow, n1);
  }
  return pow;
}

console.assert(
  power(3, 4) === 81,
  "A função power não está funcionando como esperado"
);

// comece a criar a sua função factorial na linha abaixo

function factorial(n) {
  let fac = n;
  for (let i = 1; i < n; i = add(i, 1)) {
    fac = multiply(fac, i);
  }
  return fac;
}

// descomente a linha seguinte para testar sua função
console.assert(
  factorial(5) === 120,
  "A função factorial não está funcionando como esperado"
);

/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  let numeroAnterior = 1;
  let numeroAtual = 1;
  for (let i = 2; i < n; i = add(i, 1)) {
    const auxiliar = numeroAtual;
    numeroAtual = add(numeroAtual, numeroAnterior);
    numeroAnterior = auxiliar;
  }
  return numeroAtual;
}

// descomente a linha seguinte para testar sua função
console.assert(
  fibonacci(7) === 13,
  "A função fibonacci não está funcionando como esperado"
);
