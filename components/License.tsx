"use client"

import Link from "next/link";
import {
  ListFilter,
  PlusCircle,
  Download,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent } from "@/components/ui/tabs";


import React from "react";
import Nav from "@/app/sidenav/Nav";
import Side from "@/app/sidenav/Side";

export function License() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Nav/>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Software License</CardTitle>
                  <CardDescription>
                    Manage your license and view their status.
                  </CardDescription>
                  <div className="flex items-end justify-end">
                      <div className="flex items-end gap-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                          <Button size="sm" variant="outline" className="h-7 gap-1 bg-yellow-300 text-neutral-950"> 
                              <ListFilter className="h-3.5 w-3.5" />
                              <span className="sr-only sm:not-sr-only">
                                Filter
                              </span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuCheckboxItem checked>
                              All
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>
                              Approved
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>
                              Declined
                            </DropdownMenuCheckboxItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <Button size="sm" variant="outline" className="h-7 gap-1 bg-yellow-300 text-neutral-950">
                          <Download className="h-3.5 w-3.5" />
                          <span className="sr-only sm:not-sr-only">Export</span>
                        </Button>
                        <Link href="/createlicense">
                        <Button size="sm" variant="outline" className="h-7 gap-1 bg-yellow-300 text-neutral-950">
                          <PlusCircle className="h-3.5 w-3.5" />
                          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                            Add License
                          </span>
                        </Button>
                      </Link>
                      </div>
                    </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>License</TableHead>
                        <TableHead>Product Key</TableHead>
                        <TableHead>Expiration Date</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Licensed to Email
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Licensed to Name
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Manufacturer
                        </TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Avail</TableHead>
                        <TableHead>Check in/Check out</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableRow className="text-xs text-muted-foreground">
                      No matching records found
                    </TableRow>
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
