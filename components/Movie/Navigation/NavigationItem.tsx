import { ChevronDownIcon } from "@/components/ui/icon";
import { Menu } from "@/components/ui/menu";
import React, { ReactNode } from "react";
import { Pressable, Text } from "react-native";

const NavigationItem = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <Menu
      placement="bottom"
      offset={5}
      disabledKeys={["Settings"]}
      className="w-[9rem]"
      trigger={({ ...triggerProps }) => {
        return (
          <Pressable
            className="flex-row items-center gap-1 justify-center"
            {...triggerProps}
          >
            <Text>{title}</Text>
            <ChevronDownIcon width={15} height={15} />
          </Pressable>
        );
      }}
    >
      {children}
    </Menu>
  );
};

export default NavigationItem;
