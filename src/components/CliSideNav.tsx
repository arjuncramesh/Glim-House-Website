import React from "react";
import Link from "next/link";

function CliSideNav() {
  return (
    <div>
      <div>
        <ul className="flex flex-col space-y-2">
          <li>
            <strong className="block text-xs font-medium uppercase text-gray-400">
              Intro
            </strong>
            <ul className="mt-2 space-y-1">
              <li>
                <Link
                  href="/cli"
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  Overiew
                </Link>
              </li>
              <li>
                <Link
                  href="cli/requirements"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Requirements
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <strong className="block text-xs font-medium uppercase text-gray-400">
              Commands
            </strong>
            <ul className="mt-2 space-y-1">
              <li>
                <Link
                  href="cli/create-app"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Create App
                </Link>
              </li>
              <li>
                <Link
                  href="cli/generate"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Generate
                </Link>
              </li>
              <li>
                <Link
                  href="cli/add"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Add
                </Link>
              </li>
              <li>
                <Link
                  href="cli/clone"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Clone
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CliSideNav;
