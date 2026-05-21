import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import acolyteSkillTree from "@/assets/images/acolyte_skill_tree.png"
import championSkillTree from "@/assets/images/champion_skill_tree.png"
import suraSkillTree from "@/assets/images/sura_skill_tree.png"
import inquisitorSkillTree from "@/assets/images/inquisitor_skill_tree.png"

const statBuilds = [
  {
    value: "jeon",
    label: "Jeon Style",
    stats: [
      {
        level: "LV.200",
        values:
          "STR 120  ·  AGI 60  ·  VIT 120  ·  INT 46  ·  DEX 108  ·  LUK 108",
      },
      { level: "LV.250", values: "POW 100  ·  CON 97" },
    ],
  },
  {
    value: "vivz-tz",
    label: "Viva-Tz Style",
    stats: [
      {
        level: "LV.200",
        values:
          "STR 120  ·  AGI 110  ·  VIT 125  ·  INT 40  ·  DEX 110  ·  LUK 23",
      },
      { level: "LV.250", values: "POW 100  ·  CON 97" },
    ],
  },
]

const skillTabs = [
  {
    value: "acolyte",
    label: "Acolyte",
    img: acolyteSkillTree,
    steps: [
      { 1: "Divine Protection - 10" },
      { 2: "Demon Bane - 10" },
      { 3: "Blessing - 10" },
      { 4: "Increase AGI - 10" },
      { 5: "Warp Portal - 3" },
    ],
  },
  {
    value: "champion",
    label: "Champion",
    img: championSkillTree,
    steps: [
      { 1: "Snap - 1" },
      { 2: "Iron Hand - 10" },
      { 3: "Zen - 1" },
      { 4: "Vigor Recovery - 5" },
      { 5: "Pneuma - 1 (Acolyte Class)" },
      { 6: "Angelus - 9 (Acolyte Class)" },
    ],
  },
  {
    value: "sura",
    label: "Sura",
    img: suraSkillTree,
    steps: [
      { 1: "Rising Dragon Lv 10" },
      { 2: "Power Absorb Lv 1" },
      { 3: "Flash Combo Lv 5" },
      { 4: "Gentle Touch - Alive Lv 5" },
      { 5: "Tiger Cannon Lv 10" },
      { 6: "Fallen Empire Lv 10" },
      { 7: "Dragon Combo Lv 10" },
      { 8: "Gentle Touch - Save Lv 5" },
    ],
    note: "Point ที่เหลือกลับไปอัพ Class 1 & 2 ได้เลย",
  },
  {
    value: "inquisitor",
    label: "Inquisitor",
    img: inquisitorSkillTree,
    steps: [
      { 1: "Explosion Blaster Lv 1" },
      { 2: "Powerful Faith Lv 5" },
      { 3: "First Faith Power Lv 5" },
      { 4: "2nd chapter - Arbiter(Judge) Lv 5" },
      { 5: "Third Exorcism Flame Lv 5" },
      { 6: "Third Flame Bomb Lv 5" },
      { 7: "Second Judgement Lv 5" },
      { 8: "Will of Faith Lv 10" },
      { 9: "First Brand Lv 5" },
    ],
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl space-y-10 px-6 py-12">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold tracking-tight">Inquisitor</h1>
            <Badge
              variant="secondary"
              className="text-xs tracking-widest uppercase"
            >
              Third Flame Bomb
            </Badge>
          </div>
          <Separator />
        </div>

        {/* Status Section */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
            Status Build
          </h2>
          <Tabs defaultValue="jeon">
            <TabsList variant="line">
              {statBuilds.map((b) => (
                <TabsTrigger key={b.value} value={b.value}>
                  {b.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {statBuilds.map((b) => (
              <TabsContent key={b.value} value={b.value} className="mt-4">
                <Card>
                  <CardContent className="space-y-3 pt-6">
                    {b.stats.map((s) => (
                      <div
                        key={s.level}
                        className="flex flex-col gap-2 sm:flex-row sm:items-center"
                      >
                        <Badge
                          variant="outline"
                          className="w-fit font-mono text-xs"
                        >
                          {s.level}
                        </Badge>
                        <span className="font-mono text-sm text-muted-foreground">
                          {s.values}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Skill Tree Section */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
            Skill Tree
          </h2>
          <Tabs defaultValue="acolyte">
            <TabsList variant="line">
              {skillTabs.map((t) => (
                <TabsTrigger key={t.value} value={t.value}>
                  {t.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {skillTabs.map((t) => (
              <TabsContent
                key={t.value}
                value={t.value}
                className="mt-4 space-y-3"
              >
                <Card>
                  <CardContent className="pt-6">
                    <Image
                      src={t.img}
                      alt={`${t.label} Skill Tree`}
                      quality={100}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </CardContent>
                </Card>
                {t.note && (
                  <p className="px-1 text-sm text-muted-foreground">
                    💡 {t.note}
                  </p>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </section>

        <h3>Items</h3>
      </div>
    </main>
  )
}
