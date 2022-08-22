import React, { useState } from "react";
import "./Tabs.css";
import Edmtab from "../TabComponents/AllTabs/EdmTab";
import Landingtab from "../TabComponents/AllTabs/LandingTab";
import Thankstab from "../TabComponents/AllTabs/ThankyouTab"; 


import TabNavItem from "./V2/TabNavItem";
import TabContent from "./V2/TabContent";



const Tabs = () => {
    const [activeTab, setActiveTab] = useState("EDM");
    
   

  return (<>
    <div className="Tabs">
     
      <ul className="nav">
        <TabNavItem title="EDM" id="EDM" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="LANDING" id="LANDING" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="THANKS" id="THANKS" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
      
    </div>
        <div className="outlet">
           
            <TabContent id="EDM" activeTab={activeTab}>
                <Edmtab />
            </TabContent>

            <TabContent id="LANDING" activeTab={activeTab}>
                <Landingtab />
            </TabContent>

            <TabContent id="THANKS" activeTab={activeTab}>
                <Thankstab />
            </TabContent>


        </div>
  </>
  );
};
export default Tabs;