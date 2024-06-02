"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const Loginpage = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Login User</CardTitle>
            <CardDescription>Login with your google account.</CardDescription>
          </CardHeader>
          <CardContent className="grid w-full gap-4 items-center">
            <Button
              variant="outline"
              onClick={() => signIn("google", { callbackUrl: "/" })}
            >
              <FcGoogle className="mr-2 w-6 h-6" />
              <span>Continue with Google</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Loginpage;
