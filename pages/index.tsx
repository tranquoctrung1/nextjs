import type { GetStaticPropsResult, InferGetStaticPropsType, NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Link from "next/link"
import { useRouter } from "next/dist/client/router"
import { getSortedPostsData } from "../lib/post"

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData,
        },
    }
}

const Home = ({ allPostsData }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter()

    function goToProductDetailPage() {
        router.push({
            pathname: "/product/[productid]",
            query: {
                productid: 12345,
                id: 44444,
            },
        })
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Learn NextJS</title>
                <meta name="description" content="Learn NextJs + Typescript" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Link href="/about">
                    <a>Go to About Page</a>
                </Link>
                <Link href="/product">
                    <a>Go to Product Page</a>
                </Link>

                <button type="button" onClick={goToProductDetailPage}>
                    Go to Detail Page
                </button>
                <div>
                    {/* Keep the existing code here */}

                    {/* Add this <section> tag below the existing <section> tag */}
                    <section>
                        <h2>Blog</h2>
                        <ul>
                            {allPostsData.map((el) => (
                                <li key={el.id}>
                                    {/* {el.title} */}
                                    <br />
                                    {el.id}
                                    <br />
                                    {/* {el.date} */}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <span className={styles.logo}>
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer>
        </div>
    )
}

export default Home
