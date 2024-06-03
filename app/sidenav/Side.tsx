import {
  LineChart,
  Package,
  Settings,
  Users2,
  AlignJustify,
  ActivityIcon,
  KeyboardIcon,
  Droplets,
  InboxIcon,
  FilePlusIcon,
  HomeIcon,
  File,
  ArmchairIcon,
  DropletsIcon,
  Car,
  CarIcon,
  MicrowaveIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { Linechart } from "../analyticcomponent/linechart";

export default function Side() {
  return (
    <div className="absolute left-0 w- flex-col items-center bg-background bg-yellow-300 ">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <AlignJustify className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>

            <a href="/assets">
              <DropdownMenuItem>
                <ActivityIcon className="mr-2 h-4 w-4" />
                <span>Activity</span>
              </DropdownMenuItem>
            </a>

            <a href="/analytics">
              <DropdownMenuItem>
                <LineChart className="mr-2 h-4 w-4" />
                <span>Analytics</span>
              </DropdownMenuItem>
            </a>

            <a href="/license">
              <DropdownMenuItem>
                <File className="mr-2 h-4 w-4" />
                <span>License</span>
              </DropdownMenuItem>
            </a>

            <a href="/accessories">
              <DropdownMenuItem>
                <KeyboardIcon className="mr-2 h-4 w-4" />
                <span>Accessories</span>
              </DropdownMenuItem>
            </a>

            <a href="/consumables">
              <DropdownMenuItem>
                <DropletsIcon className="mr-2 h-4 w-4" />
                <span>Consumables</span>
              </DropdownMenuItem>
            </a>

            <a href="/component">
              <DropdownMenuItem>
                <InboxIcon className="mr-2 h-4 w-4" />
                <span>Components</span>
              </DropdownMenuItem>
            </a>

            <a href="/furnitures">
              <DropdownMenuItem>
                <ArmchairIcon className="mr-2 h-4 w-4" />
                <span>Furnitures</span>
              </DropdownMenuItem>
            </a>

            <a href="/vehicle">
              <DropdownMenuItem>
                <CarIcon className="mr-2 h-4 w-4" />
                <span>Vehicle</span>
              </DropdownMenuItem>
            </a>

            <a href="/appliances">
              <DropdownMenuItem>
                <MicrowaveIcon className="mr-2 h-4 w-4" />
                <span>Appliances</span>
              </DropdownMenuItem>
            </a>

            <a href="/users">
              <DropdownMenuItem>
                <Users2 className="mr-2 h-4 w-4" />
                <span>Users</span>
              </DropdownMenuItem>
            </a>

            <a href="/settings">
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
            </a>


          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
