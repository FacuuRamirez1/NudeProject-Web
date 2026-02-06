'use client'

import { ProductType } from "@/types/products";
import { ResponseType } from "@/types/responses";
import { useEffect, useState } from "react";

// CALL TO FETCH ALL PRODUCTS
export function useGetProducts() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?[isActive][$eq]=true&populate=*`;
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

    return { loading, req, error } as ResponseType<ProductType[]>;
}


// CALL TO FETCH PRODUCT FOR CATEGORIES
export function useGetProductCategory(category: string) {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?[Category][$eq]=${category}&populate=*`;
    const [req, setReq] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        (async () => {
            setLoading(true)
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
    return { loading, req, error } as ResponseType<ProductType[]>;
}


// CALL TO FETCH PRODUCT FOR id
export function useGetProduct(id: number) {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[id][$eq]=${id}&populate[details][populate]=*&populate[productImage]=true&populate[collectionItem]=true`
    const [req, setReq] = useState<ProductType[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        (async () => {
            setLoading(true)
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
    }, [url, id]);

    return { loading, req, error } as ResponseType<ProductType[]>;
}