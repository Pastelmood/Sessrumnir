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
          "STR 125  ·  AGI 101  ·  VIT 125  ·  INT 50  ·  DEX 110  ·  LUK 1",
      },
      { level: "LV.250", values: "POW 100  ·  CON 97" },
    ],
  },
]

const skillTabs = [
  { value: "acolyte", label: "Acolyte", img: acolyteSkillTree },
  {
    value: "champion",
    label: "Champion",
    img: championSkillTree,
    note: "อีก 2 point ที่เหลือ กลับไปอัพ Increase Agility ให้เต็ม 10",
  },
  { value: "sura", label: "Sura", img: suraSkillTree },
  { value: "inquisitor", label: "Inquisitor", img: inquisitorSkillTree },
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
