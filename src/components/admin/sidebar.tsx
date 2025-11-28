"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
    LayoutDashboard,
    Users,
    Shield,
    Settings,
    Activity,
    FileText
} from "lucide-react"

const navigation = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Users & Teams", href: "/admin/users", icon: Users },
    { name: "Security & Compliance", href: "/admin/security", icon: Shield },
    { name: "Brand Assets", href: "/admin/brand", icon: FileText },
    { name: "Usage Analytics", href: "/admin/analytics", icon: Activity },
    { name: "Settings", href: "/admin/settings", icon: Settings },
]

export function AdminSidebar() {
    const pathname = usePathname()

    return (
        <div className="flex h-screen w-64 flex-col border-r bg-surface">
            <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-lg bg-accent" />
                    <span className="text-xl font-bold tracking-tight">NovaKiwi</span>
                </div>
                <div className="px-1">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Admin Console</span>
                </div>
            </div>

            <div className="px-3 py-2">
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
                <Link href="/workspace" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    &larr; Back to Workspace
                </Link>
            </div>
        </div>
    )
}
