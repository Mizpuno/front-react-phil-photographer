import React from 'react'
import {Card, CardBody, CardFooter, CardHeader, Divider, NextUIProvider} from "@nextui-org/react";
import {
    GridCol,
    GridColHover,
    GridColStartEndColSpan,
    GridRow,
    GridRowHover,
    GridRowStartEndRowSpan
} from "./components/tailwinds/Grid";
import {NuiButton} from "./components/next-ui/Button";
import {NuiCheckbox, NuiCheckboxGroup} from "./components/next-ui/Checkbox";
import {NuiRadioGroup} from "./components/next-ui/RadioGroup";

const Header = () => (
    <div className="bg-neutral-900 p-10">
        <div className="flex justify-center items-center">
            <h1 className="text-center text-white text-3xl font-bold">Welcome to a commons board 1.0</h1>
            <i className="pl-3 md:inline hidden">
                <img src="/assets/g1172.png" alt="Icon" width={"24"} height={"24"}/>
            </i>
        </div>
        <h3 className="text-center text-white text-lg">
            this board contain free-style of testing any components.
        </h3>
    </div>
)

export const EmptyCard = () => {
    return (
        <Card className="my-5 p-4 border-default border-dashed border-2 h-full bg-transparent rounded-lg">
            <div className="flex justify-center items-center w-full h-full">
                <p>Empty</p>
            </div>
        </Card>
    )
}

export const CustomCommonCard = ({classes, styles, header, subHeader, updateDate, updateBy,
                                     footerCenter = false, children}) => {
    return (
        <Card className={classes + " my-5"} style={styles}>
            <CardHeader className="flex flex-col">
                <p className="text-md">{header}</p>
                <p className="text-small text-default-500">{subHeader}</p>
            </CardHeader>
            <Divider/>
            <CardBody style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                {children}
            </CardBody>
            <Divider/>
            <CardFooter>
                <div className={`flex w-full px-5 ${footerCenter ? 'justify-center gap-10' : 'justify-between'}`}>
                    <div>
                        <p className="text-md">Latest Update : </p>
                        <p className="text-small text-default-500">{updateDate}</p>
                    </div>
                    <div>
                        <p className="text-md">Update By : </p>
                        <p className="text-small text-default-500">{updateBy}</p>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}

const Commons = () => {
    return (
        <NextUIProvider>
            <main className="dark-phil text-foreground">
                <Header/>
                <div id="board" className="flex flex-wrap justify-center gap-5 px-5">
                    <div className="grid md:grid-cols-6 grid-cols-1 gap-4">
                        {/* Buttons */}
                        <div className="md:col-span-2">
                            <NuiButton/>
                        </div>

                        {/* Checkboxes */}
                        <div className="md:col-span-2">
                            <NuiCheckbox/>
                        </div>

                        <div className="md:col-span-2">
                            <NuiCheckboxGroup/>
                        </div>

                        <div className="md:col-span-2">
                            <NuiRadioGroup/>
                        </div>

                        <div className="md:col-span-2 md:block hidden">
                            <EmptyCard/>
                        </div>

                        <div className="md:col-span-2 md:block hidden">
                            <EmptyCard/>
                        </div>
                    </div>
                    <div>
                        {/* Grid Columns */}
                        <GridCol/>
                        <GridColHover/>
                        <GridColStartEndColSpan/>

                        {/* Grid Rows */}
                        <GridRow/>
                        <GridRowHover/>
                        <GridRowStartEndRowSpan/>
                    </div>
                </div>
            </main>
        </NextUIProvider>
    )
}

export default Commons