import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

export const Spaces = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="/avatars/01.png" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium leading-none">Sofia Davis</p>
          <p className="text-muted-foreground text-sm">m@example.com</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="/avatars/01.png" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium leading-none">Sofia Davis</p>
          <p className="text-muted-foreground text-sm">m@example.com</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="/avatars/01.png" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium leading-none">Sofia Davis</p>
          <p className="text-muted-foreground text-sm">m@example.com</p>
        </div>
      </div>

      <Link
        to="spaces"
        className="border-muted hover:bg-muted text-muted-foreground flex items-center justify-center rounded-[5px] border-t-[1px] p-2"
      >
        View all spaces
      </Link>
    </>
  );
};
