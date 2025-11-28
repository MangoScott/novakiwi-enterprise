"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    LayoutDashboard,
    FileSpreadsheet,
    Presentation,
    Bot,
    Settings,
    Plus,
    Search
} from "lucide-react"

const navigation = [
    { name: "Dashboard", href: "/workspace", icon: LayoutDashboard },
    { name: "Presentations", href: "/workspace/presentations", icon: Presentation },
    { name: "Spreadsheets", href: "/workspace/spreadsheets", icon: FileSpreadsheet },
    { name: "Automations", href: "/workspace/automations", icon: Bot },
    { name: "Settings", href: "/workspace/settings", icon: Settings },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="flex h-screen w-64 flex-col border-r bg-surface">
            <div className="p-6">
                <div className="flex items-center gap-2 mb-8">
                    <div className="h-8 w-8 rounded-lg bg-accent" />
                    <span className="text-xl font-bold tracking-tight">NovaKiwi</span>
                </div>

                <Button className="w-full justify-start gap-2" size="lg">
                    <Plus className="h-4 w-4" />
                    New Project
                </Button>
            </div>

            <div className="px-3 py-2">
                <div className="relative mb-4 px-3">
                    <Search className="absolute left-5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full rounded-md border bg-background pl-9 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-accent"
                    />
                </div>

                <nav className="space-y-1">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-accent/10 text-accent-foreground"
                                        : "text-muted-foreground hover:bg-muted/10 hover:text-foreground"
                                )}
                            >
                                <item.icon className="h-4 w-4" />
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>
            </div>

            <div className="mt-auto p-6 border-t">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-muted/20" />
                    <div className="text-sm">
                        <p className="font-medium">Jane Doe</p>
                        <p className="text-xs text-muted-foreground">Enterprise Plan</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
