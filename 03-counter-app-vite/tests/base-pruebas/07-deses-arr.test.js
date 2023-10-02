import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Prueba 07-deses-arr", () => {
  test("debe retornar un string y un numero", () => {
  
    const [ letters, numbers ] = retornaArreglo();
    expect(letters).toEqual('ABC');
    expect(numbers).toEqual(123);

    expect(typeof letters).toEqual('string');
    expect(typeof numbers).toEqual('number');
  });

});