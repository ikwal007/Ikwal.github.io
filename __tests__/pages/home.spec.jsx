const { default: Home } = require("@/pages");
const { render } = require("@testing-library/react");
const { useSession } = require("next-auth/react");

jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
  }),
}));

jest.mock('next-auth/react', () => ({
  useSession: () => ({
    data: {},
  }),
}));

describe("Home", () => {
  it("render home page", () => {
    const page = render(<Home />);
    expect(page).toMatchSnapshot();
  });
});
