import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>);
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)

    const firstNameField = screen.getByLabelText(/first name:/i);
    const lastNameField = screen.getByLabelText(/last name:/i);
    const addressField = screen.getByLabelText(/address:/i);
    const cityField = screen.getByLabelText(/city:/i);
    const stateField = screen.getByLabelText(/state:/i);
    const zipField = screen.getByLabelText(/zip:/i);
    const checkoutBtn = screen.getByRole('button');

    userEvent.type(firstNameField, 'kayla');
    userEvent.type(lastNameField, 'famurewa');
    userEvent.type(addressField, '123 old town rd');
    userEvent.type(cityField, 'old town');
    userEvent.type(stateField, 'new mexico');
    userEvent.type(zipField, '22222');

    userEvent.click(checkoutBtn);

    const success = screen.getByTestId('successMessage');
    expect(success).toBeInTheDocument;

   });
