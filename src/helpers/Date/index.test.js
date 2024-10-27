import { getMonth } from "./index";


describe("Date helper", () => {
    describe("When getMonth is called", () => {
      it("the function returns janvier for 2022-01-01 as date", () => {
        const date = new Date("2022-01-01"); // Crée une instance de Date pour le 1er janvier 2022
        const month = getMonth(date); // Appelle la fonction getMonth
        expect(month).toBe("janvier"); // Vérifie que le mois retourné est "janvier"
      });
  
      it("the function returns juillet for 2022-07-08 as date", () => {
        const date = new Date("2022-07-08"); // Crée une instance de Date pour le 8 juillet 2022
        const month = getMonth(date); // Appelle la fonction getMonth
        expect(month).toBe("juillet"); // Vérifie que le mois retourné est "juillet"
      });
    });
  });

