import Link from "next/link"

export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <div className="mockup-browser justify-center max-w-xl mx-auto mt-4 border bg-base-300">
        <div className="mockup-browser-toolbar">
          <div className="input">https://loyenmarie-alegado.com</div>
        </div>
        <div className="flex justify-center px-4 py-10 bg-base-500">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <button className="btn btn-link">
              <Link href="/task" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </button>
          </p>
        </div>
      </div>
    </>
  );
}