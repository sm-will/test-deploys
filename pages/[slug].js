import { useRouter } from 'next/router'

export default function Page({ query }) {
  const router = useRouter()
  console.log(router.query)
  return <h1>dynamic route {JSON.stringify(router.query)}</h1>
}
