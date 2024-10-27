import {cn, Radio, RadioGroup} from "@nextui-org/react";
import {CustomCommonCard} from "../../Commons";
import React from "react";

export const CustomRadio = (props) => {
    const {children, ...otherProps} = props;

    return (
        <Radio
            {...otherProps}
            color="default"
            classNames={{
                base: cn(
                    "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
                    "flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
                    "data-[selected=true]:border-default"
                ),
            }}
        >
            {children}
        </Radio>
    )
}

export const NuiRadioGroup = () => {
    return (
        <CustomCommonCard classes="max-w-full h-full"
                          header="Checkbox"
                          subHeader="NextUI checkbox logic"
                          updateDate="27-10-2024"
                          updateBy="Mizpuno Codex">
            <div className="flex justify-center w-full">
                <RadioGroup label="Plans" description="Selected plan can be changed at any time.">
                    <CustomRadio description="Up to 20 items"
                                 value="free">
                        Free
                    </CustomRadio>
                    <CustomRadio description="Unlimited items. $10 per month."
                                 value="pro">
                        Pro
                    </CustomRadio>
                    <CustomRadio description="24/7 support. Contact us for pricing."
                                 value="enterprise">
                        Enterprise
                    </CustomRadio>
                </RadioGroup>
            </div>
        </CustomCommonCard>
    );
}