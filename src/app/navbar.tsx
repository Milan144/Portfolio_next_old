'use client'
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only stroke">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-20 justify-center mx-auto">
          <a
            href="/"
            className=" text-sm font-semibold leading-6 text-white-900 stroke"
          >
            HOME
          </a>
          <a
            href="/about"
            className=" text-sm font-semibold leading-6 text-white-900 stroke"
          >
            ABOUT ME
          </a>
          <a
            href="/projects"
            className=" text-sm font-semibold leading-6 text-white-900 stroke"
          >
            PROJECTS
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only stoke">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className=" text-sm font-semibold leading-6 text-white-900 stroke"
                >
                  HOME
                </a>
                <a
                  href="/about"
                  className=" text-sm font-semibold leading-6 text-white-900 stroke"
                >
                  ABOUT ME
                </a>
                <a
                  href="/projects"
                  className=" text-sm font-semibold leading-6 text-white-900 stroke"
                >
                  PROJECTS
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
