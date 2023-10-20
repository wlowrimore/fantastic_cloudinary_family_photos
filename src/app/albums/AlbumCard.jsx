import * as React from "react"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const AlbumCard = ({ folder }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{folder.name}</CardTitle>
        <CardDescription>All of Your {folder.name} Images.</CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild><Link href={`/albums/${folder.name}`}>View Album</Link></Button>
      </CardFooter>
    </Card>
  )
}

export default AlbumCard;
