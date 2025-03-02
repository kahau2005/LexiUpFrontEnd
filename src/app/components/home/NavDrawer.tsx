"use client"
import { useContext } from "react";
import { Button } from "@heroui/button";
import {
  Drawer,
  DrawerContent,
  DrawerBody,
} from "@heroui/drawer";
import { Menu } from "lucide-react";
import NavBar from "@/app/components/home/NavBar";
import { NavDrawerContext } from "@/app/contexts/NavDrawerContext";

export default function NavDrawer() {
  const navDrawerContext = useContext(NavDrawerContext)

  return (
    <>
      
        <Button className='bg-[#363636] w-[50px] h-[40px] p-2' onPress={() => navDrawerContext?.setOpen(true)}>
            <Menu color='white'/>
        </Button>
      <Drawer backdrop="opaque" placement="bottom" isOpen={navDrawerContext?.isOpen} onOpenChange={navDrawerContext?.setOpen}>
        <DrawerContent className="bg-transparent [&>button[aria-label='Close']]:hidden">
          
            <DrawerBody>
                <NavBar/>
            </DrawerBody>
          
        </DrawerContent>
      </Drawer>
    </>
  );
}

