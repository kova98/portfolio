'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import * as React from 'react';
import { useState } from 'react';

interface RouteProps {
  href: string;
  label: string;
  scroll: boolean;
}

const routeList: RouteProps[] = [
  { href: '/#about', label: 'About', scroll: true },
  { href: '/#projects', label: 'Projects', scroll: true },
  { href: '/#blog', label: 'Blog', scroll: true },
  { href: '/#contact', label: 'Contact', scroll: true },
  { href: 'https://www.devjourney.io/u/kova98', label: 'Journal', scroll: false },
];

const scroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  console.log(window.location.pathname);
  if (window.location.pathname === '/') {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="top-0 z-40 w-full bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="h-14 px-4 w-screen flex justify-center items-center">
          {/* mobile */}
          <div className="flex md:hidden absolute left-5">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
                <Menu className="h-6 w-6" />
              </Button>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map((route) => (
                    <a
                      rel="noreferrer noopener"
                      key={route.label}
                      href={route.href}
                      onClick={(e) => {
                        setIsOpen(false);
                        if (!route.scroll) return;
                        scroll(e, route.label.toLowerCase());
                      }}
                      className={buttonVariants({ variant: 'ghost' })}
                    >
                      {route.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          
          <NavigationMenuItem className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: 'ghost',
                })}`}
                onClick={(e) => {
                  if (!route.scroll) return;
                  scroll(e, route.label.toLowerCase());
                }}
              >
                {route.label}
              </a>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
