import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Page() {
  return (
    <main>
      <h1>Inquisitor</h1>
      <h2>Third Flame Bomb</h2>
      <h3>Status:</h3>
      <Tabs defaultValue="jeon">
        <TabsList variant="line">
          <TabsTrigger value="jeon">Jeon Style</TabsTrigger>
          <TabsTrigger value="vivz-tz">Viva-Tz Style</TabsTrigger>
        </TabsList>
        <TabsContent value="jeon">
          <p>LV.200: STR 120, AGI 60, VIT 120, INT 46, DEX 108, LUK 108</p>
          <p>LV.250: POW 100, CON 97</p>
        </TabsContent>
        <TabsContent value="vivz-tz">
          <p>LV.200: STR 125, AGI 101, VIT 125, INT 50, DEX 110, LUK 1</p>
          <p>LV.250: POW 100, CON 97</p>
        </TabsContent>
      </Tabs>
      <h3>Skill:</h3>
      <Tabs defaultValue="acolyte">
        <TabsList variant="line">
          <TabsTrigger value="acolyte">Acolyte</TabsTrigger>
          <TabsTrigger value="champion">Champion</TabsTrigger>
          <TabsTrigger value="sura">Sura</TabsTrigger>
          <TabsTrigger value="inquisitor">Inquisitor</TabsTrigger>
        </TabsList>
        <TabsContent value="acolyte">
          <Image
            src="/images/acolyte_skill_tree.png"
            alt="Acolyte Skill Tree"
            width={1316}
            height={337}
          />
        </TabsContent>
        <TabsContent value="champion">
          <Image
            src="/images/champion_skill_tree.png"
            alt="Champion Skill Tree"
            width={1137}
            height={422}
          />
          <p>อีก 2 point ที่เหลือ กลับไปอัพ Increase Agility ให้เต็ม 10</p>
        </TabsContent>
        <TabsContent value="sura">
          <Image
            src="/images/sura_skill_tree.png"
            alt="Sura Skill Tree"
            width={1059}
            height={401}
          />
        </TabsContent>
        <TabsContent value="inquisitor">
          <Image
            src="/images/inquisitor_skill_tree.png"
            alt="Inquisitor Skill Tree"
            width={1059}
            height={401}
          />
        </TabsContent>
      </Tabs>
    </main>
  )
}
