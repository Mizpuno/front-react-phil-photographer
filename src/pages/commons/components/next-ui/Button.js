import {CustomCommonCard} from "../../Commons";
import React from "react";
import {Button, Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";

export const NuiButton = () => {
    const variants = ["solid", "fade", "bordered", "light", "flat", "ghost", "shadow"];

    const Content = ({variant}) => {
        return (
            <PopoverContent>
                <div className="px-1 py-2">
                    <div className="text-small font-bold">{variant}</div>
                    <div className="text-tiny">This is button on variant: {variant}</div>
                </div>
            </PopoverContent>
        );
    }

    return (
        <CustomCommonCard classes="max-w-full h-full"
                          header="Buttons"
                          subHeader="NextUI button dark theme styles"
                          updateDate="26-10-2024"
                          updateBy="Mizpuno Codex">
            <div className="flex flex-wrap justify-center gap-4 h-full">
                {variants.map((property => (
                    <Popover key={property} placemen="top" color="default">
                        <PopoverTrigger>
                            <Button variant={property}>{property}</Button>
                        </PopoverTrigger>
                        <Content variant={property}/>
                    </Popover>
                )))}
            </div>
        </CustomCommonCard>
    );
}