"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Activity, FileCheck, AlertCircle } from "lucide-react"

const stats = [
    { title: "Total Users", value: "2,543", change: "+12% this month", icon: Users },
    { title: "Active Automations", value: "14,205", change: "+8% this week", icon: Activity },
    { title: "Generated Assets", value: "45,231", change: "+24% this month", icon: FileCheck },
    { title: "Pending Approvals", value: "12", change: "Requires attention", icon: AlertCircle, alert: true },
]

export default function AdminDashboard() {
    return (
        <div className="container mx-auto p-8 max-w-7xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Admin Overview</h1>
                <p className="text-muted-foreground">Manage your enterprise instance and monitor usage.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
                {stats.map((stat, index) => (
                    <Card key={index}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {stat.title}
                            </CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className={`text-xs ${stat.alert ? "text-red-500 font-medium" : "text-muted-foreground"}`}>
                                {stat.change}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Usage Trends</CardTitle>
                        <CardDescription>
                            Daily active users over the last 30 days
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[200px] flex items-end justify-between gap-2 px-4">
                            {[...Array(30)].map((_, i) => (
                                <div
                                    key={i}
                                    className="bg-accent/50 hover:bg-accent rounded-t w-full transition-colors"
                                    style={{ height: `${Math.random() * 100}%` }}
                                />
                            ))}
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>
                            Latest actions across the organization
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { user: "Sarah M.", action: "Created Q3 Sales Report", time: "2m ago" },
                                { user: "John D.", action: "Updated Brand Guidelines", time: "15m ago" },
                                { user: "Team Alpha", action: "Deployed new automation", time: "1h ago" },
                                { user: "System", action: "Backup completed", time: "4h ago" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between border-b last:border-0 pb-2 last:pb-0">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">{item.user}</p>
                                        <p className="text-xs text-muted-foreground">{item.action}</p>
                                    </div>
                                    <div className="text-xs text-muted-foreground">{item.time}</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
