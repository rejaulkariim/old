"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Camera,
  ChevronDown,
  Clock,
  Cloud,
  LayoutGrid,
  Link as LinkIcon,
  MessageSquare,
  Monitor,
  Mountain,
  Palette,
  Plus,
  Quote,
  Share2,
  Shuffle,
  Smartphone,
  Twitter,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function Test() {
  const [activeView, setActiveView] = useState<"desktop" | "mobile">("desktop");
  const [links, setLinks] = useState<string[]>([]);
  const [newLink, setNewLink] = useState("");
  const [startups, setStartups] = useState<
    Array<{ id: string; name: string; description: string }>
  >([]);
  const [newStartup, setNewStartup] = useState({ name: "", description: "" });
  const [userDetails, setUserDetails] = useState({
    name: "Your name",
    bio: "Your bio...",
    avatar: "/placeholder.svg?height=128&width=128",
  });
  const [pageAppearance, setPageAppearance] = useState({
    backgroundColor: "#ffffff",
    textColor: "#1e293b",
    accentColor: "#3b82f6",
  });
  const [startupsTitle, setStartupsTitle] = useState("My Startups");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.body.style.backgroundColor = pageAppearance.backgroundColor;
    document.body.style.color = pageAppearance.textColor;
  }, [pageAppearance]);

  const addLink = () => {
    if (newLink) {
      setLinks([...links, newLink]);
      setNewLink("");
    }
  };

  const removeLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const addStartup = () => {
    if (newStartup.name && newStartup.description) {
      setStartups([...startups, { id: Date.now().toString(), ...newStartup }]);
      setNewStartup({ name: "", description: "" });
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserDetails((prev) => ({
          ...prev,
          avatar: e.target?.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(startups);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setStartups(items);
  };

  return (
    <>
      {/* Toolbar */}
      <Card className=" border bg-card flex items-center gap-3 p-3 rounded-lg shadow-sm absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center justify-between gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                style={{
                  backgroundColor: pageAppearance.accentColor,
                  color: pageAppearance.backgroundColor,
                }}
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <LinkIcon className="mr-2 h-4 w-4" />
                <span>Copy link</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Twitter className="mr-2 h-4 w-4" />
                <span>Share on Twitter</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <LinkIcon className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Add Link</h4>
                    <p className="text-sm text-muted-foreground">
                      Enter a URL to add to your profile.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <Input
                        id="link"
                        value={newLink}
                        onChange={(e) => setNewLink(e.target.value)}
                        placeholder="https://example.com"
                      />
                      <Button onClick={addLink} size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    {links.map((link, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:underline"
                          style={{ color: pageAppearance.accentColor }}
                        >
                          {link}
                        </a>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeLink(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Mountain className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Add Startup</h4>
                    <p className="text-sm text-muted-foreground">
                      Enter your startup details.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={newStartup.name}
                      onChange={(e) =>
                        setNewStartup({
                          ...newStartup,
                          name: e.target.value,
                        })
                      }
                      placeholder="Startup name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={newStartup.description}
                      onChange={(e) =>
                        setNewStartup({
                          ...newStartup,
                          description: e.target.value,
                        })
                      }
                      placeholder="Short description"
                    />
                  </div>
                  <Button onClick={addStartup}>Add Startup</Button>
                </div>
              </PopoverContent>
            </Popover>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Quote className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Cloud className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Palette className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80" side="top">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">
                      Page Appearance
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Customize your page colors.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="bgColor">Background Color</Label>
                    <Input
                      id="bgColor"
                      type="color"
                      value={pageAppearance.backgroundColor}
                      onChange={(e) =>
                        setPageAppearance((prev) => ({
                          ...prev,
                          backgroundColor: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="textColor">Text Color</Label>
                    <Input
                      id="textColor"
                      type="color"
                      value={pageAppearance.textColor}
                      onChange={(e) =>
                        setPageAppearance((prev) => ({
                          ...prev,
                          textColor: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="accentColor">Accent Color</Label>
                    <Input
                      id="accentColor"
                      type="color"
                      value={pageAppearance.accentColor}
                      onChange={(e) =>
                        setPageAppearance((prev) => ({
                          ...prev,
                          accentColor: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <Separator orientation="vertical" className="h-8" />

          <div className="flex items-center gap-1">
            <Button
              variant={activeView === "desktop" ? "secondary" : "ghost"}
              size="icon"
              className="h-8 w-8"
              onClick={() => setActiveView("desktop")}
              aria-label="Desktop view"
            >
              <Monitor className="h-4 w-4" />
            </Button>
            <Button
              variant={activeView === "mobile" ? "secondary" : "ghost"}
              size="icon"
              className="h-8 w-8"
              onClick={() => setActiveView("mobile")}
              aria-label="Mobile view"
            >
              <Smartphone className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>

      <div
        className="min-h-screen p-4 transition-colors duration-200"
        style={{
          backgroundColor: pageAppearance.backgroundColor,
          color: pageAppearance.textColor,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - User Info */}
            <div className="w-full lg:w-1/3 space-y-8">
              {/* Profile Section */}
              <div className="space-y-6">
                <div className="relative w-32 h-32 mx-auto">
                  <Image
                    src={userDetails.avatar}
                    height={128}
                    width={128}
                    alt="User avatar"
                    className="w-full h-full rounded-full object-cover border-2 border-gray-200"
                  />
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute bottom-0 right-0 rounded-full"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    className="hidden"
                    accept="image/*"
                  />
                </div>

                <div className="space-y-4 text-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <h1 className="text-4xl font-bold cursor-pointer hover:opacity-80 transition-opacity">
                        {userDetails.name}
                      </h1>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input
                            id="name"
                            value={userDetails.name}
                            onChange={(e) =>
                              setUserDetails((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="bio" className="text-right">
                            Bio
                          </Label>
                          <Textarea
                            id="bio"
                            value={userDetails.bio}
                            onChange={(e) =>
                              setUserDetails((prev) => ({
                                ...prev,
                                bio: e.target.value,
                              }))
                            }
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <DialogTrigger asChild>
                        <Button type="submit">Save changes</Button>
                      </DialogTrigger>
                    </DialogContent>
                  </Dialog>
                  <p className="text-lg">{userDetails.bio}</p>
                </div>

                {/* Social Links */}
                <div className="flex flex-col items-center space-y-2">
                  <Card className="w-full bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                    <a href="#" className="flex items-center gap-2 px-4 py-2">
                      <Twitter className="h-5 w-5 text-[#1DA1F2]" />
                      <span>Twitter</span>
                    </a>
                  </Card>
                  {links.map((link, index) => (
                    <Card
                      key={index}
                      className="w-full bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2"
                      >
                        <LinkIcon
                          className="h-5 w-5"
                          style={{ color: pageAppearance.accentColor }}
                        />
                        <span className="truncate">{link}</span>
                      </a>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Stats and Toolbar */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm justify-center">
                  <Shuffle className="h-4 w-4" />
                  <Clock className="h-4 w-4" />
                  <MessageSquare className="h-4 w-4" />
                  <Separator orientation="vertical" className="h-4" />
                  <span>3 Views Yesterday</span>
                </div>
              </div>
            </div>

            {/* Right Column - Startups */}
            <div className="w-full lg:w-2/3">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">{startupsTitle}</h2>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const newTitle = prompt(
                      "Enter new title for startups section:",
                      startupsTitle
                    );
                    if (newTitle) setStartupsTitle(newTitle);
                  }}
                >
                  Edit Title
                </Button>
              </div>
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="startups">
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      {startups.map((startup, index) => (
                        <Draggable
                          key={startup.id}
                          draggableId={startup.id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Card className="h-full">
                                <CardHeader>
                                  <CardTitle>{startup.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <CardDescription>
                                    {startup.description}
                                  </CardDescription>
                                </CardContent>
                              </Card>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                      {startups.length === 0 && (
                        <Card className="col-span-2">
                          <CardContent className="flex items-center justify-center h-32">
                            <p className="text-muted-foreground">
                              No startups added yet. Click the mountain icon to
                              add one!
                            </p>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
