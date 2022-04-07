import React from "react"
import { useRouter } from "next/dist/client/router"

const ProductDetailWithParamsPage = () => {
    const router = useRouter()

    return (
        <div>
            <div>ProductDetailWithParamsPage</div>
            <div> {JSON.stringify(router.query)}</div>
        </div>
    )
}

export default ProductDetailWithParamsPage
