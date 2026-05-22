"use client";
import React from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const UserDropDown = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            console.log("Logout successful");
            router.push("/sign-in"); // redirect to sign-in page
          },
          onError: (ctx) => {
            console.error("Logout failed:", ctx.error);
          }
        },
      });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      {session ? (
        <div className="flex flex-row items-center justify-center gap-2">
          <h1 className="font-semibold">{session.user?.name}</h1>
          <Button
            onClick={handleLogout}
            size={"icon"}
            variant={"ghost"}
            className="rounded-full bg-slate-200 cursor-pointer hover:bg-slate-300 transition-colors">
            <LogOut className="w-4 h-4 text-red-500" />
          </Button>
        </div>
      ) : (
        <Link 
          href="/sign-in"
          className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors"
        >
          Sign In
        </Link>
      )}
    </>
  );
};

export default UserDropDown;