import * as React from "react";
import { FolderIcon, HomeIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

type SideNavigationItem = {
  name: string;
  to: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

export const SideNavigation = () => {
  const navigation = [
    { name: "Dashboard", to: ".", icon: HomeIcon },
    { name: "Discussions", to: "./discussions", icon: FolderIcon },
  ].filter(Boolean) as SideNavigationItem[];

  return (
    <>
      {navigation.map((item, index) => (
        <NavLink
          end={index === 0}
          key={item.name}
          to={item.to}
          className={({ isActive }) =>
            clsx(
              "text-gray-300 hover:bg-gray-700 hover:text-white",
              "group flex items-center px-2 py-2 text-base font-medium rounded-md",
              isActive ? "bg-gray-900 text-white" : ""
            )
          }
        >
          <item.icon
            className={clsx(
              "text-gray-400 group-hover:text-gray-300",
              "mr-4 flex-shrink-0 h-6 w-6"
            )}
            aria-hidden="true"
          />
          {item.name}
        </NavLink>
      ))}
    </>
  );
};
