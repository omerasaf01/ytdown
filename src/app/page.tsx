"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import YouTube from "react-youtube";

interface Iinfo {
  data: {
    title: string;
    author: string;
    image: string;
  };
}

export default function Home() {
  const [state, setState] = useState<string>();
  const [info, setInfo] = useState<Iinfo>();
  const [id, setId] = useState<string>();

  const get = async () => {
    axios.post("/api/youtube", { url: state }).then((response) => {
      console.log(response.data);
      setInfo(response.data);
    });
  };

  const getId = async () => {
    axios.get("/api/youtube", { params: { link: state } }).then((response) => {
      setId(response.data.id);
      console.log(response.data);
    });
  };

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Youtube Video Downloader</CardTitle>
          <CardDescription>
            A simple and minimalist youtube video downloader
          </CardDescription>
        </CardHeader>
        <CardHeader>
          <div className="flex gap-1.5">
            <Input
              onChange={(e) => setState(e.currentTarget.value)}
              id="search"
              placeholder="Youtube video link"
            />
            <Button onClick={get}>Search</Button>
          </div>
          <div>
            {info?.data.title !== undefined ? (
              <Card>
                <CardHeader className="flex flex-col items-center">
                  <Image
                    src={info !== undefined ? info.data.image : ""}
                    width={500}
                    height={200}
                    alt="video banner"
                  />

                  <CardTitle>{info.data.title}</CardTitle>
                  <CardDescription>{info.data.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full" onClick={getId}>Download</Button>
                    </DialogTrigger>
                    <DialogContent className="flex flex-col justify-center">
                      <DialogHeader>
                        <DialogTitle>Your video ready to download</DialogTitle>
                        <DialogDescription>
                          You can install video with under the buttons
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex justify-center relative overflow-hidden">
                        <YouTube
                          className="2-12 relative"
                          videoId={
                            id
                          }
                        />
                      </div>
                      <Button>
                        <Link href={`/api/youtube/download?link=${state}`}>
                          Download
                        </Link>
                      </Button>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ) : null}
          </div>
        </CardHeader>
      </Card>
    </main>
  );
}
