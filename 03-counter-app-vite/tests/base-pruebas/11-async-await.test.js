import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Prueba 11-async-await", () => {
  test("getImagen debe retornar una img", async() => {
   
   const url = await getImagen();

   expect(typeof url).toBe('string');
  });

  test("getImagen debe retornar no encontro", async() => {
   
    const url = await getImagen();
 
    expect(url).toBe('No se encontro la img');
   });

});
