"use client";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  LayoutDashboard,
  MenuIcon,
  BookOpen,
  MessageCircle,
  Info,
  Phone,
  CircleUser,
  Newspaper,
  Wrench,
  ClipboardClock,
} from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { MdElectricBolt } from "react-icons/md";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { VariantProps } from "class-variance-authority";
import { cloneElement, isValidElement, useEffect, useState } from "react";

type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];

type BaseButtonProps = {
  text?: string;
  className?: string;
  variant?: ButtonVariant;
  isVisible?: boolean;
};

type ButtonClickProps = BaseButtonProps & {
  onClick?: () => void;
  urlLink?: never;
};

type ButtonUrlProps = BaseButtonProps & {
  onClick?: never;
  urlLink?: string;
};

type ButtonProps = ButtonClickProps | ButtonUrlProps;

interface NavBar2Props<T extends MenuItem> {
  domain?: {
    name?: string | React.ReactNode;
    logo?: React.ReactNode;
  };
  navigationMenu?: T[];
  isSticky?: boolean;
  authLinks?: {
    login?: ButtonProps;
    register?: ButtonProps;
  };
  leftAddon?: React.ReactNode;
  className?: string;
}

export interface MenuItem {
  title: string;
  url: string;
  subMenu?: SubMenu[];
}

export interface SubMenu {
  title: string;
  description?: string;
  url?: string;
  icon?: React.ReactNode;
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"li"> {
  href: string;
  title: string; // Add title to the interface
  description?: string; // Make description optional as per its usage below
  icon?: React.ReactNode;
  children?: React.ReactNode; // Make children optional if it's not always present
}

const mainMenu: MenuItem[] = [
  {
    title: "Menu",
    url: "/Menu", // Base URL for products
    subMenu: [
      {
        title: "My Portfolio",
        url: "/",
        description: "Browse my portfolio",
        icon: <CircleUser />,
      },
      {
        title: "My Articles",
        url: "/article",
        description: "Find my latest articles.",
        icon: <Newspaper />,
      },
      {
        title: "Categories",
        url: "/article#allCategories",
        description: "Explore by product type.",
        icon: <LayoutDashboard />,
      },
    ],
  },
  {
    title: "About",
    url: "/about",
    subMenu: [
      {
        title: "About Me",
        url: "/#about",
        description: "About me and my background.",
        icon: <BookOpen />,
      },
      {
        title: "Tools and Technologies",
        url: "/#tools",
        description: "Tools that I master.",
        icon: <Wrench />,
      },
      {
        title: "Experience",
        url: "/#experience",
        description: "My experience in programming.",
        icon: <ClipboardClock />,
      },
    ],
  },
  {
    title: "Support",
    url: "/support",
    subMenu: [
      {
        title: "Help Center",
        url: "/support/help",
        description: "Find answers to common questions.",
        icon: <MessageCircle />,
      },
      {
        title: "Contact Us",
        url: "/support/contact",
        description: "Get in touch with our support team.",
        icon: <Phone />,
      },
      {
        title: "FAQs",
        url: "/support/faq",
        description: "Frequently Asked Questions.",
        icon: <Info />,
      },
    ],
  },
];

export function NavBar2<T extends MenuItem>(navBar2Props: NavBar2Props<T>) {
  const [isScrolled, setIsScrolled] = useState(false);
  const {
    domain = { name: "Muhammad Ikwal Ramadhan" },
    isSticky = true,
    authLinks,
    leftAddon,
    className = "",
    navigationMenu,
    ...props
  } = navBar2Props;

  const defaultLogo = domain.logo || <MdElectricBolt size={26} />;
  const [isClient, setIsClient] = useState(false);
  const defaultNavigationMenu = navigationMenu ?? mainMenu;

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Adjust this value as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isClient]);

  const { login = {} } = authLinks || {};
  const { register = {} } = authLinks || {};
  const {
    className: loginClassName = "",
    isVisible: isLoginVisbile = true,
    onClick: onLoginClicked,
    text: loginText = "Login",
    urlLink: urlLoginUrl = "",
    variant: loginVariant = "ghost",
  } = login;

  const {
    className: registerClassName = "",
    isVisible: isRegisterVisible = true,
    onClick: onRegisterClicked,
    text: registerText = "Register",
    urlLink: urlRegisterUrl = "",
    variant: registerVariant = "default",
  } = register;

  const navBarSticklyTailwindCss = `
        fixed top-0 left-0 right-0 z-50 p-7 py-5 flex justify-between items-center  transition-all duration-300
        ${
          isScrolled
            ? " bg-opacity-30 backdrop-blur-lg shadow-lg py-2 dark:border-b"
            : "py-3"
        }`;

  //Functional component to render each menu item
  const RenderMainMenuItem = ({ menuItem }: { menuItem: MenuItem }) => {
    // If the element contains a sub menu, and the array is more than 0
    // then render the content of sub menu by using the navigationMenuContent tag
    if (menuItem.subMenu && menuItem.subMenu.length > 0) {
      return (
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            {menuItem.title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[300px]">
              {menuItem.subMenu.map((subMenuItem) => (
                <ListItem
                  key={subMenuItem.title}
                  title={subMenuItem.title}
                  description={subMenuItem.description}
                  icon={subMenuItem.icon}
                  href={subMenuItem.url || ""}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }

    //Otherwise if it is a simple menu then use the NavigationMenuLink tag

    return (
      <NavigationMenuLink asChild>
        <Link href={menuItem.url}>{menuItem.title}</Link>
      </NavigationMenuLink>
    );
  };

  //Functional component to render the logo
  const RenderNameAndLogo = ({
    defaultLogo,
  }: {
    defaultLogo: React.ReactNode;
  }) => {
    return (
      <Link href={"/"}>
        <div className="flex justify-center   items-center gap-2 mt-[5px]">
          {defaultLogo}
          {typeof domain.name === "string" ? (
            <h1 className="text-2xl font-bold max-md:hidden">{domain.name}</h1>
          ) : (
            <div className="flex justify-center   items-center gap-2 mt-[5px]">
              {domain.name}
            </div>
          )}
        </div>
      </Link>
    );
  };
  //
  //return the main jsx of the component

  if (!isClient) return null;

  return (
    <nav
      {...props}
      className={`   ${
        isSticky
          ? navBarSticklyTailwindCss
          : " flex justify-between   items-center p-6 px-20 "
      } ${className}`}
    >
      {/* Logo  */}
      <RenderNameAndLogo defaultLogo={defaultLogo} />
      {/* Navigation menu */}
      <NavigationMenu viewport={false} className="max-lg:hidden mt-2 ">
        <NavigationMenuList>
          {/* home */}
          {defaultNavigationMenu.map((mainMenuItem) => (
            <RenderMainMenuItem
              key={mainMenuItem.title}
              menuItem={mainMenuItem}
            />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      {/* Mobile Menu */}

      <div>
        <RenderMobileMenu defaultLogo={defaultLogo} />
        <div className="flex gap-2 items-center">
          {leftAddon && <div className="max-lg:hidden">{leftAddon}</div>}
          {/* Login Button */}
          <RenderAuthButton
            className={loginClassName}
            isVisible={isLoginVisbile}
            onClick={onLoginClicked}
            text={loginText}
            urlLink={urlLoginUrl}
            variant={loginVariant}
          />
          {/* Register Button */}
          <RenderAuthButton
            className={registerClassName}
            isVisible={isRegisterVisible}
            onClick={onRegisterClicked}
            text={registerText}
            urlLink={urlRegisterUrl}
            variant={registerVariant}
          />
        </div>
      </div>
    </nav>
  );

  function RenderMobileMenu({ defaultLogo }: { defaultLogo: React.ReactNode }) {
    return (
      <Sheet>
        <SheetTrigger asChild className="hidden max-lg:block">
          <Button variant={"outline"}>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent className="">
          <SheetHeader>
            <SheetTitle className="flex items-center justify-start gap-2">
              {cloneElement(
                defaultLogo as React.ReactElement<{ size?: number | string }>,
                {
                  size: 25,
                }
              )}
              {/* <span>{domain.name}</span> */}
            </SheetTitle>
          </SheetHeader>

          <div className="mt-20 px-5">
            <Accordion type="single" collapsible>
              {defaultNavigationMenu.map((mainMenuItem) => {
                // If menu item has submenu, render as accordion item
                if (mainMenuItem.subMenu && mainMenuItem.subMenu.length > 0) {
                  return (
                    <AccordionItem
                      key={mainMenuItem.title}
                      value={mainMenuItem.title}
                      className="border-none"
                    >
                      <AccordionTrigger className="text-left font-medium">
                        {mainMenuItem.title}
                      </AccordionTrigger>
                      <AccordionContent className="pb-4">
                        <div className="space-y-2">
                          {mainMenuItem.subMenu.map((subMenuItem) => (
                            <Link
                              key={subMenuItem.title}
                              href={subMenuItem.url || ""}
                              className=" p-2 flex items-center gap-4 rounded-md hover:bg-accent text-sm"
                            >
                              <div className="text-sm">
                                {isValidElement(subMenuItem.icon)
                                  ? cloneElement(
                                      subMenuItem.icon as React.ReactElement<{
                                        size?: number | string;
                                        className?: string;
                                      }>,
                                      {
                                        size: 17,
                                        className: "text-muted-foreground",
                                      }
                                    )
                                  : subMenuItem.icon}
                              </div>
                              <div>
                                <div className="font-medium">
                                  {subMenuItem.title}
                                </div>
                                {subMenuItem.description && (
                                  <div className="text-muted-foreground text-xs mt-1">
                                    {subMenuItem.description}
                                  </div>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                }

                // For simple menu items without submenu, render as regular link
                return (
                  <div key={mainMenuItem.title} className="">
                    <Link
                      href={mainMenuItem.url}
                      className="block py-4 font-medium hover:text-accent-foreground"
                    >
                      {mainMenuItem.title}
                    </Link>
                  </div>
                );
              })}
            </Accordion>

            {/* Login Button */}
            <div className="mt-10">
              <RenderAuthButton
                className={loginClassName}
                isVisible={isLoginVisbile}
                onClick={onLoginClicked}
                text={loginText}
                urlLink={urlLoginUrl}
                variant={loginVariant}
                isInSheet={true}
              />
              {/* Register Button */}
              <RenderAuthButton
                className={registerClassName}
                isVisible={isRegisterVisible}
                onClick={onRegisterClicked}
                text={registerText}
                urlLink={urlRegisterUrl}
                variant={registerVariant}
                isInSheet={true}
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    );
  }
}

type RequiredButtonsProps = Required<Omit<ButtonProps, "onClick">> & {
  onClick?: () => void;
  isInSheet?: boolean;
};

function RenderAuthButton({
  className,
  isVisible,
  onClick,
  text,
  urlLink,
  variant,
  isInSheet = false,
}: RequiredButtonsProps) {
  return (
    <>
      {isVisible ? (
        <div
          className={`flex items-center space-x-4 ${
            isInSheet
              ? "hidden max-lg:flex w-full max-lg:gap-3 max-lg:flex-col"
              : " block max-lg:hidden"
          }`}
        >
          {onClick ? (
            <>
              <Button
                onClick={onClick}
                className={`h-10 ${
                  isInSheet && "w-full"
                } cursor-pointer select-none ${className}`}
                variant={variant}
              >
                <span>{text}</span>
              </Button>
            </>
          ) : (
            <Button
              className={`h-10 ${
                isInSheet && "w-full mt-5"
              } cursor-pointer select-none ${className}`}
              variant={variant}
              asChild
            >
              <a className="no-underline" href={urlLink}>
                {text}
              </a>
            </Button>
          )}
        </div>
      ) : (
        <div className="max-lg:hidden"></div>
      )}
    </>
  );
}

function ListItem({
  title,
  description,
  icon,
  children,
  href,
  ...props
}: ListItemProps) {
  return (
    <li {...props}>
      {/* The entire content is clickable, so Link should wrap the main section */}
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block   select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none 
          transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0">{icon && <>{icon}</>}</span>
            <div>
              <h3 className="leading-none font-medium text-[15px]">{title}</h3>
              {description && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {description}
                </p>
              )}
            </div>
          </div>

          {children && (
            <p className="mt-2 text-muted-foreground line-clamp-2 text-sm leading-snug">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
