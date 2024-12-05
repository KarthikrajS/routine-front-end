import React, { useEffect } from "react";

const Tabs = ({ color, tabData, view , setView}) => {
    const [openTab, setOpenTab] = React.useState(1);

    console.log(tabData, "tabData");

    useEffect(() => {
        setOpenTab(view == "list" ? 2 : 1)
    }, [view])
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex mb-0 mr-3 list-none flex-wrap pt-3 pb-4 flex-row relative float-right gap-3"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 1
                                        ? "text-" + color + "-600 bg-white"
                                        : "text-black bg-" + color + "-600")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                    setView("calendar")
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                {tabData[0]?.title}

                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 2
                                        ? "text-" + color + "-600 bg-white"
                                        : "text-black bg-" + color + "-600")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                    setView("list")
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                {tabData[1]?.title}

                            </a>
                        </li>

                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    {tabData[openTab - 1]?.data}
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    {tabData[openTab - 1]?.data}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function TabsRender({ tabData, view , setView}) {
    return (
        <>
            <Tabs color="blue" tabData={tabData} view={view} setView={setView} />;
        </>
    );
}