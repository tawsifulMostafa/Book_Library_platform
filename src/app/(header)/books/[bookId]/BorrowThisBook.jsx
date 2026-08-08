"use client"

import { Button } from "@heroui/react";
import Link from "next/link";
import { toast } from "sonner";

const BorrowThisBook = () => {
    return (
        <div>
            <Link href={"/"}>

                <Button onClick={() => {
                    toast.success("borrowed book successfully", {
                        duration:4000
                    })
                }}>Borrow This Book</Button></Link>
        </div>
    );
};

export default BorrowThisBook;