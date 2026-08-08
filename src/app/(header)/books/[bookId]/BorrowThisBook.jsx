"use client"

import { Button } from "@heroui/react";
import Link from "next/link";
import { toast } from "sonner";

const BorrowThisBook = () => {
    return (
        <div>
            

                <Button onClick={() => {
                    toast.success("borrowed book successfully", {
                        duration:4000
                    })
                }}>Borrow This Book</Button>
        </div>
    );
};

export default BorrowThisBook;