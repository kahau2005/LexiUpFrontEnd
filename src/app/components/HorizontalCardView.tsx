import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "../../components/ui/carousel";

interface HorizontalCardViewProps<T extends object> {
  data: T[];
  CardComponent: React.ComponentType<{ item: T }>;
}

export default function HorizontalCardView<T extends object>({
  data,
  CardComponent,
}: HorizontalCardViewProps<T>) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4 flex gap-2">
        {data.map((item, index) => (
          <CarouselItem key={index} className="pl-4 basis-[42%] shrink-0">
            <CardComponent item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
