import {Checkbox, CheckboxGroup, Chip, cn} from "@nextui-org/react";
import {CustomCommonCard} from "../../Commons";
import React from "react";

export const NuiCheckbox = () => {
    const [isSelected, setIsSelected] = React.useState(false)

    return (
        <CustomCommonCard classes="max-w-full h-full"
                          header="Checkbox"
                          subHeader="NextUI checkbox logic"
                          updateDate="26-10-2024"
                          updateBy="Mizpuno Codex">
            <div className="flex justify-center w-full">
                <Checkbox  classNames={{
                               base: cn(
                                   "inline-flex max-w-full w-full bg-content1",
                                   "hover:bg-content2 items-center justify-start",
                                   "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
                                   "data-[selected=true]:border-default",
                               ),
                               label: "w-full",
                           }}
                           isSelected={isSelected}
                           onValueChange={setIsSelected}
                           color="default">
                    <div className="flex justify-between">
                        <div className="flex flex-col items-start gap-1">
                            <div className="font-bold">Option 1</div>
                            <div>description of option 1</div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                            <div>status</div>
                            {isSelected && (<Chip color="success" size="sm" variant="flat">True</Chip>)}
                            {!isSelected && (<Chip color="danger" size="sm" variant="flat">False</Chip>)}
                        </div>
                    </div>
                </Checkbox>
            </div>
        </CustomCommonCard>
    );
}

export const NuiCheckboxGroup = () => {
    const options = [
        { text: "Bangkok", value: "01" },
        { text: "ChiangMai", value: "02" },
        { text: "Nakhon Pathom", value: "03" }
    ];

    const [isInvalid, setIsInvalid] = React.useState(false);
    const [selected, setSelected] = React.useState([...options.map(item => item.value)]);

    return (
        <CustomCommonCard classes="max-w-full h-full"
                          header="Checkbox Group"
                          subHeader="NextUI checkbox group logic"
                          updateDate="27-10-2024"
                          updateBy="Mizpuno Codex">
            <div className="flex justify-center w-full">
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-content1 rounded-lg p-4">
                        <CheckboxGroup label="Select Provinces"
                                       color="default"
                                       isRequired
                                       value={selected}
                                       isInvalid={isInvalid}
                                       onValueChange={(value) => {
                                           setSelected(value);
                                           console.log(value)
                                           setIsInvalid(value.length < 1);
                                       }}>
                            {options.map(item => (
                                <Checkbox key={item.value} value={item.value}>{item.text}</Checkbox>
                            ))}
                        </CheckboxGroup>
                    </div>
                    <div className="bg-content1 rounded-lg p-4">
                        <p className="mb-2">Selected:</p>
                        <div className="flex flex-col gap-2">
                            {options
                                .filter(item => selected.includes(item.value))
                                .map(item => (
                                    <Chip color="primary" variant="dot">{item.text}</Chip>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </CustomCommonCard>
    );
}