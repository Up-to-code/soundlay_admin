/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
"use client";
import useFirestoreDoc from "@/hook/useFirestoreDoc";
import Divmotion from "../motion/div";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import Link from "next/link";
import useFirestore from "@/hook/useFirestore";
export default function CardCol() {
  const { docs, loading, error } = useFirestore("Sounds");
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className=" flex flex-wrap gap-10 my-10">
      {docs &&
        docs.docs.reverse().map((doc, index: number) => {
          if (doc.data().name == undefined) {
            return;
          }
          return (
            <Divmotion key={index}>
              <Card className="min-w-[300px]  my-10 border border-primary ">
                <CardHeader>
                  <CardTitle>{doc.data().name}</CardTitle>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter>
                  <Link href={`/${doc.id}`}>
                    <Button>Button</Button>
                  </Link>
                </CardFooter>
              </Card>
            </Divmotion>
          );
        })}
    </div>
  );
}
