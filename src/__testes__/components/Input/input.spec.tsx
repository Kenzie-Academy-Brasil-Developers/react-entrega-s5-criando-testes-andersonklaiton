import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../../../components/Search"

describe("Input Components Search",()=>{
    test("should be able to render an input",()=>{
        render(<Search/>)

        expect(screen.getByPlaceholderText("Insira o CEP")).toBeTruthy()
    })
})