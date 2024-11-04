import {
  Cloud,
  LayoutGrid,
  Link,
  Monitor,
  Mountain,
  Quote,
  Smartphone,
} from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const Toolbar = () => {
  return (
    <div className=" border bg-amber-300 flex items-center gap-3 p-3 rounded-lg shadow-sm absolute bottom-4 left-1/2 transform -translate-x-1/2">
      <Button className="bg-[#4ADE80] hover:bg-[#4ADE80]/90 text-white font-medium">
        Share my canvas
      </Button>

      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Link className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Mountain className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Quote className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Cloud className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <LayoutGrid className="h-4 w-4" />
        </Button>
      </div>

      <Separator orientation="vertical" className="h-6" />

      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Monitor className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Smartphone className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Toolbar;
