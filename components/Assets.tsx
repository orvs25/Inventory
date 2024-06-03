
"use client"
import Link from "next/link";
import {
  ListFilter,
  MoreHorizontal,
  PlusCircle,
  Download,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
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
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent,} from "@/components/ui/tabs";


import React from "react";
import Nav from "@/app/sidenav/Nav";
import Side from "@/app/sidenav/Side";

export function Assets() {
  return (
    <div className="flex min-h-screen w-full flex-col ">
      <Nav />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Assets</CardTitle>
                  <CardDescription>
                    Manage your assets and view their status.
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
                          <DropdownMenuSeparator />
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
                      <Link href="/createassets">
                        <Button size="sm" variant="outline" className="h-7 gap-1 bg-yellow-300 text-neutral-950">
                          <PlusCircle className="h-3.5 w-3.5" />
                          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                            Add Asset
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
                        <TableHead>Added by</TableHead>
                        <TableHead>Model</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Serial
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Category
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Created at
                        </TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Mecca Denise Dagami
                        </TableCell>
                        <TableCell className="font-medium">
                          Plantronics Headphones
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Deployed</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          KGH123GHJ
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Headphones
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-07-12 10:42 AM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Orville Mon
                        </TableCell>
                        <TableCell className="font-medium">
                          Plantronics Headphones
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">Spare</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          ASDJ23HKJD1324
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Headphones
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-10-18 03:21 PM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Kile Santiago
                        </TableCell>
                        <TableCell className="font-medium">
                          Plantronics Headphones
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">Spare</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          SHDKKJK123123
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Headphones
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-11-29 08:15 AM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Kent Escala
                        </TableCell>
                        <TableCell className="font-medium">
                          Lenovo Thinkpad
                        </TableCell>
                        <TableCell>
                          <Badge variant="destructive">Defective</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          ASDKJASDKJ123567
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Laptop
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-12-25 11:59 PM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Ask Ketchum
                        </TableCell>
                        <TableCell className="font-medium">
                          DELL Monitor
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">Spare</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          ASHJKDK1234128
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Monitor
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2024-01-01 12:00 AM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Coco Martin
                        </TableCell>
                        <TableCell className="font-medium">
                          Plantronics Headphones
                        </TableCell>
                        <TableCell>
                          <Badge variant="destructive">Defective</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          JLSDIKL123789
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Headphones
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2024-02-14 02:14 PM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    </TableBody>
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
            <TabsContent value="deployed">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Assets</CardTitle>
                  <CardDescription>
                    Manage your assets and view their status.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Added by</TableHead>
                        <TableHead>Model</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Serial
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Category
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Created at
                        </TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Mecca Denise Dagami
                        </TableCell>
                        <TableCell className="font-medium">
                          Plantronics Headphones
                        </TableCell>
                        <TableCell>
                          <Badge className="text-white-foreground">Deployed</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          KGH123GHJ
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Headphones
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-07-12 10:42 AM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-1</strong> of <strong>32</strong> products
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="spare">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Assets</CardTitle>
                  <CardDescription>
                    Manage your assets and view their status.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Added by</TableHead>
                        <TableHead>Model</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Serial
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Category
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Created at
                        </TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Orville Mon
                        </TableCell>
                        <TableCell className="font-medium">
                          Plantronics Headphones
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">Spare</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          ASDJ23HKJD1324
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Headphones
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-10-18 03:21 PM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Kile Santiago
                        </TableCell>
                        <TableCell className="font-medium">
                          Plantronics Headphones
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">Spare</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          SHDKKJK123123
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Headphones
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-11-29 08:15 AM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Ask Ketchum
                        </TableCell>
                        <TableCell className="font-medium">
                          DELL Monitor
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">Spare</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          ASHJKDK1234128
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Monitor
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2024-01-01 12:00 AM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    </TableBody>
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
            <TabsContent value="defective">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Assets</CardTitle>
                  <CardDescription>
                    Manage your assets and view their status.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Added by</TableHead>
                        <TableHead>Model</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Serial
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Category
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Created at
                        </TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Kent Escala
                        </TableCell>
                        <TableCell className="font-medium">
                          Lenovo Thinkpad
                        </TableCell>
                        <TableCell>
                          <Badge variant="destructive">Defective</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          ASDKJASDKJ123567
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Laptop
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-12-25 11:59 PM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Coco Martin
                        </TableCell>
                        <TableCell className="font-medium">
                          Plantronics Headphones
                        </TableCell>
                        <TableCell>
                          <Badge variant="destructive">Defective</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          JLSDIKL123789
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Headphones
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2024-02-14 02:14 PM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    </TableBody>
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
