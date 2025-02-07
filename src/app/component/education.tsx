
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const Education = () => {
  //  my education here
  const education = [
    {
      uniName: "A TUTOR ACADEMY KARACHI",
      date: "September 2023",
      field: "Computer Science",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat amet sunt culpa hic in inventore magni nisi itaque eligendi labore voluptate impedit, exercitationem sit praesentium quibusdam doloribus? Assumenda, rem cupiditate?",
    },

    {
      uniName: "A TUTOR ACADEMY KARACHI",
      date: "September 2023",
      field: "Computer Science",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat amet sunt culpa hic in inventore magni nisi itaque eligendi labore voluptate impedit, exercitationem sit praesentium quibusdam doloribus? Assumenda, rem cupiditate?",
    },

    {
      uniName: "A TUTOR ACADEMY KARACHI",
      date: "September 2023",
      field: "Computer Science",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat amet sunt culpa hic in inventore magni nisi itaque eligendi labore voluptate impedit, exercitationem sit praesentium quibusdam doloribus? Assumenda, rem cupiditate?",
    },
    {
      uniName: "A TUTOR ACADEMY KARACHI",
      date: "September 2023",
      field: "Computer Science",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat amet sunt culpa hic in inventore magni nisi itaque eligendi labore voluptate impedit, exercitationem sit praesentium quibusdam doloribus? Assumenda, rem cupiditate?",
    },
    {
      uniName: "A TUTOR ACADEMY KARACHI",
      date: "September 2023",
      field: "Computer Science",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat amet sunt culpa hic in inventore magni nisi itaque eligendi labore voluptate impedit, exercitationem sit praesentium quibusdam doloribus? Assumenda, rem cupiditate?",
    },
    {
      uniName: "A TUTOR ACADEMY KARACHI",
      date: "September 2023",
      field: "Computer Science",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat amet sunt culpa hic in inventore magni nisi itaque eligendi labore voluptate impedit, exercitationem sit praesentium quibusdam doloribus? Assumenda, rem cupiditate?",
    },
    {
      uniName: "A TUTOR ACADEMY KARACHI",
      date: "September 2023",
      field: "Computer Science",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat amet sunt culpa hic in inventore magni nisi itaque eligendi labore voluptate impedit, exercitationem sit praesentium quibusdam doloribus? Assumenda, rem cupiditate?",
    },
    {
      uniName: "A TUTOR ACADEMY KARACHI",
      date: "September 2023",
      field: "Computer Science",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat amet sunt culpa hic in inventore magni nisi itaque eligendi labore voluptate impedit, exercitationem sit praesentium quibusdam doloribus? Assumenda, rem cupiditate?",
    },
    {
      uniName: "A TUTOR ACADEMY KARACHI",
      date: "September 2023",
      field: "Computer Science",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat amet sunt culpa hic in inventore magni nisi itaque eligendi labore voluptate impedit, exercitationem sit praesentium quibusdam doloribus? Assumenda, rem cupiditate?",
    },
    {
      uniName: "A TUTOR ACADEMY KARACHI",
      date: "September 2023",
      field: "Computer Science",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat amet sunt culpa hic in inventore magni nisi itaque eligendi labore voluptate impedit, exercitationem sit praesentium quibusdam doloribus? Assumenda, rem cupiditate?",
    },
  ];
  return (
    <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight">
          Education
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {/* Matric */}
          {education.map((item, i) => (
            <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700 uppercase">
                  {item.field}
                </span>
                <span className="mt-1 text-gray-500 text-sm">{item.date}</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
                  {item.uniName}
                </h2>
                <p className="leading-relaxed">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Education;
