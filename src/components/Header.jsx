import { Button, Navbar } from "flowbite-react";

export default function Header() {
  return (
    <Navbar fluid rounded className="bg-black">
      <Navbar.Brand href="#">
        {/* <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          Meow Mentum
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Donate</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link className="text-white" href="#">
          Team
        </Navbar.Link>
        <Navbar.Link className="text-white" href="#">
          Get Involved
        </Navbar.Link>
        <Navbar.Link className="text-white" href="#">
          Blog
        </Navbar.Link>
        <Navbar.Link className="text-white" href="#">
          Contact us
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
