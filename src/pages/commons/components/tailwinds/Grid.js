import React from "react";
import {colStyle, colStyleEmpty} from "../../Styles";
import {CustomCommonCard} from "../../Commons";

export const GridCol = () => {
    return (
        <CustomCommonCard styles={{width: '80vw',}}
                          header="Grid Column"
                          subHeader="Tailwinds grid column logic"
                          updateDate="26-10-2024"
                          updateBy="Mizpuno Codex"
                          footerCenter={true}>
            <div className="grid grid-cols-4 gap-4">
                <div style={colStyle}>col-1</div>
                <div style={colStyleEmpty}>empty</div>
                <div style={colStyleEmpty}>empty</div>
                <div style={colStyle}>col-2</div>
                <div style={colStyle}>col-3</div>
                <div className="grid grid-cols-subgrid col-span-3">
                    <div style={colStyleEmpty}>empty</div>
                    <div className="col-start-2 col-span-2" style={colStyle}>col-4 <span className="text-gray-400">col-start-2 col-span-2</span>
                    </div>
                </div>
            </div>
        </CustomCommonCard>
    );
}

export const GridColHover = () => {
    return (
        <CustomCommonCard styles={{width: '80vw',}}
                          header="Grid Column Hover"
                          subHeader="Tailwinds grid hover action"
                          updateDate="26-10-2024"
                          updateBy="Mizpuno Codex"
                          footerCenter={true}>
            <div className="grid grid-cols-2 hover:grid-cols-6 gap-4 my-3 group">
                <div style={colStyle}>col 1</div>
                <div style={colStyle}>col 2</div>
                <div className="col-span-4 hidden group-hover:block" style={colStyleEmpty}>empty</div>
            </div>
        </CustomCommonCard>
    );
}

export const GridColStartEndColSpan = () => {
    return (
        <CustomCommonCard styles={{width: '80vw',}}
                          header="Grid Column Placement"
                          subHeader="Tailwinds grid column start, end and span"
                          updateDate="26-10-2024"
                          updateBy="Mizpuno Codex"
                          footerCenter={true}>
            <div className="grid grid-cols-6 gap-4 my-3">
                <div style={colStyleEmpty}>empty</div>
                <div className="col-start-2 col-span-4" style={colStyle}>col-1 <span className="text-gray-400">col-start-2 col-span-4</span></div>
                <div style={colStyleEmpty}>empty</div>
                <div className="col-start-1 col-end-3" style={colStyle}>col-2 <span className="text-gray-400">col-start-1 col-end-3</span></div>
                <div className="col-start-3 col-end-5" style={colStyleEmpty}>empty</div>
                <div className="col-end-7 col-span-2" style={colStyle}>col-3 <span className="text-gray-400">col-end-7 col-span-2</span></div>
                <div className="col-start-1 col-end-7" style={colStyle}>col-4 <span className="text-gray-400">col-start-1 col-end-7</span></div>
            </div>
        </CustomCommonCard>
    );
}

export const GridRow = () => {
    return (
        <CustomCommonCard styles={{width: '80vw', }}
                          header="Grid Row"
                          subHeader="Tailwinds grid row logic"
                          updateDate="26-10-2024"
                          updateBy="Mizpuno Codex"
                          footerCenter={true}>
            <div className="grid grid-rows-4 grid-flow-col gap-4 my-3">
                <div style={colStyle}>col-1</div>
                <div style={colStyle}>col-2</div>
                <div style={colStyleEmpty}>empty</div>
                <div style={colStyleEmpty}>empty</div>
                <div style={colStyle}>col-3</div>
                <div className="grid grid-rows-subgrid row-span-5">
                    <div className="row-span-2" style={colStyleEmpty}>empty</div>
                    <div className="row-end-6 row-span-3" style={colStyle}>col-4 <span className="text-gray-400">row-end-6 row-span-3</span>
                    </div>
                </div>
            </div>
        </CustomCommonCard>
    );
}

export const GridRowHover = () => {
    return (
        <CustomCommonCard styles={{width: '80vw',}}
                          header="Grid Row Hover"
                          subHeader="Tailwinds grid row hover action"
                          updateDate="26-10-2024"
                          updateBy="Mizpuno Codex"
                          footerCenter={true}>
            <div className="grid grid-rows-2 hover:grid-rows-6 grid-flow-col gap-4 my-3 group">
                <div style={colStyle}>col-1</div>
                <div className="row-start-2 row-end-6 hidden group-hover:block" style={colStyleEmpty}>empty</div>
                <div style={colStyle}>col-2</div>
            </div>
        </CustomCommonCard>
    )
}

export const GridRowStartEndRowSpan = () => {
    return (
        <CustomCommonCard styles={{width: '80vw', }}
                          header="Grid Row Placement"
                          subHeader="Tailwinds grid row start, end and span"
                          updateDate="26-10-2024"
                          updateBy="Mizpuno Codex"
                          footerCenter={true}>
            <div className="grid grid-rows-6 grid-flow-col gap-4 my-3">
                <div className="row-span-6" style={colStyle}>col-1 <span className="text-gray-400">row-span-6</span></div>
                <div className="row-start-1 row-end-4" style={colStyle}>col-2 <span className="text-gray-400">row-start-1 row-end-4</span></div>
                <div className="row-end-7 row-span-3" style={colStyle}>col-3 <span className="text-gray-400">row-end-7 row-span-3</span></div>
                <div className="row-span-2" style={colStyleEmpty}>empty</div>
                <div className="row-start-3 row-span-2" style={colStyle}>col-4 <span className="text-gray-400">row-start-3 row-span-2</span></div>
                <div className="row-end-7 row-span-2" style={colStyle}>col-5 <span className="text-gray-400">row-end-7 row-span-2</span></div>
            </div>
        </CustomCommonCard>
    )
}

