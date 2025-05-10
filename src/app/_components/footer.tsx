import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div className="text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight">
              Contact Lee
            </h3>
            <a
              href="https://www.linkedin.com/in/lee-rohrer-14322486/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold tracking-tighter mt-3 block text-neutral-900 dark:text-white hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="mailto:leerohrer1@gmail.com"
              rel="noopener noreferrer"
              className="text-2xl font-bold tracking-tighter mt-3 block text-neutral-900 dark:text-white hover:underline"
            >
              Email
            </a>
            <a
              href="tel:314-669-5331"
              rel="noopener noreferrer"
              className="text-2xl font-bold tracking-tighter mt-3 block text-neutral-900 dark:text-white hover:underline"
            >
              Call
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
