import React from 'react'
import {Button, Card, CardBody, CardFooter, CardHeader, Divider, NextUIProvider} from "@nextui-org/react";

const Header = () => (
    <div className="bg-slate-900 p-10">
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

const Commons = () => {
    return (
        <NextUIProvider>
            <Header/>
            <div id="board" className="flex flex-wrap justify-center gap-5 px-5">
                <div>
                    <Card className="max-w-[20rem] my-5">
                        <CardHeader className="flex flex-col">
                            <p className="text-md">Buttons</p>
                            <p className="text-small text-default-500">all usage button styles.</p>
                        </CardHeader>
                        <Divider/>
                        <CardBody>
                            <div className="flex gap-4">
                                <Button color="default" variant="bordered">Primary</Button>
                                <Button color="primary" variant="bordered">Primary</Button>
                                <Button color="secondary" variant="bordered">Secondary</Button>
                                <Button color="success" variant="bordered">Secondary</Button>
                                <Button color="warning" variant="bordered">Warning</Button>
                                <Button color="danger" variant="bordered">Danger</Button>
                            </div>
                        </CardBody>
                        <Divider/>
                        <CardFooter>
                            <div className="flex justify-between w-full px-5">
                                <div>
                                    <p className="text-md">Latest Update : </p>
                                    <p className="text-small text-default-500">17-10-2024</p>
                                </div>
                                <div>
                                    <p className="text-md">Update By : </p>
                                    <p className="text-small text-default-500">Mizpuno Codex</p>
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </NextUIProvider>
    )
}

export default Commons