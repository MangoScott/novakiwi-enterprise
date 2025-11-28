"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-surface p-4">
            <div className="absolute top-8 left-8">
                <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
            </div>

            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <div className="mx-auto h-12 w-12 rounded-xl bg-accent mb-4" />
                    <CardTitle className="text-2xl">Welcome back</CardTitle>
                    <CardDescription>
                        Click below to explore the demo dashboards
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Input type="email" placeholder="name@company.com" disabled />
                    </div>
                    <Link href="/workspace" className="block">
                        <Button className="w-full" size="lg">
                            View Workspace Demo
                        </Button>
                    </Link>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Or view admin panel
                            </span>
                        </div>
                    </div>
                    <Link href="/admin" className="block">
                        <Button variant="outline" className="w-full">
                            View Admin Dashboard
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}
```
