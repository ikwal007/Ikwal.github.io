const { default: Index } = require("@/pages/portofolio");
const { render } = require("@testing-library/react");

jest.mock("next/router", () => ({
  useRouter: () => ({
    route: "/",
    pathname: "/",
    query: {},
    asPath: "/",
  }),
}));

jest.mock("next-auth/react", () => ({
  useSession: () => ({
    data: {},
  }),
}));

describe("Portofolio", () => {
  it("render portofolio page", () => {
    const page = render(<Index />);
    expect(page).toMatchSnapshot();
  });
});
