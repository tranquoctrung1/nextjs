import React from "react"
import { useRouter } from "next/dist/client/router"

const ProductDetailPage = () => {
    const router = useRouter()

    return (
        <div>
            <div>ProductDetailPage</div>
            <div> {JSON.stringify(router.query)}</div>
        </div>
    )
}

export default ProductDetailPage
