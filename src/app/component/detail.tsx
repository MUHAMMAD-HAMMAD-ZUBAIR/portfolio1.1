import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Projects from "./projects";
export function Detail() {
  return (
    <Tabs defaultValue="education" className="w-full p-3">
      <TabsList className="grid w-full grid-cols-4">
        {/* tabs trigger button */}
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
      </TabsList>
      {/* tabs content here*/}
      {/* education*/}
      <TabsContent value="education">
        <Education />
      </TabsContent>
      {/* experience */}
      <TabsContent value="experience">
        <Experience />
      </TabsContent>
      {/* skills */}
      <TabsContent value="skills">
        <Skills />
      </TabsContent>
      {/* projects */}
      <TabsContent value="projects">
        <Projects />
      </TabsContent>
    </Tabs>
  );
}
