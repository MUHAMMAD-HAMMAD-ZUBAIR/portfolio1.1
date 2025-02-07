
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const Experience = () => {
  //  my experience here
  const experience = [
    {
      company: "Company Name Here",
      dateStart: "September 2021",
      dateEnd: "October 2023",
      position: "Full Stack Developer",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat amet sunt culpa hic in inventore magni nisi itaque eligendi labore voluptate impedit, exercitationem sit praesentium quibusdam doloribus? Assumenda, rem cupiditate?",
      work:["develop there official website","make e-commerce website for client","have contributed on the team task "],
      },
      {
        company: "Company Name Here",
        dateStart: "September 2021",
        dateEnd: "October 2023",
        position: "Full Stack Developer",
        details:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat amet sunt culpa hic in inventore magni nisi itaque eligendi labore voluptate impedit, exercitationem sit praesentium quibusdam doloribus? Assumenda, rem cupiditate?",
        work:["develop there official website",
          "make e-commerce website for client",
         ],
        },
        {
          company: "Company Name Here",
          dateStart: "September 2021",
          dateEnd: "October 2023",
          position: "Full Stack Developer",
          details:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat amet sunt culpa hic in inventore magni nisi itaque eligendi labore voluptate impedit, exercitationem sit praesentium quibusdam doloribus? Assumenda, rem cupiditate?",
          work:["develop there official website",
            "make e-commerce website for client",
            "have contributed on the team task "],
          },
  ];
  return (
    <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight">
          Experience
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {/* DATA here*/}
          {experience.map((item, i) => (
            <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700 uppercase">
                  {item.position}
                </span>
                <span className="mt-1 text-gray-500 text-sm">{`${item.dateStart} - ${item.dateEnd}`}</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
                  {item.company}
                </h2>
                <p className="leading-relaxed"></p>
              <ul className="ml-4 list-disc mr-2">
                {item.work.map((workItem,i)=>(
                   <li key={i}>{workItem}</li>
                ))}
               
             
              </ul>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Experience;
