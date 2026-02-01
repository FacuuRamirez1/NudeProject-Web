'use client'
import { CollectionType } from "@/types/collections";
import { ResponseType } from "@/types/responses";
import { useEffect, useState } from "react";

export function useGetCollections() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/collections?[isActive][$eq]=true&populate=*`
    const [req, setReq] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url, { cache: "no-store" })
                const json = await res.json()
                setReq(json.data)
                setLoading(false)
            } catch (error) {
                setError(`${error}`)
                setLoading(false)
            }
        })()
    }, [url])

    return { loading, req, error } as ResponseType<CollectionType[]>;
}