import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Prueba 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "PRUEBA",
    };
    const user = getUser();
    expect(user.uid).toEqual(testUser.uid);
  });

  test("getUsuarioActivo debe retornar un objeto", () => {

    const name = "Sasha";
    const testUsuarioActivo = {
      uid: "ABC567",
      username: name,
    };
    const user = getUsuarioActivo(name);
    expect(user.username).toEqual(testUsuarioActivo.username);
  });
});
