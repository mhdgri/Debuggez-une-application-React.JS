import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await waitFor(() => {
        expect(screen.findByText("Message envoyé !")).resolves.toBeInTheDocument();
      }) 
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    render(<Home />);
    const eventList = await screen.findByTestId("events");
    expect(eventList).toBeInTheDocument();
  });  

  it("a list of people is displayed", async () => {
    render(<Home />);
    const cardImages = await screen.findAllByTestId("card-image-testid");
    expect(cardImages.length).toBeGreaterThan(0);
  });


  it("a footer is displayed", async () => {
    render(<Home />);
    const footer = await screen.findByTestId("footer");
    expect(footer).toBeInTheDocument();
  });


  it("an event card, with the last event, is displayed",   () => {
    render(<Home />);
    waitFor(() => {
      const cardDisplayed = screen.getByTestId("card-testid");
      expect(cardDisplayed).toBeInTheDocument();
    });
  })
});