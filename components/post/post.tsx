"use client";
import { BadgeCheck, Heart, UserRoundPlus } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { converteNumberToKOrM } from "@/src/utils/utils";

interface Props {
  username: string;
  avatar: string;
  verified: boolean;
  content: string;
  likes: number;
  comments: number;
}
export default function Post(props: Props) {
  const [isLoading] = useState(false);

  const renderLoadingPost = () => {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  };

  return isLoading ? (
    renderLoadingPost()
  ) : (
    <div className="flex justify-between p-2 gap-1 md:gap-4 mb-6">
      <div className="flex flex-col items-start h-full w-14">
        <Avatar className="h-10 md:h-12 w-10 md:w-12">
          <AvatarImage src={props.avatar} />
          <AvatarFallback>
            <Skeleton className="h-12 w-12 rounded-full" />
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col w-full gap-2">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-sm md:text-lg font-semibold text-zinc-50">
                {props.username}
              </span>
              {props.verified && (
                <BadgeCheck className="w-4 h-4 text-green-500" />
              )}
            </div>
            {/* <span className="text-xs md:text-sm text-muted-foreground">
                    @cadu       
                </span> */}
          </div>
          <Button className="w-8 h-6">
            <UserRoundPlus className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-sm md:text-base text-zinc-50">{props.content}</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 cursor-pointer">
            <Heart className="w-5 h-5 text-zinc-50" />
            <span className="text-xs md:text-sm font-semibold text-zinc-50">
              {converteNumberToKOrM(props.likes)}
            </span>
          </div>
          {/* <div className="flex items-center gap-1">
                <MessageCircle className="w-5 h-5" />
                <span className="text-xs md:text-sm font-semibold">298</span>
            </div> */}
        </div>
      </div>
    </div>
  );
}
