import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Prueba 09-promesas", () => {
  test("getHeroeByIdAsync debe retornar un heroe", () => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });

      done();
    });
  });

  test("getHeroeByIdAsync debe retornar no existe", () => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      console.log(error);
      expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
      done();
    });
  });
});
