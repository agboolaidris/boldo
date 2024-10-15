import { Button } from "@ui/Button";
import { Input } from "@ui/Input";
import { Title } from "@ui/Text";
import React from "react";

export const Subscription = () => {
  return (
    <div className="">
      <div>
        <Title className="!text-white text-center">
          An enterprise template to ramp up
          <br /> your company website
        </Title>
      </div>

      <div className="mt-8 flex items-center w-full max-w-xl mx-auto gap-2">
        <div className="flex-1">
          <Input
            intent="fill"
            className="px-8"
            placeholder="Your email address"
          />
        </div>
        <Button kinds="active" size="lg" rounded>
          Start now
        </Button>
      </div>
    </div>
  );
};
