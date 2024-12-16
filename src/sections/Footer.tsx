import {
  Footer as FlowbiteFooter,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <FlowbiteFooter container className="bg-black rounded-none w-screen">
        <div className="w-full text-white">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="flex items-center py-7">
              <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">
                Nugar.dev
              </span>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <FooterTitle title="about" className="text-white" />
                <FooterLinkGroup col>
                  <FooterLink href="#Services" className="text-white">
                    Services
                  </FooterLink>
                  <FooterLink href="#Works" className="text-white">
                    Works
                  </FooterLink>
                  <FooterLink href="#Contact" className="text-white">
                    Contact
                  </FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Follow us" className="text-white" />
                <FooterLinkGroup col>
                  <FooterLink
                    href="https://www.github.com/Rahmannugar"
                    target="_blank"
                    className="text-white"
                  >
                    Github
                  </FooterLink>
                  <FooterLink
                    href="https://www.linkedin.com/in/Rahmannugar"
                    target="_blank"
                    className="text-white"
                  >
                    LinkedIn
                  </FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="File" className="text-white" />
                <FooterLinkGroup col>
                  <FooterLink
                    href="/files/student-handbook.pdf"
                    className="text-white"
                  >
                    Resume
                  </FooterLink>
                </FooterLinkGroup>
              </div>
            </div>
          </div>
          <FooterDivider className="border-white" />

          <div className="w-full sm:flex sm:items-center sm:justify-center">
            <FooterCopyright
              href="#"
              by="Nugar.dev"
              year={currentYear}
              className="text-white"
            />
          </div>
        </div>
      </FlowbiteFooter>
    </footer>
  );
};

export default Footer;
