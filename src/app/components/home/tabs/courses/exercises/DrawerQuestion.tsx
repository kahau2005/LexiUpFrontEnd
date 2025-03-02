import { useState } from "react";
import { Button } from "@heroui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@heroui/drawer";
import { Logs } from "lucide-react";
import GridQuestion from "@/app/components/home/tabs/courses/exercises/GridQuestion";
import DialogConfirm from "@/app/components/home/tabs/courses/exercises/DialogConfirm";

export default function DrawerQuestion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button className="bg-[#353535]" onPress={() => setIsOpen(true)}>
        <Logs color="white"/>
      </Button>
      <Drawer backdrop="opaque" placement="bottom" isOpen={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent>
          <>
            <DrawerHeader className="flex flex-col gap-1">Log in</DrawerHeader>
            <DrawerBody>
                <GridQuestion/>
            </DrawerBody>
            <DrawerFooter className="mt-5 mb-3">
              <Button className="bg-transparent" variant="flat" onPress={() => setIsOpen(false)}>
                Close
              </Button>
              <DialogConfirm/>
            </DrawerFooter>
          </>
        </DrawerContent>
      </Drawer>
    </>
  );
}
