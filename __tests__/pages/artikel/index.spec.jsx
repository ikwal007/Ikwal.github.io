import Artikel from "@/pages/artikel";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { useRouter } from "next/router";
import { SessionProvider } from 'next-auth/react';

jest.mock("axios");

jest.mock('next/router', () => ({
    ...jest.requireActual('next/router'),
    useRouter: () => ({
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
    }),
  }));

describe("Artikel", () => {
  it("renders artikel page with data", async () => {
    // Konfigurasi mock axios untuk mengembalikan data palsu
    const mockData = {
      lastestPost: ["Rekomendasi 1", "Rekomendasi 2"],
      rekomendasiForYou: ["Rekomendasi 1", "Rekomendasi 2"],
    };
    axios.get.mockResolvedValue({ data: mockData });

    // Me-render komponen Artikel dengan data yang sesuai
    render(
        <SessionProvider session={{}}>
          <Artikel data={mockData} />
        </SessionProvider>
      );

    // Menunggu komponen menampilkan data yang diharapkan
    await waitFor(() => {
      expect(
        screen.getByText("Ini adalah postingan terbaru")
      ).toBeInTheDocument();
      expect(screen.getByText("Rekomendasi 1")).toBeInTheDocument();
      expect(screen.getByText("Rekomendasi 2")).toBeInTheDocument();
    });
  });

});